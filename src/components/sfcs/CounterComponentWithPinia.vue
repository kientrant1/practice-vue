<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useCounterStore } from '@/store/counterStore'
const counterStore = useCounterStore()
const { counterRef } = storeToRefs(counterStore)

const { counter } = counterStore

const increaseCounterRefHandler = () => {
  counterRef.value++ //=> .value is undefined if no using "storeToRefs"
}
</script>

<template>
  <div>count with primitive value (wrapped with storeToRefs to keep reactive state): {{ counterRef }}</div>
  <button @click="increaseCounterRefHandler">Increase Counter</button>
  <br/><br/>
  <div>count with non-primitive value (without wrapping with storeToRefs): {{ counter.count }}</div>
  <button @click="counter.count++">Increase Counter</button>

</template>
