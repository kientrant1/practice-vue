<script setup lang="ts">
import { ref } from 'vue'
const props = defineProps<{ name: string}>()
const count = ref<number>(0)
</script>

<template>
  <p>Current component: {{props.name || 'N/A'}}</p>
  <span>count: {{ count }}</span>
  <button @click="count++">+</button>
</template>
