<template>
  <div class="mb-40">
    <div
      class="h-36 w-full brown-color border-left-radius relative flex flex-row items-end justify-around"
    >
      <div
        class="w-20 h-20 bg-white border-2 border-gray-200 absolute left-10 -bottom-8 rounded-full flex"
      >
        <span
          class="material-icons w-full h-full mt-7 self-center btn-heart-single-caffee"
        >
          favorite_border
        </span>
      </div>

      <img v-if="caffee !== null"
        class="absolute right-0 -bottom-10  w-auto h-auto bg-white rounded-full"
        :src="require('@/assets/images/' + caffee.image)"
        alt=""
      />
    </div>

    <div v-if="caffee !== null" class="w-full h-auto mt-20 px-8">
      <h1 v-if="caffee.caffeeName" class="text-2xl text-left font-bold">{{ caffee.caffeeName }}</h1>
      <p class="text-left text-xl py-2">
        {{ caffee.caffeeDescription }}
      </p>
      <div class="flex flex-col">
        <QuanityBtn></QuanityBtn>
        <label class="text-left text-xl text-gray-400 mt-5" for="size"
          >Size:</label
        >
        <select class="border-b-2 h-10 text-xl" name="size" id="size">
          <option value="Short">Short</option>
          <option value="Tall">Tall</option>
          <option value="Grande">Grande</option>
          <option value="Venti">Venti</option>
        </select>
        <label class="text-left text-md mt-5" for="name">Name</label>
        <input
          class="h-10 text-xl border-b-2"
          type="text"
          id="name"
          name="name"
          placeholder="Name"
        />
        <label class="text-left text-md mt-5" for="name">Contact Phone</label>
        <input
          class="h-10 text-xl border-b-2"
          type="text"
          id="phone"
          name="phone"
          placeholder="+44"
        />
      </div>
      <button
        class="w-24 h-10 brown-color text-xl text-white font-bold rounded-full mt-5"
      >
        Order
      </button>
    </div>
  </div>
</template>


<script>
import QuanityBtn from "@/components/QuantityBtn.vue";
const axios = require("axios");
export default {
  props: ["id"],
  data() {
    return {
      caffee: null,
    };
  },
  components: {
    QuanityBtn: QuanityBtn,
  },
  mounted() {
    axios
      .get(
        "https://coffeeshopapp-ba533-default-rtdb.firebaseio.com/caffees/" +
          this.id +
          ".json"
      )
      .then((response) => {
        this.caffee = response.data;
        console.log(this.caffee);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>


<style lang="less">
.brown-color {
  background-color: #a87049;
}

.border-left-radius {
  border-bottom-left-radius: 50px;
}

.box-shadow {
  box-shadow: 1px 2px 1px 2px rgb(211, 210, 210);
}

.btn-heart-single-caffee {
  font-size: 50px !important;
  color: #a87049;
}

input:focus {
  outline: none;
}
</style>


