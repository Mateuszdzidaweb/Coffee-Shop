<template>
  <div id="app" :class="mode">
    <app-header
      @toogleDarkMode="toogleDarkMode"
      @toogleLightMode="toogleLightMode"
    ></app-header>

    <div></div>
    <router-view />
    <app-navbar></app-navbar>
  </div>
</template>


<script>
import Header from "@/components/Header.vue";
import Navbar from "@/components/Navbar.vue";
// import DarkModeBtn from "@/components/DarkModeBtn.vue";
export default {
  // props: ['mode'],
  data() {
    return {
      mode: "",
    };
  },
  components: {
    appHeader: Header,
    appNavbar: Navbar,
    // DarkModeBtn: DarkModeBtn,
  },
  mounted() {},
  methods: {
    toogleDarkMode() {
      this.mode = "light";
    },
    toogleLightMode() {
      this.mode = "dark";
    },
  },
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100% !important;
  background-color: white;
  transition: background-color 0.5s ease-in-out !important;
}

.dark {
    background-color: #192734  !important;
    color: white  !important;
  transition: background-color 0.5s ease-in-out !important;
}

#nav {
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active > .material-icons {
      color: #42b983 !important;
    }
  }
}
</style>

<style src="./assets/tailwind.css"/>