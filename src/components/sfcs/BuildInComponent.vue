<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import type { Component } from 'vue'
import LoadingComponent from './LoadingComponent.vue'

const fetchComponent = new Promise<Component>((resolve) => {
  setTimeout(() => {
    resolve(import('./ExposeComponent.vue'))
    // resolve(LoadingComponent)
  }, 5000)
})

const AsyncComp = defineAsyncComponent({
  loader: () => fetchComponent,
  loadingComponent: LoadingComponent,
  delay: 200,
})
</script>

<template>
  <h3>Build-in Components</h3>
  <AsyncComp message="This is Lazy loading component with defineAsyncComponent" />
  <br />
  <suspense>
    <AsyncComp message="This is Lazy loading component with suspense component" />
    <template #fallback><span class="loading-text">Loading...</span></template>
  </suspense>
</template>

<style>
.loading-text {
  color: #3498db;
}
</style>
