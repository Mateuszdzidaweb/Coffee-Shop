<template>
  <div
    class="w-full h-14 flex items-center top-0 sticky top-bar bg-dark-blue px-3 md:h-20 header"
  >
    <GoBack></GoBack>
    <h1 class="text-3xl m-auto text-white font-bold route-name-width">
      {{ $route.name }}
    </h1>
    <span
      v-show="DarkModeisOff"
      @click="DarkModeOff"
      class="go-back-icon material-icons absolute top-2 right-2"
    >
      light_mode
    </span>
    <span
      v-show="DarkModeisOn"
      @click="DarkModeOn"
      class="go-back-icon material-icons absolute top-2 right-2"
    >
      dark_mode
    </span>
  </div>
</template>


<script>
import GoBack from "@/components/GoBack.vue";

export default {
  data() {
    return {
      DarkModeisOff: true,
      DarkModeisOn: false,
      mode: "light",
    };
  },
  components: {
    GoBack,
  },
  methods: {
    DarkModeOff() {
      this.DarkModeisOff = false;
      this.DarkModeisOn = true;
      this.mode = "light";
      this.$emit("toogleLightMode");
    },
    DarkModeOn() {
      (this.DarkModeisOn = false), (this.DarkModeisOff = true);
      this.mode = "dark";
      this.$emit("toogleDarkMode");
    },
  },
};
</script>



<style lang="less">
.header {
  z-index: 13 !important;
  background-color: #a87049;
}
.material-icons {
  font-size: 32px !important;
}

.route-name-width {
  /* width: calc(100% + -84px); */
}
</style>


