<script setup lang="ts">
/* eslint-disable no-console */
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted,
  onErrorCaptured } from 'vue'
// withDefaults compiler macro https://vuejs.org/guide/typescript/composition-api.html#typing-component-props
interface IProps {
  message: string
}
const props = defineProps<IProps>()

</script>

<template>
  <p class="error-message">Error message: {{ props.message }}</p>
</template>

<style scope>
.error-message {
  color: red
}
</style>
