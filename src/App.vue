<script setup lang="ts">
import { computed, ref } from 'vue'
import { RouterView, RouterLink, useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'

import { routes } from '@/router'
import LoadingComponent from '@/components/LoadingComponent.vue'
import { useLoadingStore } from '@/store/loadingStore'
import { log } from '@/utils/log'

const myRoutes = routes.filter((item) => item.name)
const currentRouteName = computed(() => useRoute().name)

// const isLoading = ref<boolean>(false)
const loadingStore = useLoadingStore()

// Subscribing to the state
// Method 1. Through $subscribe
loadingStore.$subscribe((mutation, state) => {
  log('mutation ', mutation, 'state ', state)
  // isLoading.value = state.loadingState
})
// Method 2. Mapping to storeToRefs to keep reactive connectivity
const { loadingState } = storeToRefs(loadingStore)
</script>

<template>
  <div class="main-container">
    <LoadingComponent v-if="loadingState" is-loading-app />
    <h2 v-position-sticky:top="10" :style="{ background: '#fff' }">
      Practice Vue
    </h2>
    <ul class="menu">
      <li v-for="(route, index) in myRoutes" :key="index" class="menu-item">
        <RouterLink :to="route.path" active-class="active-route">{{
          route.name
        }}</RouterLink>
      </li>
    </ul>
    <GlobalHeader :header="currentRouteName" />
    <RouterView />
  </div>
</template>

<style>
.main-container {
  min-height: 110vh;
  width: 100vw;
}

.menu {
  display: flex;
  list-style: none;
  padding: 0;
}

.menu .menu-item {
  padding: 0 5px;
  border-right: 1px solid black;
}

.active-route {
  color: blue;
}

.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
