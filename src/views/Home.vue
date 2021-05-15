<template>
  <div class="home mb-40">
    <div class="flex flex-row justify-around my-5 text-black">
      <div>
        <router-link to="/home" class="text-xl md:text-3xl link-active"
          >Hot Coffee</router-link
        >
      </div>
      <div>
        <router-link to="/home" class="text-xl md:text-3xl"
          >Cold Coffee</router-link
        >
      </div>
    </div>

    <div class="mt-10 dark:bg-gray-800">
      <swiper class="swiper pb-20" :options="swiperOption">
        <swiper-slide
          v-for="caffee in caffees"
          :key="caffee.id"
          class="rounded-xl clip-path ml-2 mr-2 p-2 text-black flex flex-col box-shadow"
        >
          <router-link :to="{ name: 'Caffee', params: { id: caffee.id } }">
            <div class="rounded-xl relative flex flex-col">
              <img
                class="absolute -right-8 -top-8 w-36 h-auto"
                :src="require('@/assets/images/' + caffee.image)"
                alt=""
              />
              <!-- <div
              class="absolute -right-9 -top-9 w-40 h-40 rounded-full bg-cover"
              :style="{
                background:
                  'linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)), url(' +
                  require('@/assets/images/' +
                     caffee.image) +
                  ') center no-repeat',
              }"
            ></div> -->
              <span
                class="material-icons md:text-5xl md:pl-4 mt-2 px-2 self-start btn-heart"
              >
                favorite_border
              </span>
              <h1 class="text-black text-2xl font-bold mt-5 px-2 self-start">
                £{{ caffee.price }}
              </h1>
              <h1 class="text-black text-2xl font-bold mt-2 px-2 self-start">
                {{ caffee.caffeeName }}
              </h1>
              <h1 class="text-black text-xl mt-2 px-2 self-start text-left">
                {{ caffee.caffeeDescription }}
              </h1>
              <!-- <div
              class="w-10 h-10 bg-black absolute rounded-xl -bottom-2 -right-2"
            ></div> -->
              <span
                class="material-icons add-icon p-1 absolute rounded-xl -bottom-12 -right-5 btn-add-coffee"
              >
                add
              </span>
            </div>
          </router-link>
        </swiper-slide>

        <!-- <div class="swiper-pagination w-40 h-10 bg-red-400" slot="pagination"></div> -->
      </swiper>
    </div>

    <div class="flex flex-row px-5 mt-3">
      <h1 class="text-2xl font-bold text-black">Popular</h1>
    </div>

    <div class="px-5 mt-8">
      <div class="w-full h-auto border-2 rounded-xl py-1 relative">
        <img
          class="absolute -left-12 -bottom-2 h-32"
          src="@/assets/images/popularCaffee/Ice-caffee-late.png"
          alt=""
        />
        <div class="flex flex-row justify-around py-2 px-4">
          <h1 class="text-xl">Ice Caffee Late</h1>
          <h1 class="text-xl">£4.99</h1>
        </div>
        <div>
          <p class="text-md text-left pl-12 pr-5">
            Rich expresso combined with milk and served over ice.
          </p>
        </div>
        <span
          class="material-icons add-icon p-1 absolute rounded-xl bottom-0 -right-5 btn-add-coffee"
        >
          add
        </span>
      </div>
    </div>

    <div class="px-5 mt-8">
      <div class="w-full h-auto border-2 rounded-xl py-1 relative">
        <img
          class="absolute -left-12 -bottom-2 h-32"
          src="@/assets/images/popularCaffee/Ice-caffee-late.png"
          alt=""
        />
        <div class="flex flex-row justify-around py-2 px-4">
          <h1 class="text-xl">Ice Caffee Late</h1>
          <h1 class="text-xl">£4.99</h1>
        </div>
        <div>
          <p class="text-md text-left pl-12 pr-5">
            Rich expresso combined with milk and served over ice.
          </p>
        </div>
        <span
          class="material-icons add-icon p-1 absolute rounded-xl bottom-0 -right-5 btn-add-coffee"
        >
          add
        </span>
      </div>
    </div>

    <div class="px-5 mt-8">
      <div class="w-full h-auto border-2 rounded-xl py-1 relative">
        <img
          class="absolute -left-12 -bottom-2 h-32"
          src="@/assets/images/popularCaffee/Ice-caffee-late.png"
          alt=""
        />
        <div class="flex flex-row justify-around py-2 px-4">
          <h1 class="text-xl">Ice Caffee Late</h1>
          <h1 class="text-xl">£4.99</h1>
        </div>
        <div>
          <p class="text-md text-left pl-12 pr-5">
            Rich expresso combined with milk and served over ice.
          </p>
        </div>
        <span
          class="material-icons add-icon p-1 absolute rounded-xl bottom-0 -right-5 btn-add-coffee"
        >
          add
        </span>
      </div>
    </div>
  </div>
</template>

<script>

const axios = require("axios");
let url =
  "https://coffeeshopapp-ba533-default-rtdb.firebaseio.com/caffees" + ".json";
export default {
  name: "Home",
  data() {
    return {
      caffees: [],
      swiperOption: {
        slidesPerView: "auto",
        spaceBetween: 10,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      },
    };
  },
  components: {},

  mounted() {
    axios
      .get(url)
      .then((response) => {
        this.caffees = response.data;
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {},
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
  height: 300px !important;
}
.swiper-slide:nth-child(2n) {
  width: 80%;
  margin-left: 1.5em !important;
  .btn-add-coffee {
  }
}
.swiper-slide:nth-child(3n) {
  width: 80%;
  margin-left: 1.5em !important;
}
.swiper-slide:nth-child(4n) {
  width: 80%;
  margin-left: 1.5em !important;
}

.box-shadow {
  box-shadow: 1px 2px 1px 2px rgb(211, 210, 210);
}

.clip-path {
  //   clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 30%, 20% 0);
}

.btn-add-coffee {
  background-color: #a87049;
}

.bg-cover {
  background-size: cover;
}

.btn-heart {
  color: #a87049 !important;
}

.link-active {
  color: #a87049;
  border-bottom: 1px solid #a87049;
}

.add-icon {
  color: white;
}
</style>
