<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, onBeforeRouteUpdate } from 'vue-router'
import type { RouteLocationNormalized } from 'vue-router'

import useFetchData from '@/components/composableFunctions/useFetchData'
import type { IProduct } from '@/types/IProduct'
import Router from '@/router'
import { useProductStore } from '@/store/productStore'

const { productState } = useProductStore()

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
  <div v-if="data" class="product-detail-container">
    <p class="product-title">{{ data.title }}</p>
    <p>{{ data.description }}</p>
    <p><img class="product-image" :src="data.image" /></p>
  </div>
</template>

<style scoped>
.product-detail-container {
  padding: 1rem;
}

.product-title {
  font-weight: bold;
}

.product-image {
  width: 200px;
  height: 200px;
}
</style>
