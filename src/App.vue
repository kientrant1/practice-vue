<script setup lang="ts">
import { computed } from 'vue'
import { RouterView, RouterLink, useRoute } from 'vue-router'
import { routes } from './router'
import LoadingComponent from '@/components/sfcs/LoadingComponent.vue'
import { useLoadingStore } from '@/store/loadingStore'

const myRoutes = routes.filter((item) => item.name)
const currentRouteName = computed(() => useRoute().name)

const { loadingState } = useLoadingStore()
const loading = computed(() => loadingState)

</script>

<template>
  <div class="main-container">
    <div v-if="loading" class="loading-container flex-center">
      <LoadingComponent />
    </div>
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

.loading-container {
  width: 100%;
  height: 100%;
  background: white;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
