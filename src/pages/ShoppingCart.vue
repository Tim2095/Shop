<template>
  <div v-for="pr in st">

    <div>{{ pr.name }}</div>
    <div>{{ pr.price }}</div>

  </div>
</template>


<script setup>
import { useCartStore } from '../stores/cart'

const store = useCartStore()

const st = JSON.parse(localStorage.getItem('product'))


</script>
