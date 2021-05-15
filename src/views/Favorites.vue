<template>
  <div class="mb-40">
    <!-- <div
      v-for="caffee in caffees"
      :key="caffee.id"
      class="rounded-xl clip-path ml-2 mr-2 p-2 text-black flex flex-col box-shadow mt-10"
    >
      <div class="rounded-xl relative flex flex-col">
        <img
          class="absolute -right-0 -top-8 w-36 h-auto"
          :src="require('@/assets/images/' + caffee.image)"
          alt=""
        />

        <span
          class="material-icons md:text-5xl md:pl-4 mt-2 px-2 self-start btn-heart-active"
        >
          favorite
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

      </div>
    </div> -->
  </div>
</template>


<script>
import Localbase from "localbase";
let db = new Localbase("db");
const axios = require("axios");
let url =
  "https://coffeeshopapp-ba533-default-rtdb.firebaseio.com/caffees" + ".json";
export default {
  data() {
    return {
      caffees: [],
    };
  },

  created() {
    axios
      .get(url)
      .then((response) => {
        this.caffees = response.data;
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

    db.collection("orders")
      .get()
      .then((orders) => {
        console.log(orders);
      });
  },
};
</script>


<style lang="less">
.btn-heart-active {
  color: #ff5f58;
}
</style>