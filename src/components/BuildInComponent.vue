<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue'
import type { Component } from 'vue'
import LoadingComponent from './LoadingComponent.vue'
import KeepAliveComponent from './KeepAliveComponent.vue'
import ModalComponent from './ModalComponent.vue'

const isShownModal = ref<boolean>(false)
const isAppendToBody = ref<boolean>(true)

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
  <AsyncComp
    message="This is Lazy loading component with defineAsyncComponent"
  />
  <br />
  <suspense>
    <AsyncComp
      message="This is Lazy loading component with suspense component"
    />
    <template #fallback><span class="loading-text">Loading...</span></template>
  </suspense>
  <div>
    <KeepAliveComponent />
  </div>
  <div>
    <h4>Teleport Component with modal</h4>
    <label><input v-model="isAppendToBody" type="checkbox" value="true" />Append to body</label>
    <button id="show-modal" @click="isShownModal = true">Show Modal</button>
    <Teleport :to="'body'" :disabled="!isAppendToBody">
      <ModalComponent :show="isShownModal" @close="isShownModal = false">
        <template #header>This is modal header</template>
      </ModalComponent>
    </Teleport>
  </div>
</template>

<style>
.loading-text {
  color: #3498db;
}
</style>
