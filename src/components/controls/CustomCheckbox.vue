<script setup lang="ts">
import { toRef } from 'vue'
import { useField } from 'vee-validate'

export interface IOptions {
  label: string
  value: string
}

interface IProps {
  selectedValues?: string[]
  name: string
  options: IOptions[]
}

const props = defineProps<IProps>()
/**
 * Needs to know if the field name changes (common case v-for to generate list inputs)
 * https://vee-validate.logaretm.com/v4/guide/composition-api/caveats#reactive-field-names-with-usefield
 */
const name = toRef(props, 'name')
const {
  value: checkedValues,
  errorMessage,
  meta,
} = useField(
  name,
  undefined, // validation will be passed from form level
  {
    initialValue: props.selectedValues,
  }
)
</script>

<template>
  <div :class="{ 'has-error': !!errorMessage, success: meta.valid }">
    <label v-for="(opt, idx) in props.options" :key="idx" :for="`{name}-{idx}`" class="container">
      {{opt.label}}
      <input :id="`{name}-{idx}`" v-model="checkedValues" :name="name" :value="opt.value" type="checkbox" />
      <span class="checkmark" />
    </label>
    <p v-show="errorMessage || meta.valid" class="help-message" >
      {{ errorMessage }}
    </p>
  </div>
</template>

<style scoped>
/* The container */
.container {
  display: inline-block;
  position: relative;
  padding: 3px 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 16px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: var(--success-bg-color);
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  opacity: 0.8;
}

/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: var(--primary-color);
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.container .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

.help-message {
  font-size: 14px;
  margin: 0;
}

.has-error .help-message {
  color: var(--error-color);
}
</style>
