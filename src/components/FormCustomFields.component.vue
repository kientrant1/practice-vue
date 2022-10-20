<script setup lang="ts">
/* eslint-disable no-console */
import { ref } from 'vue'
import { useForm } from 'vee-validate'
import type { InvalidSubmissionContext } from 'vee-validate'

import { registrationSchema } from '@/validationRules/schema'
import CustomInput from '@/components/controls/CustomInput.vue'
import CustomCheckbox from '@/components/controls/CustomCheckbox.vue'
import type { IOptions } from '@/components/controls/CustomCheckbox.vue'
import CurrencyInput from '@/components/controls/CurrencyInput.vue'

interface IForm {
  firstName: string
  lastName: string
  pwd: string
  newsletter?: string[]
  amount: number
}

const submitValues = ref<IForm>()

const initialFormValues: IForm = {
  firstName: '',
  lastName: '',
  pwd: '',
  amount: 0
}

const listChannels: IOptions[] = [
  { label: 'Email', value: 'email' },
  { label: 'Letter', value: 'letter' }
]

const { handleSubmit, isSubmitting } =
  useForm<IForm>({
    initialValues: initialFormValues,
    validationSchema: registrationSchema,
  })

const onInvalidSubmit = ({
  values,
  errors,
  results,
}: InvalidSubmissionContext<any>) => {
  console.log('values', values)
  console.log('errors', errors)
  console.log('results', results)
}

const onSubmit = handleSubmit((values: IForm) => {
  submitValues.value = values
}, onInvalidSubmit)
</script>
<template>
  <div class="result"> result: {{ submitValues }}</div>
  <form class="form" novalidate @submit="onSubmit">
    <div class="row">
      <CustomInput name="firstName" type="text" label="First Name" placeholder="Input your first name" />
    </div>
    <div class="row">
      <CustomInput name="lastName" type="text" label="Last Name" placeholder="Input your last name" />
    </div>
    <div class="row">
      <CustomInput name="pwd" type="text" label="Password" placeholder="Input your password" />
    </div>
    <div class="row">
      <CustomInput name="confirmPwd" type="text" label="Confirm password" placeholder="Input your password again" />
    </div>
    <div class="row">
      <div>Choose subscrible channels</div>
      <CustomCheckbox name="newsletter" :options="listChannels" :selected-values="['email']" />
    </div>
    <div class="row">
      <CurrencyInput name="amount" label="Amount Donation" :options="{currency: 'USD'}" placeholder="Input your donation amount" />
    </div>

    <button class="submit-btn" :disabled="isSubmitting">Submit</button>
  </form>
</template>

<style scope>
.form {
  width: 800px;
}

.row {
  margin-bottom: 5px;
}

.submit-btn {
  background: var(--primary-color);
  outline: none;
  border: none;
  color: #fff;
  font-size: 18px;
  padding: 10px 15px;
  display: block;
  width: 100%;
  border-radius: 7px;
  margin-top: 40px;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
}

.result {
  background-color: var(--success-bg-color);
}
</style>
