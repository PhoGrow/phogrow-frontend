<template>
  <div class="is-relative is-flex is-align-items-end is-justify-content-end">
    <b-loading
      :active="!loadedAnimation"
      :is-full-page="false"
      class="br-2"
    ></b-loading>
    <button
      @click="toggleFullscreen"
      v-if="hasFullscreenSupport && loadedAnimation"
      class="button is-rounded has-background-bright-green is-absolute p-4 mb-3 mr-3"
    >
      <span class="icon">
        <i class="material-icons-round">{{
          isFullscreen ? 'fullscreen_exit' : 'fullscreen'
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
      loadingProgress: 0,
      loadedAnimation: false,
      hasFullscreenSupport: screenfull.isEnabled,
      isFullscreen: false,
      resizeObserver: new ResizeObserver(this.onWindowResize)
    };
  },
  static() {
    return {
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

        this.$el.children[this.$el.children.length - 1].classList.add('br-2');
      },
      (xhr) => {
        this.loadingProgress = Math.round((xhr.loaded / xhr.total) * 100);
      },
      (err) => {
        console.log('[ERROR] Animation', err);
        return;
      }
    );

    this.animate();
  },
  beforeDestroy() {
    this.resizeObserver.unobserve(this.$el);
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
      this.resizeObserver.observe(this.$el);
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
      // this.meshes.forEach((mesh) => {
      //   if (
      //     this.appTimeSeconds >= mesh.blendTime &&
      //     this.appTimeSeconds <= mesh.blendTime + this.blendTime
      //   ) {
      //     mesh.material.alphaTest = 100;
      //     // mesh.material.opacity = 1.0;
      //     mesh.material.visible = true;
      //   } else {
      //     // mesh.material.opacity = 0.0;
      //     mesh.material.visible = false;
      //   }
      // });
      //
      // // Restart the timer -> animation starts over from the beginning
      // if (this.appTimeSeconds > this.totalBlendTime) {
      //   this.appTimeSeconds = 0;
      //   this.meshes.forEach((mesh) => {
      //     // mesh.material.opacity = 0.0;
      //     mesh.material.visible = false;
      //   });
      // }
    },
    toggleFullscreen() {
      screenfull.toggle(this.$el);
    },
    onWindowResize(entries) {
      this.$el.style.height = entries[0].contentRect.width + 'px';
      this.isFullscreen = screenfull.isFullscreen;
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
