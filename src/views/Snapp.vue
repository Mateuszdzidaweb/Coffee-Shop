<template>
  <div class="relative h-screen">
    <camera
      v-show="cameraVisible"
      @takePicture="takePicture"
      @close="closeCamera"
    ></camera>

    <Picture> </Picture>

    <!-- <button
      @click="openCamera"
      class="w-auto h-auto bg-blue-600 mt-10 mb-5 rounded-full py-2 px-4 text-xl font-bold"
    >
      Take a snap
    </button> -->

          <div class="flex flex-row justify-center w-full fixed bottom-24">
        <div>
          <span
           @click="saveImg"
            class="material-icons material-icons-take-photo rounded-full bg-gray-300  p-4 mt-12 mr-2"
          >
            save
          </span>
        </div>
        <div>
          <span
           @click="openCamera"
            class="material-icons material-icons-take-photo rounded-full bg-gray-300 p-4 mt-4"
          >
            launch
          </span>
        </div>
        <div>
          <span
            @click="clearCanvas"
            class="material-icons material-icons-take-photo rounded-full bg-gray-300 p-4 mt-12 mr-2"
          >
            delete
          </span>
        </div>
      </div>

  </div>
</template>

<script>
import Camera from "@/components/Camera.vue";
import Picture from "@/components/Picture.vue";
export default {
  data() {
    return {
      cameraVisible: false,
    };
  },
  components: {
    Camera: Camera,
    Picture: Picture,
  },
  methods: {
    takePicture() {
      console.log("take Picture");
      let ratio = window.innerHeight < window.innerHeight ? 1 / 1 : 1 / 1;
      const picture = document.querySelector("canvas");
      picture.width = window.innerWidth < 1280 ? window.innerWidth : 1280;
      picture.height = window.innerWidth / ratio;
      const ctx = picture.getContext("2d");
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
      ctx.drawImage(
        document.querySelector("video"),
        0,
        0,
        picture.width,
        picture.height
      );
      this.cameraVisible = false;
       this.$root.$refs.stopCamera;
    },
    openCamera() {
      this.cameraVisible = true;
       this.$root.$refs.launchCamera;
    },
    closeCamera() {
      this.cameraVisible = false;
    },
    saveImg() {
      let canvas = document.querySelector("canvas");
      var image = canvas
        .toDataURL("image/png")
        .replace("image/png", "image/octet-stream"); 
      window.location.href = image; 
    },
    clearCanvas(){
        const picture = document.querySelector("canvas");
        const ctx = picture.getContext("2d");
        ctx.clearRect(0, 0, picture.width, picture.height);

    }
  },
  mounted() {},
};
</script>


<style lang="less">
</style>