import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { IProduct } from '@/types/IProduct'

const initialState: IProduct = {
  id: 0,
  title: '',
  description: '',
  category: '',
  image: ''
} 

export const useProductStore = defineStore('productStore', () => {
  const product = ref<IProduct>(initialState)
  const products = ref<IProduct[]>([])

  const updateProduct = (newProduct: IProduct) => {
    product.value = newProduct;
  }

  const updateProducts = (newProducts: IProduct[]) => {
    products.value = newProducts;
  }

  return {
    product,
    products,
    updateProduct,
    updateProducts
  }
})