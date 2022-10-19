<script setup lang="ts">
/* eslint-disable no-console */
import { useForm, useField, ErrorMessage } from 'vee-validate'
import type { InvalidSubmissionContext } from 'vee-validate'
import { string as StringYup, object as ObjectYup } from 'yup'

interface ISubscriptionForm {
  // nested name
  subscriptionForm: {
    email: string
    note: string
    channels: boolean[]
  }
}

const validationSchema = ObjectYup({
  subscriptionForm: ObjectYup({
    email: StringYup().required(),
    note: StringYup().required(),
  }),
})

const initialFormValues: ISubscriptionForm = {
  subscriptionForm: {
    email: 'default@test.com',
    channels: [false, false],
    note: '',
  },
}

const { handleSubmit, isSubmitting, resetForm, errors } =
  useForm<ISubscriptionForm>({
    initialValues: initialFormValues,
    validationSchema,
  })

const { value: emailValue } = useField<string>('subscriptionForm.email')
const { value: noteValue } = useField<string>('subscriptionForm.note')
const { value: internetChannels } = useField<boolean>(
  'subscriptionForm.channels[0]'
)
const { value: friendChannels } = useField<boolean>(
  'subscriptionForm.channels[1]'
)

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
  console.log(JSON.stringify(values, null, 2))
}, onInvalidSubmit)

const onReset = () => {
  resetForm()
}
</script>
<template>
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
</style>
