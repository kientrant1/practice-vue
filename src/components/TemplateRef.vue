<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'

import ExposeComponent from './ExposeComponent.vue'
import { log } from '@/utils/log'

const list = reactive<string[]>(['item 1', 'item 2', 'item 3'])
const itemRefs = ref<HTMLElement[] | null>([])
const inputRef = ref<HTMLInputElement | null>(null)
const componentRef = ref<InstanceType<typeof ExposeComponent> | null>(null)

const toogleMessage = () => {
  componentRef.value?.toogleMessage()
}
onMounted(() => {
  log('Input Ref value: ' + inputRef.value?.value)
  log('List Ref value: ' + itemRefs.value?.map(i => i.textContent))
})
</script>

<template>
  <input ref="inputRef" type="text" disabled value="ABC" />
  <ul>
    <li v-for="(item, index) in list" ref="itemRefs" :key="index">
      <span>{{ item }}</span>
    </li>
  </ul>
  <h3>Expose Component</h3>
  <ExposeComponent ref="componentRef" /><button @click="toogleMessage">Toogle Message</button>
</template>

<style scope></style>
