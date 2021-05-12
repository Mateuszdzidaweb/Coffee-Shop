<template>
  <div id="app" class="">
      <app-header></app-header>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
       <router-link to="/about">About</router-link>
       <router-link to="/about">About</router-link>
    </div> -->

    <div>
    </div>
    <router-view/>
    <app-navbar ></app-navbar>
  </div>
</template>


<script>
import Header from "@/components/Header.vue";
import Navbar from "@/components/Navbar.vue";
export default {
    data(){
        return{
            
        }
    },
    components:{
        appHeader: Header,
        appNavbar: Navbar,
    }
}
</script>

<style lang="less">


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
 

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active > .material-icons{
      color: #42b983  !important;
    }
  }
}
</style>

<style src="./assets/tailwind.css"/>