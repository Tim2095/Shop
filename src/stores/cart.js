import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cartCounter', () => {
  const cartCount = ref(0)

  return { cartCount }
})
