<script setup lang="ts">
import { ref, watch, watchEffect, computed } from 'vue'

import { log } from '@/utils/log'

const count = ref<number>(0)

const doubleCount = computed(() => count.value *2)

const handleClick = () => {
  count.value++
}

const unWatch = watch(count, (newValue) => {
  // Reset value if count > 5
  if(newValue > 5) {
    count.value = 0;
  }
})

const unWatchEffect = watchEffect(() => {
  log(`watchEffect - count: ${count.value}`)
});

const unAllWatch = () => {
  unWatch()
  unWatchEffect()
}
</script>

<template>
  <button @click="handleClick">Count</button>
  <button @click="unAllWatch">Unwatch</button>
  <div>Count: {{ count }}</div>
  <div>Double Count: {{ doubleCount }}</div>

</template>
