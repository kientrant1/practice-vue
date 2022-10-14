<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, onBeforeRouteUpdate } from 'vue-router'
import type { RouteLocationNormalized } from 'vue-router'

import useFetchData from '@/components/composableFunctions/useFetchData'
import type { IProduct } from '@/types/IProduct'
import Router from '@/router'
import { useProductStore } from '@/store/productStore'

const { productState, updateProduct } = useProductStore()
const { product } = productState

const route = useRoute()
// const id = ref<string>()

const url = computed(() => {
  const productId = route?.params?.id
  // const productId = id.value
  return `https://fakestoreapi.com/products/${productId}`
})

const { data } = useFetchData<IProduct>({ url })

onBeforeRouteUpdate(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (to: RouteLocationNormalized) => {
    // won't API when first landing. Due to only trigger when params change
    // id.value = to.params.id as string
  }
)

const goBack = () => {
  Router.push({ name: 'Data Bindings' })
}

const updateProductInfo = () => {
  // updateProduct(null)
}
</script>

<template>
  <button @click="goBack">Home</button>
  <fieldset v-if="data" class="product-detail-container">
    <legend class="product-title">Data from fetching...</legend>
    <p class="product-title">{{ data.title }}</p>
    <p>{{ data.category }} - {{ data.description }}</p>
    <p><img class="product-image" :src="data.image" /></p>
  </fieldset>
  <fieldset v-if="product" class="product-detail-container">
    <legend class="product-title">Data from Pinia (update to State directly)</legend>
    <input v-model="product.title" type="text" />
    <textarea :value="product.description" class="area-description" />
    <p><img class="product-image" :src="product.image" /></p>
  </fieldset>
</template>

<style scoped>
.product-detail-container {
  width: 100%;
  margin: 0;
  margin-top: 15px;
  padding: 10px;
  border: 1px solid green;
}

.product-title {
  font-weight: bold;
}

.product-image {
  width: 200px;
  height: 200px;
}

.area-description {
  display: block;
  margin-top: 15px;
  width: 500px;
  height: 300px;
}
</style>
