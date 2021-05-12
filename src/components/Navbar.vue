<template>
  <div
    id="nav"
    class="w-full h-20 flex items-center justify-around bottom-nav dark-blue-bg bottom-0 fixed py-1 md:h-32 z-10 pt-2 z-99 navbar"
  >
    <router-link class="w-14 h-auto px-3 md:w-20 flex flex-col" to="/home">
      <span
        class="material-icons md:text-5xl md:pl-4 self-center"
      >
        home
      </span>
      <h1
        class="text-white text-center activePage flex justify-around text-xl md:text-3xl"
      >
        Home
      </h1>
    </router-link>
    <router-link class="w-14 h-auto px-3 md:w-20 flex flex-col" to="/stores">
      <span
        class="material-icons md:text-5xl md:pl-4 self-center"
      >
        store
      </span>
      <h1
        class="text-white text-center activePage flex justify-around text-xl md:text-3xl"
      >
        Stores
      </h1>
    </router-link>
    <router-link class="w-14 h-auto px-3 md:w-20 flex flex-col" to="/favorites">
      <span
        class="material-icons md:text-5xl md:pl-4 self-center"
      >
        favorite_border
      </span>
      <h1
        class="text-white text-center activePage flex justify-around text-xl md:text-3xl"
      >
        Favorites
      </h1>
    </router-link>
    <router-link class="w-14 h-auto px-3 md:w-20 flex flex-col" to="/settings">
      <span
        class="material-icons md:text-5xl md:pl-4 self-center"
      >
        settings
      </span>
      <h1
        class="text-white text-center activePage flex justify-around text-xl md:text-3xl"
      >
        Settings
      </h1>
    </router-link>
  </div>
</template>


<script>
export default {
  data() {
    return {};
  },
};
</script>


<style lang="less">
.navbar {
  background-color: #a87049;
}

.material-icons{
    color: white;
    font-size: 42px  !important;
}
</style>