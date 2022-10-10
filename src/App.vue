<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import MyComposableFunction from "./components/MyComposableFunction.vue";
import MyBindings from './components/MyBindings.vue'
import MyEvents from './components/MyEvents.vue'
import MyReactiveState from './components/MyReactiveState.vue'
import MyWatchers from './components/MyWatchers.vue'
import MyDirectives from './components/MyDirectives.vue'
import MySFCs from './components/MySFCs.vue'
</script>

<template>
  <h2 v-position-sticky:top="10" :style="{ background: '#fff'}">Practice Vue</h2>
  <h3 :class="['header-section']">Composable Function</h3>
  <MyComposableFunction msg="this is composable function" />
  <h3 :class="['header-section']">Bindings</h3>
  <MyBindings />
  <h3 :class="['header-section']">Events</h3>
  <MyEvents />
  <h3 :class="['header-section']">Reactive State</h3>
  <MyReactiveState />
  <h3 :class="['header-section']">Watchers</h3>
  <MyWatchers />
  <h3 :class="['header-section']">Directives</h3>
  <MyDirectives />
  <h3 :class="['header-section']">Components</h3>
  <MySFCs />
  <ErrorMessage message="sample error message"/>
</template>

<style>
.header-section {
  font-weight: bold;
}

.header-section::before {
  content: "----------";
}
</style>
