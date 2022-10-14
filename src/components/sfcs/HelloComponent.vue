<script setup lang="ts">
/* eslint-disable no-console */
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted,
  onErrorCaptured } from 'vue'

import { logColor } from '@/utils/log'
// withDefaults compiler macro https://vuejs.org/guide/typescript/composition-api.html#typing-component-props
interface IProps {
  hello: string
  message?: string,
  log?: boolean
}
const count = ref<number>(0)
const props = withDefaults(defineProps<IProps>(), {
  message: 'Wellcome to Vu',
  log: true
})

const logMessage = (message: string, color: string = 'black') => {
  props.log && logColor(color, "%c" + message)
}

const simulateError = () => {
  throw Error("Component error!")
}

// define hooks
const secondOnMounted = () => {
  onMounted(() => {
    logMessage('HelloComponent onMounted 2', 'blue')
  })
}

onBeforeMount(() => {
  logMessage('HelloComponent onBeforeMount', 'blue')
})

onMounted(() => {
  logMessage('HelloComponent onMounted 1', 'blue')
})

onBeforeUpdate(() => {
  logMessage('HelloComponent onBeforeUpdate', 'green')
})

onUpdated(() => {
  logMessage('HelloComponent onUpdated', 'green')
})

onBeforeUnmount(() => {
  logMessage('HelloComponent onBeforeUnmount', 'orange')
})

onUnmounted(() => {
  logMessage('HelloComponent onUnmounted', 'orange')
})

secondOnMounted()

onErrorCaptured((error: unknown) => {
  logMessage(`HelloComponent onErrorCaptured: ${error}`, 'red')
})
</script>

<template>
  <p>{{ props.hello }} - {{ props.message }}{{count}}</p>
  <button @click="count++">Increase version</button>
  <button @click="simulateError">Simulate Error</button>
</template>
