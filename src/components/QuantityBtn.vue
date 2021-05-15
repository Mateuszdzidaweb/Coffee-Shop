<template>
    <div
    class="flex flex-row border h-10 w-24 rounded-lg border-gray-400 relative"
  >
    <button @click="subtractQuantity"
      class="font-semibold border-r  border-gray-400 h-full w-20 flex rounded-l focus:outline-none cursor-pointer"
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

    <button @click="addQuantity"
      class="font-semibold border-l  border-gray-400 h-full w-20 flex rounded-r focus:outline-none cursor-pointer"
    >
      <span class="m-auto brown-color-text">+</span>
    </button>
    <div
      class="absolute flex flex-col p-2 w-32 md:w-full mt-6 md:mt-8 mt-10 flex items-start justify-center"
    >
    </div>
  </div>
</template>


<script>
export default {
    data(){
        return{
            quantity: 1,
        }
    },
    methods:{
        addQuantity(){
            this.quantity ++ ;
        },
        subtractQuantity(){
            if(this.quantity  > 1 ){
                this.quantity --
            }else{
                this.quantity = 1;
            }
        }
    }
}
</script>

<style lang="less">

.brown-color-text{
    color: #a87049;
}
    
</style>