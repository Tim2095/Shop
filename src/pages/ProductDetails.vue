<template>
  <div>
    <!-- <div class="spinner" v-if="isLoading">
      <base-spinner></base-spinner>
    </div> -->
    
    <div class="product-container" v-for="product in productDetails" :key="product.id">
      <h1>{{ product }}</h1>
      <h2>{{ product.title }}</h2>

      <img :src="product.image" alt="" />
      <p>{{ product.price }} $</p>
      <div>{{ product.description }}</div>
      <button @click="store.addProduct(product.id)">Add to cart</button>
    </div>
  </div>
</template>

<script setup>
import BaseSpinner from '../ui/BaseSpinner.vue'
import { useProductStore } from '../stores/product'
import { computed, ref } from 'vue'
// import { defineProps } from 'vue'

const props = defineProps(['productId'])
const store = useProductStore()

const productDetails = computed(function () {
  console.log(store.products)
  return store.products.find((product) => product.id === +props.productId)
})

// const store = useProductStore()
// const isLoading = ref(false)
// const props = defineProps(['productId'])
// const chosenProduct = ref([])
// async function loadCurrentProduct() {
//   try {
//     isLoading.value = true
//     const response = await fetch('https://fakestoreapi.com/products')
//     const responseData = await response.json()
//     isLoading.value = false
//     const chosenProductData = responseData.find((pr) => pr.id === +props.productId)
//     chosenProduct.value.push(chosenProductData)
//   } catch (err) {
//     err = 'Failed to find product'
//     alert(err)
//   }
// }
// loadCurrentProduct()

const chosenProductData = computed(function () {
  return chosenProduct.value
})
</script>

<style lang="scss" scoped>
// .v-enter-from {
//   transform: translateY(100px);
// }

// .v-enter-active {
//   transition: all 0.9s ease-in;
// }

// .v-enter-to {
//   transform: translateY(0);
// }

// .v-enter-from {
//   opacity: 0;
//   transform: translateY(300px);
// }

// .v-enter-active {
//   transition: all 0.9s ease-out;
// }


.product-container {
  max-width: 100rem;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  gap: 3rem;

  p {
    font-size: 2rem;
  }

  img {
    max-width: 250px;
    max-height: 250px;
  }

  h2 {
    font-size: 2rem;
  }
  div {
    font-size: 1.4rem;
    line-height: 2;
  }

  button {
    padding: 1rem 2rem;
    cursor: pointer;
    margin-bottom: 1rem;
  }
}

img {
  max-width: 250px;
  max-height: 250px;
}

.spinner {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
