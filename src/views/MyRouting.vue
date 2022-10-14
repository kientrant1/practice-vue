<script setup lang="ts">
import { ref } from 'vue'
import {
  RouterLink,
  onBeforeRouteUpdate,
  onBeforeRouteLeave,
} from 'vue-router'
import type { RouteLocationNormalized } from 'vue-router'

import useFetchData from '../components/composableFunctions/useFetchData'
import type { IProduct } from '../types/IProduct'
import { log } from '@/utils/log'

const url = ref('https://fakestoreapi.com/products')
const { loading, data, error } = useFetchData<IProduct[]>({ url })

onBeforeRouteUpdate((to: RouteLocationNormalized, from: RouteLocationNormalized ) => {
  log('Router:Component ------- 5. onBeforeRouteUpdate', to, from)
})
onBeforeRouteLeave((to: any, from: any) => {
  log('Router:Component ------- 6. onBeforeRouteLeave', to, from)
  if (!confirm("Are you sure want to leave page?")) {
    return false
  }
})
</script>

<template>
  <GlobalHeader header="Nested Routes" sub-level />
  <h4>Products</h4>
  <div v-if="loading">...loading</div>
  <div v-else>
    <div v-if="error"><span v-changeTextColor="'red'">{{ error }}</span></div>
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
