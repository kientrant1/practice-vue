<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useCounterStore, useCounterOptionalStore } from '@/store/counterStore'
const counterStore = useCounterStore()
const counterOptionalStore = useCounterOptionalStore()

const { counter } = counterStore
const { counterRef } = storeToRefs(counterStore)

const { counterOptional, nameOptional, doubleCountOptional } = storeToRefs(counterOptionalStore)
const { incrementCounterOptional } = counterOptionalStore



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
  <br/><br/>
  <div>
    count (optional API): {{ counterOptional }} <br/>
    Double count (optional API): {{ doubleCountOptional }} <br/>
    Count name (optional API): {{ nameOptional }} <br/>
  </div>
  Change name directs in State (CAN via storeToRefs) <input v-model="nameOptional" type="text"/> <br/>
  Change double count getter directs (CAN NOT) <input v-model="doubleCountOptional" placeholder="Double count" type="number"/> <br/>
  Increase number in method (CAN) <button @click="incrementCounterOptional">Increase Counter</button>

</template>
