<script setup lang="ts">
import CounterComponentWithPinia from '@/components/sfcs/CounterComponentWithPinia.vue'
import { useProductStore } from '@/store/productStore'
import { useCounterStore } from '@/store/counterStore'

const { product, updateProduct } = useProductStore()
const { counter, counterRef } = useCounterStore()

const updateProductInfo = (event: Event, key: string) => {
  const target = event.target as HTMLInputElement

  updateProduct({
    ...product,
    [key]: target.value,
  })
}
</script>

<template>
  <GlobalHeader header="Counter" />
  <CounterComponentWithPinia />

  <GlobalHeader header="Product Info" />
  <!-- Global State -->
  <div class="product-detail-container">
    <input
      :value="product.title"
      type="text"
      @input="updateProductInfo($event, 'title')"
    />
    <textarea
      :value="product.description"
      class="area-description"
      @input="updateProductInfo($event, 'description')"
    />
    <p><img class="product-image" :src="product.image" /></p>
  </div>
</template>

<style scoped>
.product-detail-container {
  width: 100%;
  margin: 0;
  margin-top: 15px;
  padding: 10px;
}

.area-description {
  display: block;
  margin-top: 15px;
  width: 500px;
  height: 300px;
}

.product-image {
  width: 200px;
  height: 200px;
}
</style>
