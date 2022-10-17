<script setup lang="ts">
import { useCounterStore } from '@/store/counterStore'
const { counterRef, counter } = useCounterStore()
</script>

<template>
  <div>count with primitive value: {{ counterRef }}</div>
  <button @click="counterRef++">Increase Counter</button>
  <br/><br/>
  <div>count with non-primitive value: {{ counter.count }}</div>
  <button @click="counter.count++">Increase Counter</button>

</template>
