<script setup lang="ts">
import { Form, Field, ErrorMessage } from 'vee-validate'

const onSubmit = (values: any) => {
  console.log('Submitting', values)
}

const validateEmail = (value: any) => {
  // if the field is empty
  if (!value) {
    return 'This field is required'
  }
  // if the field is not a valid email
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
  if (!regex.test(value)) {
    return 'This field must be a valid email'
  }
  // All is good
  return true
}
</script>
<template>
  <Form @submit="onSubmit">
    <Field name="email" type="email" :rules="validateEmail" />
    <ErrorMessage name="email" />
    <button>Sign up for newsletter</button>
  </Form>
</template>

<style scope></style>
