<script setup lang="ts">
import { computed, watch, ref } from 'vue'
import { useRoute } from 'vue-router'

import useFetchData from '@/components/composableFunctions/useFetchData'
import type { IProduct } from '@/types/IProduct'

const { params } = useRoute()
// const url = ref<string>('')

// watch(() => params.id, (id) => {
//   console.log(id)
//   url.value = `https://fakestoreapi.com/products/${id}`
// })

const url = computed(() => {
  console.log(params)
  const id = params?.id
  return `https://fakestoreapi.com/products/${id}`
})

const { data } = useFetchData<IProduct>({ url })


</script>

<template>
  <p class="product-title">{{ data?.title }}</p>
  <p>{{ data?.description }}</p>
  <p><img class="product-image" :src="data?.image" /></p>
</template>

<style scoped>
.product-title {
  font-weight: bold;
}

.product-image {
  width: 200px;
  height: 200px;
}
</style>
