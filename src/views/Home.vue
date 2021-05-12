<template>
  <div class="home mb-20">
    <h1 class="bg-red-200">Home</h1>

    <div class="flex flex-row justify-around my-5 text-black">
      <div>
        <router-link to="/goals" class="text-xl md:text-3xl"
          >Hot Coffee</router-link
        >
      </div>
      <div>
        <router-link to="/goals-completed" class="text-xl md:text-3xl"
          >Cold Coffee</router-link
        >
      </div>
    </div>

    <div class="mt-10">
      <swiper class="swiper pb-20" :options="swiperOption">
        <swiper-slide
          class="rounded-xl clip-path ml-2 p-2 text-black flex flex-col box-shadow"
        >
          <div class=" rounded-xl relative flex flex-col">
            <img
              class="absolute -right-9 -top-9"
              src="@/assets/images/caffee-americano.png"
              alt=""
            />
            <span
              class="material-icons md:text-5xl md:pl-4 mt-2 px-2 self-start"
            >
              favorite_border
            </span>
            <h1 class="text-black text-2xl font-bold mt-5 px-2 self-start">
              £4.00
            </h1>
            <h1 class="text-black text-2xl font-bold mt-2 px-2 self-start">
              Cafe Americano
            </h1>
            <h1 class="text-black text-xl mt-2 px-2 self-start text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              recusandae quod placeat nulla et cumque quidem
            </h1>
            <!-- <div
              class="w-10 h-10 bg-black absolute rounded-xl -bottom-2 -right-2"
            ></div> -->
            <span
              class="material-icons w-10 h-10 bg-black absolute rounded-xl -bottom-5 -right-5 btn-add-coffee"
            >
              add
            </span>
          </div>
        </swiper-slide>

        <swiper-slide
          class="bg-red-500 rounded-xl clip-path ml-5 p-2 text-black flex flex-col"
        >
          <div class="relative flex flex-col">
            <img
              class="absolute -right-8 -top-8"
              src="@/assets/images/caffee-americano.png"
              alt=""
            />
            <span
              class="material-icons md:text-5xl md:pl-4 mt-2 px-2 self-start"
            >
              favorite_border
            </span>
            <h1 class="text-black text-2xl font-bold mt-5 px-2 self-start">
              £4.00
            </h1>
            <h1 class="text-black text-2xl font-bold mt-2 px-2 self-start">
              Cafe Americano
            </h1>
            <h1 class="text-black text-xl mt-2 px-2 self-start text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              recusandae quod placeat nulla et cumque quidem
            </h1>
            <!-- <div
              class="w-10 h-10 bg-black absolute rounded-xl -bottom-2 -right-2"
            ></div> -->
            <span
              class="material-icons w-10 h-10 bg-black absolute rounded-xl -bottom-5 -right-5"
            >
              add
            </span>
          </div>
        </swiper-slide>
        <swiper-slide class="bg-blue-300 rounded-xl clip-path ml-5"
          >Slide 2</swiper-slide
        >
        <swiper-slide class="bg-red-500 rounded-xl clip-path clip-path ml-5"
          >Slide 3</swiper-slide
        >
        <swiper-slide>Slide 4</swiper-slide>
        <swiper-slide>Slide 5</swiper-slide>
        <swiper-slide>Slide 6</swiper-slide>
        <swiper-slide>Slide 7</swiper-slide>
        <swiper-slide>Slide 8</swiper-slide>
        <swiper-slide>Slide 9</swiper-slide>
        <swiper-slide>Slide 10</swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      swiperOption: {
        slidesPerView: "auto",
        spaceBetween: 20,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      },
    };
  },
  components: {},

  mounted() {},
};
</script>

<style lang="less">
// @import "./base.scss";

.swiper-wrapper {
  padding-bottom: 20px;
  padding-top: 20px;
}

.swiper-slide {
  width: 80% !important;
  height: auto;
}
.swiper-slide:nth-child(2n) {
  width: 60%;
}
.swiper-slide:nth-child(3n) {
  width: 40%;
}

.box-shadow{
        box-shadow: 1px 2px 1px 2px rgb(211, 210, 210);
}

.clip-path {
  //   clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 30%, 20% 0);
}

.btn-add-coffee{
    background-color: #A87049;
}
</style>
