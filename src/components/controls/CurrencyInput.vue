<script setup lang="ts">
import { toRef, watch } from 'vue'
import { useField } from 'vee-validate'
import { useCurrencyInput } from 'vue-currency-input'
import type { CurrencyFormatOptions } from 'vue-currency-input'

interface IProps {
  value?: number
  name: string
  label: string
  placeholder?: string
  options: CurrencyFormatOptions
}

const props = withDefaults(defineProps<IProps>(), {
  value: 0,
  placeholder: '',
})
/**
 * Needs to know if the field name changes (common case v-for to generate list inputs)
 * https://vee-validate.logaretm.com/v4/guide/composition-api/caveats#reactive-field-names-with-usefield
 */
const name = toRef(props, 'name')
const { errorMessage, handleChange, meta } = useField<number>(
  name,
  undefined, // validation will be passed from form level
  {
    initialValue: props.value,
  }
)
const { formattedValue, inputRef } = useCurrencyInput(props.options)

watch(formattedValue, (newValue) => {
  // when the input is empty we should tell vee-validate that it has no value
  if (newValue === '') {
    handleChange(undefined)
    return
  }

  // otherwise try to parse the number
  const newNumber = Number(newValue)
  // it got formatted so its not a valid number now
  if (Number.isNaN(newNumber)) {
    return
  }

  // sync it with vee-validate, this will trigger validation
  handleChange(newNumber)
  // handleChange(newNumber, false); // doesn't trigger validation
})
</script>

<template>
  <div :class="{ 'has-error': !!errorMessage }">
    <label :for="name">{{ props.label }}</label>
    <input
      :id="name"
      ref="inputRef"
      :name="name"
      type="text"
      :value="formattedValue"
      :placeholder="props.placeholder"
    />
    <p v-show="errorMessage || meta.valid" class="help-message">
      {{ errorMessage }}
    </p>
  </div>
</template>

<style scoped>
label {
  display: block;
  margin-bottom: 4px;
  width: 100%;
  font-weight: bold;
}

input {
  border-radius: 5px;
  border: 2px solid transparent;
  padding: 15px 10px;
  outline: none;
  background-color: #f2f5f7;
  width: 100%;
  transition: border-color 0.3s ease-in-out, color 0.3s ease-in-out,
    background-color 0.3s ease-in-out;
}

.help-message {
  position: absolute;
  bottom: calc(-1.5 * 1em);
  left: 0;
  margin: 0;
  font-size: 14px;
}
.has-error .help-message {
  color: var(--error-color);
}
</style>
