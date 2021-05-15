<template>
  <div class="mt-2">
    <span
      @click="goBack"
      class="go-back-icon material-icons absolute top-2 md:text-5xl md:pl-4"
    >
      arrow_back_ios
    </span>
  </div>
</template>


<script>
export default {
  methods: {
    goBack() {
      return this.$router.go(-1);
    },
  },
};
</script>

<style lang="less">

.go-back-icon {
  font-size: 32px !important;
  color: white;
}
</style>