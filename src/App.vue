<script setup lang="ts">
import { computed } from 'vue'
import { RouterView, RouterLink, useRoute } from 'vue-router'
import { routes } from './router'

const myRoutes = routes.filter((item) => item.name)
const currentRouteName = computed(() => useRoute().name)
</script>

<template>
  <h2 v-position-sticky:top="10" :style="{ background: '#fff' }">
    Practice Vue
  </h2>
  <ul>
    <li v-for="(route, index) in myRoutes" :key="index">
      <RouterLink :to="route.path">{{ route.name }}</RouterLink>
    </li>
  </ul>
  <h3 class="header-section">{{ currentRouteName }}</h3>
  <RouterView />

  <ErrorMessage message="This is global message via props" />
</template>

<style>
.header-section {
  font-weight: bold;
  color: blue;
}

.header-section::before {
  content: '----------';
}
</style>
