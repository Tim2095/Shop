<template>
  <div>
    <div class="spinner" v-if="isLoading">
      <base-spinner></base-spinner>
    </div>
    <div class="product-container">
      <h2>{{ product.title }}</h2>

      <img :src="product.image" alt="" />
      <p>{{ product.price }} $</p>
      <div>{{ product.description }}</div>
      <button @click="store.addProduct(product.id)">Add to cart</button>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, onBeforeMount } from 'vue'
import { useProductStore } from '../stores/product'
import { getProductById } from '../api/products'
import BaseSpinner from '../ui/BaseSpinner.vue'

const props = defineProps(['productId'])
const store = useProductStore()
const isLoading = ref(false)

const product = ref(null)

onBeforeMount(async () => {
  isLoading.value = true
  try {
    const { data } = await getProductById(props.productId)
    product.value = data
  } catch (error) {
    console.error(error)
  }
  isLoading.value = false
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
