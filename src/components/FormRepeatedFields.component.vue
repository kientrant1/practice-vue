<script setup lang="ts">
/* eslint-disable no-console */
import { ref } from 'vue'
import { useForm, useFieldArray } from 'vee-validate'
import type { InvalidSubmissionContext } from 'vee-validate'

import CustomInput from '@/components/controls/CustomInput.vue'
import { repeatedFieldsSchema } from '@/validationRules/schema'

interface ILink {
  id: number
  url: string
}

interface IForm {
  links: ILink[]
}

const initialValues: IForm = {
  links: [
    { id: 1, url: 'https://github.com/logaretm' }
  ]
}

const submitValues = ref<IForm>()

const { handleSubmit, isSubmitting } = useForm({
  initialValues,
  validationSchema: repeatedFieldsSchema
});
const { fields, push, remove } = useFieldArray('links')

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

const onAddItem = () => {
  push({ id: 0, url: '' })
}
</script>

<template>
  <div class="result"> result: {{ submitValues }}</div>
  <form class="form" novalidate @submit="onSubmit">
    <div v-for="(field, idx) in fields" :key="field.key">
      <CustomInput :name="`links[${idx}].url`" type="url" :label="`Link [${idx + 1}]`" />
      <button class="btn submit-btn" type="button" @click="remove(idx)">Remove</button>
    </div>
    <button class="btn submit-btn" type="button" @click="onAddItem">Add</button>
    <button class="btn submit-btn" :disabled="isSubmitting">Submit</button>
  </form>
</template>

<style scoped>
.form {
  width: 800px;
}

.btn {
  padding: 5px;
  margin: 5px;
  width: 200px;
  display: inline-block;
}

.result {
  background-color: var(--success-bg-color);
}
</style>