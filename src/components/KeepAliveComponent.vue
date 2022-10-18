<script setup lang="ts">
import { ref, shallowRef } from 'vue'
import type { Component } from 'vue'
import CounterComponent from './CounterComponent.vue'
import HelloComponent from './HelloComponent.vue'

const currentName = ref<string>()
const currentComponent = shallowRef<Component>()
</script>

<template>
  <div class="demo">
    <h4>Component State will be kept when switching (multi KeepAlive)</h4>
    <label><input v-model="currentName" type="radio" value="A" />A</label>
    <label><input v-model="currentName" type="radio" value="B" />B</label>
    <KeepAlive>
      <component
        :is="CounterComponent"
        v-if="currentName === 'A'"
        v-bind="{ name: 'A' }"
      />
    </KeepAlive>
    <KeepAlive>
      <component
        :is="CounterComponent"
        v-if="currentName === 'B'"
        v-bind="{ name: 'B' }"
      />
    </KeepAlive>
    <h4>Component State will be kept when switching (Single KeepAlive)</h4>
    <label
      ><input
        v-model="currentComponent"
        type="radio"
        :value="CounterComponent"
      />CounterComponent</label
    >
    <label
      ><input
        v-model="currentComponent"
        type="radio"
        :value="HelloComponent"
      />HelloComponent</label
    >
    <KeepAlive>
      <component :is="currentComponent" />
    </KeepAlive>
  </div>
</template>
