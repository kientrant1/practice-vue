<script setup lang="ts">
import { computed } from 'vue'
import { RouterView, RouterLink, useRoute } from 'vue-router'
import { routes } from './router'

const myRoutes = routes.filter((item) => item.name)
const currentRouteName = computed(() => useRoute().name)
</script>

<template>
  <div class="main-container">
    <h2 v-position-sticky:top="10" :style="{ background: '#fff' }">
      Practice Vue
    </h2>
    <ul>
      <li v-for="(route, index) in myRoutes" :key="index">
        <RouterLink :to="route.path">{{ route.name }}</RouterLink>
      </li>
    </ul>
    <GlobalHeader :header="currentRouteName" />
    <RouterView />
  </div>
</template>

<style>
.main-container {
  min-height: 110vh;
}
</style>
