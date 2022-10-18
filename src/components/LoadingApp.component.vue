<script setup lang="ts">
const props = withDefaults(defineProps<{ isLoadingApp?: boolean }>(), {
  isLoadingApp: false,
})
</script>

<template>
  <div :class="{ 'loading-container flex-center': props.isLoadingApp }">
    <div class="loader" />
  </div>
</template>

<style scoped>
.loading-container {
  width: 100%;
  height: 100%;
  background: white;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: lightgrey;
  opacity: 0.5;
  z-index: 9;
}

.loader {
  width: 30px;
  height: 30px;
  border: 3px solid #f3f3f3;
  border-top: 3px solid #3498db;
  border-radius: 50%;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
