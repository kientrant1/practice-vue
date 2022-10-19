<script setup lang="ts">
import { ref } from 'vue'
import { Form, Field, ErrorMessage } from 'vee-validate'

interface IForm {
  email: string
}

const submitValues = ref<IForm>()

const onSubmit = (values: any) => {
  submitValues.value = values
}

const mockApiRequest = (value: string) =>
  // check used email
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(value === 'test@example.com')
    }, 5000)
  })

const validateEmail = async (value: any) => {
  // if the field is empty
  if (!value) {
    return 'This field is required'
  }
  // if the field is not a valid email
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
  if (!regex.test(value)) {
    return 'This field must be a valid email'
  }
  // if match with email
  const matchedEmail = await mockApiRequest(value)
  // All is good
  return matchedEmail ? 'This email is already taken' : true
}
</script>
<template>
  <div class="result">result: {{ submitValues }}</div>
  <Form v-slot="{ isSubmitting }" @submit="onSubmit">
    <div>
      <Field name="email" type="email" :rules="validateEmail" />
    </div>
    <div>
      <ErrorMessage class="field-error" name="email" />
    </div>
    <button :disabled="isSubmitting">Sign up for newsletter</button>
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
