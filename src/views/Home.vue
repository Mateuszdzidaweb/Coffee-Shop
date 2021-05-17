<template>
  <div class="home pb-40">
    <div class="flex flex-row justify-around my-5 text-black">
      <div>
        <router-link to="/home" class="text-xl md:text-3xl link-active"
          >Hot Coffee</router-link
        >
      </div>
      <div>
        <router-link to="/home" class="text-xl md:text-3xl dark:text-white"
          >Cold Coffee</router-link
        >
      </div>
    </div>

    <div class="mt-10">
      <swiper class="swiper" :options="swiperOption">
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
                alt="coffeeImage"
              />
              <span
                class="material-icons md:text-5xl md:pl-4 mt-2 px-2 self-start btn-heart"
              >
                favorite_border
              </span>
              <h1
                class="text-black dark:text-white text-2xl font-bold mt-5 px-2 self-start"
              >
                £{{ caffee.price }}
              </h1>
              <h1
                class="text-black dark:text-white text-2xl font-bold mt-2 px-2 self-start"
              >
                {{ caffee.caffeeName }}
              </h1>
              <h1
                class="text-black dark:text-white text-xl mt-2 px-2 self-start text-left"
              >
                {{ caffee.caffeeDescription }}
              </h1>

              <span
                class="material-icons add-icon p-1 absolute rounded-xl -bottom-12 -right-5 btn-add-coffee"
              >
                add
              </span>
            </div>
          </router-link>
        </swiper-slide>
      </swiper>
    </div>
    <h1 class="text-left px-5 py-2 text-2xl">Popular</h1>
    <div
      v-for="popularCaffee in popularCaffees"
      :key="popularCaffee.id"
      class="px-5 mt-8"
    >
      <div
        class="w-full h-auto border-2 border-gold rounded-xl py-1 relative py-2"
      >
        <img
          class="popular-caffee-img absolute -left-12 -bottom-2 h-32"
          :src="require('@/assets/images/popularCaffee/' + popularCaffee.image)"
          alt="Popular Coffee Image"
        />
        <div class="flex flex-row justify-around py-2 px-4">
          <h1 class="text-xl">{{ popularCaffee.caffeeName }}</h1>
          <h1 class="text-xl">£{{ popularCaffee.price }}</h1>
        </div>
        <div>
          <p class="text-md text-left pl-12 pr-5">
            {{ popularCaffee.caffeeDescription }}
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
import json from "@/assets/popularCaffees.json";
const axios = require("axios");
let url =
  "https://coffeeshopapp-ba533-default-rtdb.firebaseio.com/caffees" + ".json";
export default {
  name: "Home",
  data() {
    return {
      caffees: [],
      popularCaffees: json.popularCaffees,
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
      .then(() => {
        let caffees = this.caffees;
        localStorage.caffees = JSON.stringify(caffees);
      })

      .catch((error) => {
        console.log(error);
      });
    console.log(this.popularCaffees);
  },
  created() {
    if (localStorage.caffees) {
      this.caffees = JSON.parse(localStorage.caffees);
    } else {
      axios
        .get(url)
        .then((response) => {
          this.caffees = response.data;
          console.log(response);
        })
        .then(() => {
          let caffees = this.caffees;
          localStorage.caffees = JSON.stringify(caffees);
        })

        .catch((error) => {
          console.log(error);
        });
      console.log(this.popularCaffees);
    }
  },
  methods: {},
};
</script>

<style lang="less">
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
  box-shadow: 1px 2px 1px 2px #daa520 !important;
}

.border-gold {
  border-color: #daa520;
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
