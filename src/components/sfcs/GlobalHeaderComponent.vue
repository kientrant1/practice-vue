<script setup lang="ts">
import { inject } from 'vue'
interface IProps {
  header: string
}
const props = defineProps<IProps>()
const globalMessage = inject<string>('globalMessage')
</script>

<template>
  <h3 class="header-section">{{ props.header }}</h3>
  <p class="note">
    <i>({{ globalMessage }})</i>
  </p>
</template>

<style scope>
.header-section {
  font-weight: bold;
  color: blue;
}

.header-section::before {
  content: '----------';
}
.note {
  color: black;
}
</style>
