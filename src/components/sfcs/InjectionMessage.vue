<script setup lang="ts">
import { inject } from 'vue'
interface IInjectorMessage {
  message: string;
  updateMessage?: (message: string) => void;
}
const { message, updateMessage } = inject<IInjectorMessage>('injectionMessage', { message: '' })

const inputChangeHandle = (event: Event) => {
  const target = event.target as HTMLInputElement
  updateMessage?.(target.value)
}
</script>

<template>
  <div>
    Child Input <input :value="message" type="text" @input="inputChangeHandle" />
    <button @click="message = ''">Reset Via Injector Comp</button>
  </div>
</template>

<style scope>
.error-message {
  color: red;
}
</style>
