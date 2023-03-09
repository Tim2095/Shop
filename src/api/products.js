const API_URL = 'https://fakestoreapi.com'

/**
 * Get products array
 * @returns {Promise<Array>}
 */
export const getProductsList = async () => {
  const response = await fetch(`${API_URL}/products`)
  const data = await response.json()
  return { response, data }
}

/**
 * Get product by id
 * @param {Number} id
 * @returns {Promise<Array>}
 */
export const getProductById = async (id) => {
  const response = await fetch(`${API_URL}/products/${id}`)
  const data = await response.json()
  return { response, data }
}
