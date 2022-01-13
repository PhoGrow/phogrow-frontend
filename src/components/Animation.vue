<template>
  <div
    :class="[
      'is-flex is-relative',
      {
        'is-align-items-center is-justify-content-center':
          animationNotAvailable,
        'is-align-items-end is-justify-content-end':
          hasFullscreenSupport && loadedAnimation && !animationNotAvailable
      }
    ]"
    style="height: 20rem"
  >
    <p v-if="!loadedAnimation && loadingProgress < 100">
      {{ loadingProgress }}%
    </p>
    <p
      v-if="animationNotAvailable"
      class="has-background-warning-light py-1 px-4 is-rounded is-size-5"
    >
      Sadly, there is no animation, yet 🥺
    </p>
    <b-loading :active="!loadedAnimation" :is-full-page="false"></b-loading>
    <button
      @click="toggleFullscreen"
      v-if="hasFullscreenSupport && loadedAnimation && !animationNotAvailable"
      class="button is-small is-rounded is-dark is-absolute mb-3 mr-3"
    >
      <span class="icon">
        <i class="material-icons-round has-text-white">{{
          !isFullsceen ? 'fullscreen' : 'fullscreen_exit'
        }}</i>
      </span>
    </button>
  </div>
</template>

<script>
import screenfull from 'screenfull';
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  AmbientLight,
  Box3,
  Vector3,
  Mesh
} from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export default {
  name: 'Animation',
  props: {
    animation: String
  },
  data() {
    return {
      url: '',
      loadingProgress: 0,
      loadedAnimation: false,
      animationNotAvailable: false,
      hasFullscreenSupport: screenfull.isEnabled,
      isFullsceen: false,
      scene: new Scene(),
      camera: {},
      renderer: new WebGLRenderer({ alpha: true }),
      loader: new GLTFLoader(),
      orbitCtrl: {},
      lightSet: {},
      meshes: [],
      prevTime: 0,
      appTimeSeconds: 0,
      blendTime: 2.0,
      totalBlendTime: 0
    };
  },
  mounted() {
    this.init();

    this.loader.load(
      '/animations/' + this.animation,
      (gltf) => {
        // Add animation to scene
        this.loadedAnimation = true;
        const transScene = this.transform(gltf.scene);
        this.scene.add(transScene);

        // Get all meshes
        const listObjs = {};
        transScene.traverse((obj) => {
          if (obj instanceof Mesh) {
            listObjs[obj.name] = obj;
          }
        });

        // Sort meshes by names
        // Apply blending start times to them
        let counter = 0;
        const test = Object.keys(listObjs).sort();
        for (let i = 0; i < test.length; i++) {
          const key = test[i];
          const obj = listObjs[key];
          obj.material.side = 2;
          // obj.material.transparent = true;
          obj.material.opacity = 1.0;
          // obj.material.visible = false;
          obj.blendTime = counter * this.blendTime;
          this.meshes.push(obj);
          counter++;
        }

        // Store the overall blending time
        this.totalBlendTime = this.blendTime * this.meshes.length;
      },
      (xhr) => {
        this.loadingProgress = Math.round((xhr.loaded / xhr.total) * 100);
      },
      (err) => {
        console.log(err);
        this.loadedAnimation = true;
        this.animationNotAvailable = true;
        return;
      }
    );

    this.animate();
  },
  methods: {
    init() {
      this.camera = new PerspectiveCamera(
        75,
        this.$el.clientWidth / this.$el.clientHeight,
        0.1,
        1000
      );

      this.orbitCtrl = new OrbitControls(this.camera, this.renderer.domElement);
      this.renderer.setSize(this.$el.clientWidth, this.$el.clientHeight);
      window.addEventListener('resize', this.onWindowResize);
      this.$el.appendChild(this.renderer.domElement);

      // Setup lights
      this.lightSet = new AmbientLight(0xffffff, 1);
      this.scene.add(this.lightSet);
    },
    // Position the scene such that everything fits into the camera-view
    transform(scene) {
      const boundingBox = new Box3().setFromObject(scene);
      const size = boundingBox.getSize(new Vector3()).length();
      const center = boundingBox.getCenter(new Vector3());

      scene.position.x += scene.position.x - center.x;
      scene.position.y += scene.position.y - center.y;
      scene.position.z += scene.position.z - center.z;
      this.orbitCtrl.maxDistance = size * 10;
      this.camera.near = size / 100;
      this.camera.far = size * 100;

      this.camera.position.copy(center);
      this.camera.position.x += size / 2.0;
      this.camera.position.y += size / 5.0;
      this.camera.position.z += size / 2.0;
      this.camera.lookAt(center);
      this.camera.updateMatrix();
      this.camera.updateProjectionMatrix();

      return scene;
    },
    animate(time) {
      requestAnimationFrame(this.animate);

      // Start once the animation is loaded
      if (!this.loadedAnimation) {
        this.prevTime = time;
        return;
      }

      // Rendering, control and timing updates
      this.renderer.render(this.scene, this.camera);
      this.orbitCtrl.update();
      const dt = (time - this.prevTime) / 1000;
      this.prevTime = time;
      this.appTimeSeconds += dt;

      // Blend in meshes when their blendTime has been reached and blend out the others
      this.meshes.forEach((mesh) => {
        if (
          this.appTimeSeconds >= mesh.blendTime &&
          this.appTimeSeconds <= mesh.blendTime + this.blendTime
        ) {
          mesh.material.alphaTest = 100;
          // mesh.material.opacity = 1.0;
          mesh.material.visible = true;
        } else {
          // mesh.material.opacity = 0.0;
          mesh.material.visible = false;
        }
      });

      // Restart the timer -> animation starts over from the beginning
      if (this.appTimeSeconds > this.totalBlendTime) {
        this.appTimeSeconds = 0;
        this.meshes.forEach((mesh) => {
          // mesh.material.opacity = 0.0;
          mesh.material.visible = false;
        });
      }
    },
    toggleFullscreen() {
      screenfull.toggle(this.$el);
      this.isFullsceen = !this.isFullsceen;
      this.onWindowResize();
    },
    onWindowResize() {
      this.$nextTick(() => {
        this.camera.aspect = this.$el.clientWidth / this.$el.clientHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(this.$el.clientWidth, this.$el.clientHeight);
      });
    }
  }
};
</script>

<style scoped></style>
