<script setup lang="ts">
import { ref } from 'vue'
const props = withDefaults(defineProps<{
  message?: string
}>(), {
  message: 'This is expose component'
})
const isShown = ref<boolean>(true)
const toogleMessage = () => {
  isShown.value = !isShown.value
}

defineExpose({
  toogleMessage
})

</script>

<template>
  <p v-if="isShown"><u>{{props.message}}</u></p>
</template>
