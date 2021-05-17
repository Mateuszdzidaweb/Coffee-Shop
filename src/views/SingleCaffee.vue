<template>
  <div class="pb-40">
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

      <img
        v-if="caffee !== null"
        class="absolute right-0 -bottom-10 w-auto h-auto bg-white rounded-full"
        :src="require('@/assets/images/' + caffee.image)"
        alt="Coffee Image"
      />
    </div>

    <div v-if="caffee !== null" class="w-full h-auto mt-20 px-8">
      <h1 v-if="caffee.caffeeName" class="text-2xl text-left font-bold">
        {{ caffee.caffeeName }}
      </h1>
      <p class="text-left text-xl py-2">
        {{ caffee.caffeeDescription }}
      </p>
      <div class="flex flex-col">
        <!-- Quantity btn -->
        <div class="flex flex-row justify-between">
          <div
            class="flex flex-row border h-10 w-24 rounded-lg border-gray-400 relative"
          >
            <button
              @click="subtractQuantity"
              class="font-semibold border-r border-gray-400 h-full w-20 flex rounded-l focus:outline-none cursor-pointer"
            >
              <span class="m-auto brown-color-text">-</span>
            </button>
            <input
              type="hidden"
              class="md:p-2 p-1 text-xs md:text-base border-gray-400 focus:outline-none text-center"
              readonly
              name="custom-input-number"
            />
            <div
              class="bg-white w-24 text-xs md:text-base flex items-center justify-center cursor-default"
            >
              <span class="brown-color-text text-xl">{{ quantity }}</span>
            </div>

            <button
              @click="addQuantity"
              class="font-semibold border-l border-gray-400 h-full w-20 flex rounded-r focus:outline-none cursor-pointer"
            >
              <span class="m-auto brown-color-text">+</span>
            </button>
            <div
              class="absolute flex flex-col p-2 w-32 md:w-full mt-6 md:mt-8 items-start justify-center"
            ></div>
          </div>
          <h1 class="text-2xl self-center">£{{ totalPriceToDecimal }}</h1>
        </div>

        <form>
          <label class="text-left text-xl text-gray-400 mt-5 h-full" for="size"
            >Size:</label
          >
          <select
            v-model="sizeSelected"
            class="border-b-2 h-10 text-xl dark:text-black"
            name="size"
            required
            id="size"
          >
            <option value="Short">Short</option>
            <option value="Tall">Tall</option>
            <option value="Grande">Grande</option>
            <option value="Venti">Venti</option>
          </select>
          <label class="text-left text-md mt-5" for="name">Name</label>
          <input
            v-model="customerName"
            class="h-10 text-xl border-b-2 pl-2 text-black"
            type="text"
            id="name"
            name="name"
            required
            placeholder="Name"
          />
          <p class="text-left text-red-500 ml-3">{{ nameErrorMsg }}</p>
          <label class="text-left text-md mt-5" for="name">Contact Phone</label>
          <input
            v-model="customerTelephone"
            class="h-10 text-xl border-b-2 pl-2 text-black"
            type="number"
            id="phone"
            name="phone"
            required
            placeholder="+44"
          />
          <p class="text-left text-red-500 ml-3">{{ telephoneErrorMsg }}</p>
          <input
            type="submit"
            value="Order"
            @click="addOrder"
            class="w-24 h-10 brown-color text-xl text-white font-bold rounded-full mt-5 m-auto"
          />
        </form>
      </div>
    </div>
  </div>
</template>


<script>
const axios = require("axios");
import Localbase from "localbase";
let db = new Localbase("db");
export default {
  props: ["id"],
  data() {
    return {
      caffee: null,
      quantity: 1,
      sizeSelected: "Short",
      customerName: "",
      customerTelephone: "",
      totalPrice: "",
      totalPriceToDecimal: "",
      nameErrorMsg: "",
      telephoneErrorMsg: "",
      order: [],
    };
  },
  components: {},
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
        this.totalPrice = this.caffee.price;
        this.totalPriceToDecimal = parseFloat(this.totalPrice).toFixed(2);
      })
      .then(() => {
        let caffee = this.caffee;
        localStorage.caffee = JSON.stringify(caffee);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  created() {
    if (localStorage.caffee) {
      this.caffee = JSON.parse(localStorage.caffee);
    } else {
      axios
        .get(
          "https://coffeeshopapp-ba533-default-rtdb.firebaseio.com/caffees/" +
            this.id +
            ".json"
        )
        .then((response) => {
          this.caffee = response.data;
          console.log(this.caffee);
          this.totalPrice = this.caffee.price;
          this.totalPriceToDecimal = parseFloat(this.totalPrice).toFixed(2);
        })
        .then(() => {
          let caffee = this.caffee;
          localStorage.caffee = JSON.stringify(caffee);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },
  methods: {
    addQuantity() {
      this.quantity++;
      this.totalPrice = this.caffee.price * this.quantity;
      this.totalPriceToDecimal = parseFloat(this.totalPrice).toFixed(2);
    },
    subtractQuantity() {
      if (this.quantity > 1) {
        this.quantity--;
        this.totalPrice = this.caffee.price * this.quantity;
        this.totalPriceToDecimal = parseFloat(this.totalPrice).toFixed(2);
      } else {
        this.quantity = 1;
        this.totalPrice = this.caffee.price * this.quantity;
        this.totalPriceToDecimal = parseFloat(this.totalPrice).toFixed(2);
      }
    },
    addOrder(event) {
      event.preventDefault();
      if (this.customerName === "") {
        this.nameErrorMsg = "Please Enter Your name";
      }
      if (this.customerTelephone === "") {
        this.telephoneErrorMsg = "Please enter your telephone number";
      } else {
        let newOrder = {
          id: Date.now(),
          caffeeName: this.caffee.caffeeName,
          caffeeImage: this.caffee.image,
          quantity: this.quantity,
          totalPrice: this.totalPriceToDecimal,
          customerName: this.customerName,
          sizeSelected: this.sizeSelected,
          customerTelephone: this.customerTelephone,
        };

        db.collection("orders").add(newOrder);
        alert("Order Placed");
      }
    },
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

form {
  display: contents;
}

input:focus {
  outline: none;
}

.brown-color-text {
  color: #a87049;
}
</style>


