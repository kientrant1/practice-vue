<script setup lang="ts">
import { toRef } from 'vue'
import { useField } from 'vee-validate'

export interface IOptions {
  label: string
  value: string
}

interface IProps {
  value?: string
  name: string
  label: string
  placeholder?: string
  options: IOptions[]
}

const props = withDefaults(defineProps<IProps>(), {
  value: '',
  placeholder: 'Please select a option'
})
/**
 * Needs to know if the field name changes (common case v-for to generate list inputs)
 * https://vee-validate.logaretm.com/v4/guide/composition-api/caveats#reactive-field-names-with-usefield
 */
const name = toRef(props, 'name');
const {
  value: selectedValue,
  errorMessage,
  meta,
} = useField<string>(
  name,
  undefined, // validation will be passed from form level
  {
    initialValue: props.value,
  }
)
</script>

<template>
  <div class="dropdown-input" :class="{ 'has-error': !!errorMessage, success: meta.valid }">
    <label :for="name">{{ props.label }}</label>
    <select :id="name" v-model="selectedValue" :name="name">
      <option>{{ props.placeholder }}</option>
      <option v-for="(opt, idx) in props.options" :key="idx" :value="opt.value">opt.label</option>
    </select>
    <p v-show="errorMessage || meta.valid" class="help-message" >
      {{ errorMessage }}
    </p>
  </div>
</template>

<style scoped>
.dropdown-input {
  position: relative;
  margin-bottom: calc(1em * 1.5);
  width: 100%;
}

label {
  display: block;
  margin-bottom: 4px;
  width: 100%;
  font-weight: bold;
}

select {
  border-radius: 5px;
  border: 2px solid transparent;
  padding: 15px 10px;
  outline: none;
  background-color: #f2f5f7;
  width: 100%;
  transition: border-color 0.3s ease-in-out, color 0.3s ease-in-out,
    background-color 0.3s ease-in-out;
}

.success select {
  background-color: var(--success-bg-color);
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
