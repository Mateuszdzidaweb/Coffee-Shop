<template>
  <div class=" h-full pb-28">
    <div v-if="myOrders == null || myOrders == ''" class="text-2xl m-auto py-5">
      Currently You don't have any orders
    </div>
    <div
      v-for="myOrder in myOrders"
      :key="myOrder.id"
      class="rounded-xl clip-path ml-2 mr-2 p-2 text-black flex flex-col box-shadow mt-10"
    >
      <div class="rounded-xl relative flex flex-col">
        <img
          class="absolute -right-0 -top-8 w-36 h-auto"
          :src="require('@/assets/images/' + myOrder.caffeeImage)"
          alt="Coffee Image"
        />

        <span
          class="material-icons md:text-5xl md:pl-4 mt-2 px-2 self-start btn-heart-active"
        >
          favorite
        </span>
        <h1
          class="text-black dark:text-white text-2xl font-bold mt-2 px-2 self-start"
        >
          {{ myOrder.caffeeName }}
        </h1>
        <h1
          class="text-black dark:text-white text-xl font-bold mt-5 px-2 self-start"
        >
          Size: {{ myOrder.sizeSelected }}
        </h1>
        <div class="flex flex-row">
          <h1
            class="text-black dark:text-white text-xl font-bold mt-5 px-2 self-start"
          >
            Quantity: {{ myOrder.quantity }}
          </h1>
          <h1 class="text-black dark:text-white text-xl font-bold mt-5 px-2">
            £{{ myOrder.totalPrice }}
          </h1>
        </div>
        <hr class="mt-2" />
        <h1
          class="text-black dark:text-white text-xl mt-2 px-2 self-start text-left"
        >
          Name: {{ myOrder.customerName }}
        </h1>
        <h1
          class="text-black dark:text-white text-xl mt-2 px-2 self-start text-left"
        >
          Tele: {{ myOrder.customerTelephone }}
        </h1>
      </div>
    </div>
  </div>
</template>


<script>
import Localbase from "localbase";
let db = new Localbase("db");
export default {
  data() {
    return {
      caffees: [],
      myOrders: [],
    };
  },

  created() {
    db.collection("orders")
      .get()
      .then((orders) => {
        this.myOrders = orders;
        console.log(this.myOrders);
      });
  },
};
</script>


<style lang="less">
.btn-heart-active {
  color: #ff5f58;
}

.height-full {
  height: 100vh;
}
</style>