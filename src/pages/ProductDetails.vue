<template>
  <div class="product-container" v-for="product in chosenProductData">
    <h2>{{ product.title }}</h2>
    <img :src="product.image" alt="" />
    <div>{{ product.description }}</div>
  </div> 
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed, ref } from 'vue';
import { defineProps } from 'vue';
const props = defineProps(['productId'])
const router = useRoute()

const chosenProduct = ref([])

async function loadCurrentProduct(){
  const response = await fetch('https://fakestoreapi.com/products')
  const responseData = await response.json()
  const chosenProductData = responseData.find(pr => pr.id === +props.productId)
  chosenProduct.value.push(chosenProductData)
} 
loadCurrentProduct()

const chosenProductData = computed(function() {
  return chosenProduct.value
})

</script>

<style lang="scss" scoped>
.product-container {
  max-width: 100rem;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  gap: 3rem;

  img {
    max-width: 250px;
  }

  h2 {
    font-size: 2rem;
  }
  div {
    font-size: 1.4rem;
    line-height: 2;
  }
}

</style>
