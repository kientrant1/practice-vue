<script setup lang="ts">
import { ref, reactive } from 'vue'
const c = { count: 0 }
const countRef = ref<number>(c.count)
const countReactive = reactive<{ count: number }>(c)
const { count } = countReactive;

const handleClick = () => {
  countRef.value++
  countReactive.count++
}
</script>

<template>
  <button @click="handleClick">Count</button>
  <div>Count with ref: {{ countRef }}</div>
  <div>Count with reactive: {{ countReactive.count }}</div>
  <div>Count with reactive object destructuring: {{ count }}</div>
</template>
