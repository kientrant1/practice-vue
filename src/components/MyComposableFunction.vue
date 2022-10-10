<script setup lang="ts">
import useWindowResize from '@/components/composableFunctions/useWindowResize'
const state = defineProps<{
  msg: string
}>()
const { width, height } = useWindowResize();
</script>

<template>
  <h1>{{ state.msg }}</h1>

  <div>
      Current window size: width - {{width}}, height - {{height}}
    </div>
</template>

<style scoped>
</style>
