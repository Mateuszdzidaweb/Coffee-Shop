<template>
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
</template>


<script>
export default {
  data() {
    return {
      DarkModeisOff: true,
      DarkModeisOn: false,
      mode: "",
    };
  },
  components: {},
  methods: {
    DarkModeOff() {
      this.DarkModeisOff = false;
      this.DarkModeisOn = true;
      this.mode = "";
    },
    DarkModeOn() {
      (this.DarkModeisOn = false), (this.DarkModeisOff = true);
      this.mode = "dark";
      this.$emit("toogleMode");
    },
  },
};
</script>