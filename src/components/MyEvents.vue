<script setup lang="ts">
import { reactive } from 'vue'
interface ICount {
  ctrlEnter: number;
  submit: number;
  input: string;
}
const state = reactive<ICount>({
  ctrlEnter: 0,
  submit: 0,
  input: ''
})

const handleInput = (event: Event, type: string) => {
  const target = event.target as HTMLInputElement;
  if (type === 'ctrlEnter') {
    state.ctrlEnter++
    return;
  }
  state.input = target.value
}

const handleSubmit = () => {
  state.submit++
}

const promptMessage = (message: string) => {
  alert(message)
}

</script>

<template>
  <input @keyup.ctrl.enter="handleInput($event, 'ctrlEnter')" @input="handleInput($event, '')"  />
  <div>Count control + enter key is pressed: {{ state.ctrlEnter }}</div>
  <div>Your input text: {{ state.input }}</div>

  <form>
    <button type="submit" @click.prevent.once="handleSubmit">Submit</button>
    <div>Count submit form is pressed: {{ state.submit }}</div>
  </form>

  <a href="/test" @click.stop.prevent>Link with only modifier</a>

  <div @click.prevent.self="promptMessage('parent')">
    <span @click="promptMessage('child')">Child1</span>
  </div>
 
</template>
