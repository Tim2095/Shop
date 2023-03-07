<template>
  <div>
    Cart
  </div>
</template>


<script setup>
import { useCartStore } from '../stores/cart'

const store = useCartStore()

const st = JSON.parse(localStorage.getItem('product'))


</script>

<style scoped>
div {
  height: 100vh;
  
}
</style>