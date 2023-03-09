<template>
  <span>
    <div class="spinner" v-if="store.isLoading">
      <base-spinner></base-spinner>
    </div>
    <div>
      <product-item
      v-for="product in storeItems"
      :key="product.id"
      :id="product.id"
      :image="product.image"
      :title="product.title"
      :price="product.price"
      ></product-item>
    </div>
  </span>
</template>

<script setup>
import { onMounted } from 'vue'

import ProductItem from '../components/ProductItem.vue'
import { useProductStore } from '../stores/product.js'
import BaseSpinner from '../ui/BaseSpinner.vue'

const store = useProductStore()

onMounted(() => {
  store.loadProduct()
})

const storeItems = store.products
</script>

<style lang="scss" scoped>
div {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-content: start;
  justify-items: center;
  max-width: 120rem;
  margin: 0 auto;
  padding: 1rem;
}

.spinner {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center; 
}


</style>
