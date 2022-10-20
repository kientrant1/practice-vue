<script setup lang="ts">
/* eslint-disable no-console */
import { ref } from 'vue'
import { useForm, useField, ErrorMessage } from 'vee-validate'
import type { InvalidSubmissionContext } from 'vee-validate'
import { string as yupString, object as yupObject, boolean as yupBoolean } from 'yup'

interface ISubscriptionForm {
  // nested name
  subscriptionForm: {
    email: string
    note: string
    channels: boolean[]
    newsletter: boolean | null
  }
}

const submitValues = ref<ISubscriptionForm>()

const validationSchema = yupObject({
  subscriptionForm: yupObject({
    email: yupString().required(),
    note: yupString().required(),
    newsletter: yupBoolean().required()
  }),
})

const definedValidationSchema = {
  subscriptionForm: {
    email(value: string) {
      if(value) {
        return true
      }
      return 'Email can not be empty'
    }
  }
}

const initialFormValues: ISubscriptionForm = {
  subscriptionForm: {
    email: 'default@test.com',
    channels: [false, false],
    note: '',
    newsletter: null
  },
}

const { handleSubmit, isSubmitting, resetForm, errors } =
  useForm<ISubscriptionForm>({
    initialValues: initialFormValues,
    validationSchema: validationSchema,
  })

const { value: emailValue } = useField<string>('subscriptionForm.email')
const { value: noteValue } = useField<string>('subscriptionForm.note')
const { value: internetChannels } = useField<boolean>(
  'subscriptionForm.channels[0]'
)
const { value: friendChannels } = useField<boolean>(
  'subscriptionForm.channels[1]'
)
const { value: newsletterValue } = useField<string>('subscriptionForm.newsletter')

const onInvalidSubmit = ({
  values,
  errors,
  results,
}: InvalidSubmissionContext<any>) => {
  console.log('values', values)
  console.log('errors', errors)
  console.log('results', results)
}

const onSubmit = handleSubmit((values: ISubscriptionForm) => {
  submitValues.value = values
}, onInvalidSubmit)

const onReset = () => {
  resetForm()
}
</script>
<template>
  <div class="result"> result: {{ submitValues }}</div>
  <form novalidate @submit="onSubmit">
    <div class="row">
      <label class="label" for="email">Email: </label
      ><input id="email" v-model="emailValue" name="email" />
      <ErrorMessage class="field-error" name="subscriptionForm.email" />
    </div>
    <div class="row">
      <label class="label">Connecting via channel: </label>
    </div>
    <div class="row">
      <label class="label"
        ><input
          v-model="internetChannels"
          name="internetChannels"
          type="checkbox"
        />
        Internet</label
      >
      <label class="label"
        ><input
          v-model="friendChannels"
          name="friendChannels"
          type="checkbox"
        />
        Friends</label
      >
    </div>
    <div class="row">
      <label class="label" for="note">Note: </label
      ><input id="note" v-model="noteValue" name="note" />
      <span class="field-error">{{
        (errors as any)['subscriptionForm.note']
      }}</span>
    </div>
    <div class="row">
      <label class="label" for="newsletter">Do you want receive newsletter about new products: </label>
      <label for="newsletterYes"><input id="newsletterYes" v-model="newsletterValue" name="newsletter" :value="true" type="radio" /> Yes</label>
      <label for="newsletterNo"><input id="newsletterNo" v-model="newsletterValue" name="newsletter" :value="false" type="radio" /> No</label>
      <ErrorMessage class="field-error" name="subscriptionForm.newsletter" />
    </div>

    <button :disabled="isSubmitting">Sign up for newsletter</button>
    <button @click="onReset">Reset</button>
  </form>
</template>

<style scope>
.label {
  font-weight: bold;
}

.row {
  margin-bottom: 5px;
}

.field-error {
  padding: 5px 0;
  display: block;
  color: red;
}

.result {
  background: yellow;
}
</style>
