<template>
  <div
    class="w-full h-14 flex items-center top-0 sticky top-bar bg-dark-blue px-3 md:h-20 header"
  >
    <!-- <GoBack></GoBack> -->
    <h1 class="text-3xl m-auto  text-white font-bold route-name-width ">
      {{ $route.name }}
    </h1>


  </div>
</template>



<style>
.header{
    z-index: 13 !important;
    background-color: #A87049;
}
.material-icons {
  font-size: 32px !important;
}

.route-name-width {
  /* width: calc(100% + -84px); */
}




</style>


<script>
// import GoBack from "@/components/GoBack.vue";

export default {
  data() {
    return {};
  },
  components: {
    // GoBack,
  },
};
</script>


<style lang="less">
    
</style>