<script setup lang="ts">
import { computed, watch } from 'vue'
import { useRoute } from 'vue-router'

import useFetchData from '@/components/composableFunctions/useFetchData'
import type { IProduct } from '@/types/IProduct'

const url = computed(() => {
  const id = useRoute().params?.id
  return `https://fakestoreapi.com/products/${id}`
})

const { data } = useFetchData<IProduct>({ url: url.value })

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
