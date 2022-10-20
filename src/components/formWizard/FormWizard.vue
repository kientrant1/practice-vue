<script setup lang="ts">
import { useForm } from 'vee-validate';
import { ref, computed } from 'vue';

interface IProps {
  validationSchema: any[]
}

interface IEmits {
  (eventName: 'submit', value: any): void
}

const props = defineProps<IProps>();
const emit = defineEmits<IEmits>();
const stepCounter = ref<number>(props.validationSchema.length);
const currentStep = ref<number>(1);

const isLastStep = computed(() =>  currentStep.value === stepCounter.value)

const hasPrevious = computed(() => currentStep.value > 1)

// vee-validate will be aware of computed schema changes
const currentSchema = computed(() => props.validationSchema[currentStep.value - 1])

const { handleSubmit } = useForm({
  validationSchema: currentSchema,
  // turn this on so each step values won't get removed when you move back or to the next step
  keepValuesOnUnmount: true,
});

// We are using the "submit" handler to progress to next steps
// and to submit the form if its the last step
const onSubmit = handleSubmit((values) => {
  if (!isLastStep.value) {
    currentStep.value++;
    return;
  }

  // Let the parent know the form was filled across all steps
  emit('submit', values);
});

const goToPrev = () => {
  if (currentStep.value === 1) {
    return;
  }

  currentStep.value--;
}
</script>

<template>
  <form @submit="onSubmit">
    <slot :current-step="currentStep" />
    <div>
      <button v-if="hasPrevious" class="btn" type="button" @click="goToPrev">
        Previous
      </button>
      <button class="btn" type="submit">{{ isLastStep ? 'Submit' : 'Next' }}</button>
    </div>
  </form>
  <!-- Circles which indicates the steps of the form: -->
  <div class="step-container">
    <span v-for="(currStep, idx) in stepCounter" :key="idx" class="step" :class="{ 'active': currStep === currentStep }" />
  </div>
</template>

<style scoped>
.btn {
  padding: 5px;
  margin: 5px;
}

.step-container {
  text-align: center;
}

.step {
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbbbbb;
  border: none;  
  border-radius: 50%;
  display: inline-block;
  opacity: 0.5;
}

.step.active {
  opacity: 1;
}
</style>