<script setup lang="ts">
import { ref } from 'vue'
import HelloComponent from '../components/sfcs/HelloComponent.vue'
const toogleComp = ref<boolean>(true)
</script>

<template>
  <div>
    <input v-model="toogleComp" type="checkbox" value="true"/> Show Hello Component
    <HelloComponent v-if="toogleComp" hello="Hello there, " />
  </div>
</template>
