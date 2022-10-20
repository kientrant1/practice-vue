<script setup lang="ts">
interface IProps {
  currentStep: number
  step: number
}

const props = defineProps<IProps>()

</script>

<template>
  <div v-if="props.currentStep === props.step" :data-step="step">
    <slot />
  </div>
</template>
