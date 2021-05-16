<template>
  <div class="camera-background relative z-10">
    <div class="camera w-full h-1/3">
      <video src="" autoplay class="feedm-auto h-full w-full"></video>
      <div class="flex flex-row justify-center">
        <div v-if="frontCamera == false">
          <span
            @click="setFrontCamera"
            class="material-icons material-icons-take-photo rounded-full bg-white dark:bg-gray-600  p-4 mt-12 mr-2"
          >
            cameraswitch
          </span>
        </div>
        <div v-if="frontCamera == true">
          <span
            @click="setRearCamera"
            class="material-icons material-icons-take-photo rounded-full bg-white dark:bg-gray-600   p-4 mt-12 mr-2"
          >
            cameraswitch
          </span>
        </div>
        <div>
          <span
            @click="takePicture"
            class="material-icons material-icons-take-photo rounded-full bg-white dark:bg-gray-600   p-4 mt-4"
          >
            photo_camera
          </span>
        </div>
        <div>
          <span
            @click="close"
            class="material-icons material-icons-take-photo rounded-full bg-white dark:bg-gray-600   p-4 mt-12 mr-2"
          >
            close
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script> 
export default {
  name: "Camera",
  data() {
    return {
      mode: { exact: "environment" },
      frontCamera: false,
    };
  },
  methods: {
    init() {
      if (
        "mediaDevices" in navigator &&
        "getUserMedia" in navigator.mediaDevices
      ) {
        let constrains = {
          audio: false,
          video: {
            facingMode: this.mode,

            width: {
              min: 320,
              ideal: 1280,
              max: 1920,
            },
            height: {
              min: 180,
              ideal: 720,
              max: 1080,
            },
          },
        };
        navigator.mediaDevices.getUserMedia(constrains).then((stream) => {
          const videoPlayer = document.querySelector("video");
          videoPlayer.srcObject = stream;
          videoPlayer.play();
        });
      } else {
        alert("Cannot get Media Device");
      }
    },
    videoOff(navigator) {
      navigator.getTracks().forEach(function (track) {
        if (track.readyState == "live" && track.kind === "video") {
          track.stop();
        }
      });
    },
    takePicture() {
      this.$emit("takePicture");
    },
    setFrontCamera() {
      if (
        "mediaDevices" in navigator &&
        "getUserMedia" in navigator.mediaDevices
      ) {
        let constrains = {
          audio: false,
          video: {
            facingMode: "front",

            width: {
              min: 320,
              ideal: 1280,
              max: 1920,
            },
            height: {
              min: 180,
              ideal: 720,
              max: 1080,
            },
          },
        };
        navigator.mediaDevices.getUserMedia(constrains).then((stream) => {
          const videoPlayer = document.querySelector("video");
          videoPlayer.srcObject = stream;
          videoPlayer.play();
        });
      } else {
        alert("Cannot get Media Device");
      }
      this.frontCamera = true;
    },
    setRearCamera() {
      if (
        "mediaDevices" in navigator &&
        "getUserMedia" in navigator.mediaDevices
      ) {
        let constrains = {
          audio: false,
          video: {
            facingMode: { exact: "environment" },

            width: {
              min: 320,
              ideal: 1280,
              max: 1920,
            },
            height: {
              min: 180,
              ideal: 720,
              max: 1080,
            },
          },
        };
        navigator.mediaDevices.getUserMedia(constrains).then((stream) => {
          const videoPlayer = document.querySelector("video");
          videoPlayer.srcObject = stream;
          videoPlayer.play();
        });
      } else {
        alert("Cannot get Media Device");
      }
      this.frontCamera = false;
    },
    close() {
      this.$emit("close");
    },
  },
  created() {
    // this.init();
    this.$root.$refs.launchCamera = this;
    this.$root.$refs.stopCamera = this;
  },
};
</script>


<style lang="less">
.camera-background {
  position: fixed;
  top: 0;
  bottom: 0px;
  left: 0;
  right: 0;
  background-color: #000000fa;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.btn-close {
  position: absolute;
  top: 35px;
  right: 0;
  border: none;
  font-size: 35px;
  padding: 15px;
  cursor: pointer;
  font-weight: bold;
  color: white;
  background: transparent;
}
</style>

