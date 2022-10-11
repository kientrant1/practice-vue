<script setup lang="ts">
import { ref } from 'vue'

const isShown = ref<boolean>(true)
const toogleMessage = () => {
  isShown.value = !isShown.value
}

defineExpose({
  toogleMessage
})

</script>

<template>
  <p v-if="isShown">This is expose component</p>
</template>
