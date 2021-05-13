<template>
  <div>
    <div class="p-3 mt-5 md:w-3/4 m-auto">
      <h1 class="text-3xl">Settings</h1>
      <h2 class="text-lg p-2 text-left">
        Adjust the below options to customise your experience
      </h2>
      <hr class="mt-2 hr-line-border" />
    </div>

    <div class="w-full h-20 border-2 border-gray-400 flex flex-col justify-center">
      <div class="flex flex-row justify-around items-center">
        <div
          class="w-20 h-auto bg-black rounded-full flex flex-col justify-center"
        >
          <span class="material-icons"> dark_mode </span>
        </div>
        <h1 class="text-2xl">Dark Mode</h1>
        <div>
          <!-- off -->
          <span
            v-show="DarkModeisOff"
            @click="DarkModeOff"
            class="border rounded-full border-grey flex items-center cursor-pointer w-14 justify-start"
          >
            <span
              class="rounded-full border w-8 h-6 border-grey shadow-inner bg-white shadow"
            >
            </span>
          </span>
          <!-- On -->
          <span
            v-show="DarkModeisOn"
            @click="DarkModeOn"
            class="border rounded-full border-grey flex items-center cursor-pointer w-14 bg-green-400 justify-end"
          >
            <span
              class="rounded-full border w-8 h-6 border-grey shadow-inner bg-white shadow"
            >
            </span>
          </span>
        </div>
      </div>
    </div>
    <h1 class="text-center text-3xl mt-5 ">Device Battery</h1>
  </div>
</template>

<script>
export default {
  data() {
      return{
          DarkModeisOff: true,
          DarkModeisOn: false
      }
  },
  components: {
  },
  methods:{
      DarkModeOff(){
          this.DarkModeisOff = false
          this.DarkModeisOn = true
      },
      DarkModeOn(){
          this.DarkModeisOn = false,
           this.DarkModeisOff = true
      }
  }
};
</script>


<style lang="less">
</style>