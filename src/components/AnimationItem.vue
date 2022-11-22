<template>
  <div
    class="is-relative is-flex is-align-items-end is-justify-content-end has-background-light br-2"
  >
    <o-skeleton
      :active="!loadedAnimation"
      height="100%"
      :rounded="false"
      class="is-absolute"
      style="height: 100%"
    ></o-skeleton>
    <button
      v-if="hasFullscreenSupport && loadedAnimation"
      class="button is-rounded has-background-bright-green is-absolute p-2 mb-4 mr-4"
      @click="toggleFullscreen"
    >
      <ImageItem
        :src="
          '/icons/' + (isFullscreen ? 'fullscreen_exit' : 'fullscreen') + '.svg'
        "
      />
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ImageItem from '@/components/ImageItem.vue';
import screenfull from 'screenfull';
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  AmbientLight,
  Box3,
  Vector3,
  Mesh,
  Group,
} from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export default defineComponent({
  name: 'AnimationItem',
  components: {
    ImageItem,
  },
  props: {
    animation: String,
  },
  data() {
    return {
      loadingProgress: 0,
      loadedAnimation: false,
      hasFullscreenSupport: screenfull.isEnabled,
      isFullscreen: false,
      // animation
      prevTime: 0,
      appTimeSeconds: 0,
      blendTime: 2,
      totalBlendTime: 0,
    } as {
      loadingProgress: number;
      loadedAnimation: boolean;
      hasFullscreenSupport: boolean;
      isFullscreen: boolean;
      resizeObserver: ResizeObserver;
      scene: Scene;
      camera: PerspectiveCamera;
      renderer: WebGLRenderer;
      loader: GLTFLoader;
      orbitCtrl: OrbitControls;
      lightSet: AmbientLight;
      meshes: Mesh[];
      prevTime: number;
      appTimeSeconds: number;
      blendTime: number;
      totalBlendTime: number;
    };
  },
  created() {
    this.meshes = [] as Mesh[];
  },
  mounted() {
    this.resizeObserver = new ResizeObserver(this.onWindowResize);
    this.scene = new Scene();
    this.renderer = new WebGLRenderer({ alpha: true });
    this.loader = new GLTFLoader();
    this.init();
    this.loader.load(
      `/animations/${this.animation}`,
      (gltf) => {
        // Add animation to scene
        const transScene = this.transform(gltf.scene);
        transScene.scale.set(1.5, 1.5, 1.5);
        transScene.rotateY(180);
        this.scene.add(transScene);
        // Get all meshes
        const listObjs = {} as {
          [name: string]: Mesh<any, any>;
        };
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
          obj.material.opacity = 1;
          // obj.material.visible = false;
          obj.blendTime = counter * this.blendTime;
          this.meshes.push(obj);
          counter++;
        }
        // Store the overall blending time
        this.totalBlendTime = this.blendTime * this.meshes.length;
        this.$el.children[this.$el.children.length - 1].classList.add(
          'has-background-light',
          'br-2'
        );
        this.loadedAnimation = true;
        this.animate(0);
      },
      (xhr) => {
        this.loadingProgress = Math.round((xhr.loaded / xhr.total) * 100);
      },
      (err) => {
        console.log(err);
        return;
      }
    );
  },
  beforeUnmount() {
    this.resizeObserver.disconnect();
  },
  methods: {
    init(): void {
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
      this.lightSet = new AmbientLight(0xffffff, 1.5);
      this.scene.add(this.lightSet);
    },
    // Position the scene such that everything fits into the camera-view
    transform(scene: Group): Group {
      const boundingBox = new Box3().setFromObject(scene);
      const size = boundingBox.getSize(new Vector3()).length();
      const center = boundingBox.getCenter(new Vector3());
      scene.position.x += scene.position.x - center.x + 0.15;
      scene.position.y += scene.position.y - center.y - 0.15;
      scene.position.z += scene.position.z - center.z;
      this.orbitCtrl.maxDistance = size * 10;
      this.camera.near = size / 100;
      this.camera.far = size * 100;
      this.camera.position.copy(center);
      this.camera.position.x += size / 2;
      this.camera.position.y += size / 10;
      this.camera.position.z += size / 2;
      this.camera.lookAt(center);
      this.camera.updateMatrix();
      this.camera.updateProjectionMatrix();
      return scene;
    },
    animate(time: number): void {
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
    toggleFullscreen(): void {
      screenfull.toggle(this.$el);
    },
    onWindowResize(entries: ResizeObserverEntry[]): void {
      (
        this.$el as HTMLElement
      ).style.height = `${entries[0].contentRect.width}px`;
      this.isFullscreen = screenfull.isFullscreen;
      this.$nextTick(() => {
        this.camera.aspect = this.$el.clientWidth / this.$el.clientHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(this.$el.clientWidth, this.$el.clientHeight);
      });
    },
  },
});
</script>

<style>
.b-skeleton .b-skeleton-item {
  border-radius: 2rem;
}
</style>
