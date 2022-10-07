<script setup lang="ts">
import { ref } from 'vue'
import type { StyleValue } from 'vue' 
const fontBoldStyle: { fontWeight: StyleValue | undefined } = { fontWeight: 'bold' }
const message = ref<string>('')
const messageModel = ref<string>('')

const handleInputChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  message.value = target.value
}
</script>

<template>
  <h4>One way data binding with :value and @change event</h4>
  <input
    :value="message"
    type="text"
    name="message"
    @change="handleInputChange"
  />
  <div :class="['highlight-header']" :style="{ fontWeight: 'bold'}">
    Inputted value:{{ message }}
  </div>
  <br />
  <h4>Two way data binding with: v-model and remove spaces from both sides</h4>
  <input v-model.trim="messageModel" type="text" name="message" />
  <div :class="['highlight-header']" :style="{ fontWeight: 'bold'}">
    Inputted value:{{ messageModel }}
  </div>

</template>

<style>
.highlight-header {
  color: green;
}
</style>
