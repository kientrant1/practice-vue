<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, onBeforeRouteUpdate } from 'vue-router'
import type { RouteLocationNormalized } from 'vue-router'

import useFetchData from '@/composableFunctions/useFetchData'
import type { IProduct } from '@/types/IProduct'
import Router from '@/router'

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
</script>

<template>
  <button @click="goBack">Home</button>
  <fieldset v-if="data" class="product-detail-container">
    <legend class="product-title">Data from fetching...</legend>
    <p class="product-title">{{ data.title }}</p>
    <p>{{ data.category }} - {{ data.description }}</p>
    <p><img class="product-image" :src="data.image" /></p>
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
</style>
