<script setup lang="ts">
import { inject } from 'vue'
interface IProps {
  message: string
}
const props = defineProps<IProps>()
const globalMessage = inject<string>('globalMessage')
</script>

<template>
  <p class="error-message">Error message: <i>{{ props.message }}</i> and <i>{{globalMessage}}</i></p>
</template>

<style scope>
.error-message {
  color: red
}
</style>
