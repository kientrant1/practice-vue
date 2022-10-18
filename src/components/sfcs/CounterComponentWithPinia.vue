<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useCounterStore, useCounterOptionalStore } from '@/store/counterStore'
const counterStore = useCounterStore()
const counterOptionalStore = useCounterOptionalStore()

const { counter } = counterStore
const { counterRef, doubleCounterRef } = storeToRefs(counterStore)

const { counterOptional, nameOptional, doubleCountOptional } = storeToRefs(counterOptionalStore)
const { incrementCounterOptional } = counterOptionalStore



const increaseCounterRefHandler = () => {
  counterRef.value++ //=> .value is undefined if no using "storeToRefs"
}
</script>

<template>
  <h4>Composition API - Wrapped with storeToRefs to keep reactive state</h4>
  <div><span class="title">count with primitive value:</span> {{ counterRef }}</div>
  <div><span class="title">count with primitive value:</span> {{ doubleCounterRef }}</div>
  <button @click="increaseCounterRefHandler">Increase Counter</button>
  <br/><br/>
  <h4>Composition API - Without wrapping with storeToRefs</h4>
  <div><span class="title">count with non-primitive value:</span> {{ counter.count }}</div>
  <button @click="counter.count++">Increase Counter</button>
  <br/><br/>
  <h4>Optional API</h4>
  <div>
    <span class="title">count:</span> {{ counterOptional }} <br/>
    <span class="title">Double count:</span> {{ doubleCountOptional }} <br/>
    <span class="title">Count name:</span> {{ nameOptional }} <br/>
  </div>
  Change name directs in State (CAN via storeToRefs) <input v-model="nameOptional" type="text"/> <br/>
  Change double count getter directs (CAN NOT) <input v-model="doubleCountOptional" placeholder="Double count" type="number"/> <br/>
  Increase number in method (CAN) <button @click="incrementCounterOptional">Increase Counter</button>

</template>

<style scoped>
.title {
  font-weight: bold;
}
</style>