<script setup lang="ts">
import { ref } from 'vue'
import { Form, Field, ErrorMessage } from 'vee-validate'

import { isMatchEmailPattern, isExistingEmail } from '@/validationRules/emailRules'

interface IForm {
  email: string
}

const submitValues = ref<IForm>()

const onSubmit = (values: any) => {
  submitValues.value = values
}

const validateEmail = async (value: any) => {
  // if the field is empty
  if (!value) {
    return 'This field is required'
  }
  // if the field is not a valid email
  if (!isMatchEmailPattern(value)) {
    return 'This field must be a valid email'
  }
  // if match with email
  const matchedEmail = await isExistingEmail(value)
  // All is good
  return matchedEmail ? 'This email is already taken' : true
}
</script>
<template>
  <h4>Async validation</h4>
  <div class="result">result: {{ submitValues }}</div>
  <Form v-slot="{ isSubmitting }" @submit="onSubmit">
    <div>
      <Field name="email" type="email" :rules="validateEmail" />
      <button :disabled="isSubmitting">Sign up for newsletter</button>
    </div>
    <div>
      <ErrorMessage class="field-error" name="email" />
    </div>
  </Form>
</template>

<style scope>
.field-error {
  padding: 5px 0;
  display: block;
  color: red;
}

.result {
  background: yellow;
}
</style>
