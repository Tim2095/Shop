import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getProductsList } from '../api/products.js'

export const useProductStore = defineStore('products', () => {
  const products = ref([])
  const chosenProducts = ref([])
  const cartCounter = ref(null)
  const isLoading = ref(false)

  async function loadProduct() {
    try {
      isLoading.value = true

      const { response, data } = await getProductsList()

      isLoading.value = false

      if (products.value.length === 0) {
        products.value.push(...data)
      }

      if (!response.ok) {
        const error = new Error(data.messagec || 'Failed to fetch the products requiest')
      }
    } catch (error) {
      console.error(error)
      // ... error
    }
  }

  const addProduct = function (productId) {
    const selected = products.value.find((pr) => pr.id === productId)
    const selectedProduct = {
      id: selected.id,
      name: selected.title,
      desc: selected.description,
      price: selected.price
    }
    const alreadySelected = chosenProducts.value.find((product) => product.id === selected.id)
    if (alreadySelected) {
      alert('Already added')
    } else {
      chosenProducts.value.push(selectedProduct)
      localStorage.setItem('product', JSON.stringify(chosenProducts.value))
    }
  }
  return { products, loadProduct, addProduct, cartCounter, isLoading }
})
