<script setup lang="ts">
interface IEmits {
  (eventName: 'update:modelValue', value: string): void
}

const props = defineProps<{
  modelValue: string
}>()
const emit = defineEmits<IEmits>()
</script>

<template>
  <input
    :value="props.modelValue"
    @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
  />
</template>

<style scoped>
</style>
