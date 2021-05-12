<template>
  <div class="home">
    <h1 class="bg-red-200">Home</h1>

    <div class="flex flex-row justify-around my-5 text-black">
      <div>
        <router-link to="/goals" class="text-xl md:text-3xl">Hot Coffee</router-link>
      </div>
      <div>
        <router-link to="/goals-completed" class="text-xl md:text-3xl"
          >Cold Coffee</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
};
</script>
