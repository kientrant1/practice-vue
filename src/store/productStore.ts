import { reactive } from 'vue'
import { defineStore } from 'pinia'
import type { IProduct } from '@/types/IProduct'

interface IProductState {
  product: IProduct;
  products: IProduct[];
}

const initialState: IProduct = {
  id: 0,
  title: '',
  description: '',
  category: '',
  image: ''
} 

export const useProductStore = defineStore('productStore', () => {
  const productState = reactive<IProductState>({ product: initialState, products: [] })

  const updateProduct = (product: IProduct) => {
    productState.product = product
  }

  return {
    productState,
    updateProduct
  }
})