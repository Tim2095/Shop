import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useProductStore = defineStore('products', () => {
  const products = ref([])
  const chosenProducts = ref([])
  const cartCounter = ref(null)
  async function loadProduct() {
    const response = await fetch('https://fakestoreapi.com/products')
    const responseData = await response.json()
    products.value.push(...responseData)

    if (!response.ok) {
      const error = new Error(responseData.messagec || 'Failed to fetch the products requiest')
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
  return { products, loadProduct, addProduct, cartCounter }
})
