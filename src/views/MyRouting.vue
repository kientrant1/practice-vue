<script setup lang="ts">
import { RouterLink } from 'vue-router'
import LoadingComponent from '../components/sfcs/LoadingComponent.vue'
import useFetchData from '../components/composableFunctions/useFetchData'
import type { IProduct } from '../types/IProduct'

const url = 'https://fakestoreapi.com/products'
const { loading, data, error } = useFetchData<IProduct[]>({ url })
</script>

<template>
  <GlobalHeader header="Nested Routes" sub-level />
  <h4>Products</h4>
  <LoadingComponent v-if="loading" />
  <div v-else>
    <div v-if="error" v-change-text-color="'red'">{{ error }}</div>
    <ul v-else>
      <li v-for="item in data" :key="item.id">
        <RouterLink :to="{ name: 'product', params: { id: item.id } }">{{
          item.title
        }}</RouterLink>
      </li>
    </ul>
  </div>
  <RouterView />
</template>
