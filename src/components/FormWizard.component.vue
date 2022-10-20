<script setup lang="ts">
import { ref } from 'vue'

import CustomInput from '@/components/controls/CustomInput.vue'
import CustomDropdown from '@/components/controls/CustomDropdown.vue'
import FormStep from '@/components/formWizard/FormStep.vue'
import FormWizard from '@/components/formWizard/FormWizard.vue'
import { formStepSchema } from '@/validationRules/schema'

interface IForm {
  fullName: string
  email: string
  favoriteDrink: string
}

const ddOptions = [
  { label: 'Coffee', value: 'coffee'},
  { label: 'Tea', value: 'tea'},
  { label: 'Soda', value: 'soda'}
]
const submitValues = ref<IForm>()

const onSubmit = (formValues: IForm) => {
  submitValues.value = formValues
}
</script>

<template>
  <div class="result"> result: {{ submitValues }}</div>
  <FormWizard v-slot="{ currentStep }" :validation-schema="formStepSchema" class="form" @submit="onSubmit">
    <FormStep :step="1" :current-step="currentStep">
      <CustomInput name="fullName" label="Full name" placeholder="Type your Full name" />
      <CustomInput name="email" label="Email" type="email" placeholder="Type your email" />
    </FormStep>
    <FormStep :step="2" :current-step="currentStep">
      <CustomDropdown name="favoriteDrink" label="Choose your drink" :options="ddOptions" />
    </FormStep>
  </FormWizard>
</template>

<style scoped>
.form {
  width: 800px;
}

.result {
  background-color: var(--success-bg-color);
}
</style>