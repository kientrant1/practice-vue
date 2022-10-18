import { reactive, ref } from 'vue'
import { defineStore } from 'pinia'
interface ICounter {
  count: number;
}

const initialState: ICounter = {
  count: 0,
} 

// Composition API
export const useCounterStore = defineStore('counterStore', () => {
  // state is object data
  const counter = reactive<ICounter>(initialState)
  const counterRef = ref<number>(0)

  const incrementCounterRef = () => {
    counterRef.value++
  }

  return {
    counter,
    counterRef,
    incrementCounterRef
  }
})

// Optional API
export const useCounterOptionalStore = defineStore('counterOptionalStore', {
  state: () => ({ counterOptional: 0, nameOptional: 'Eduardo' }),
  getters: {
    doubleCountOptional: (state) => state.counterOptional * 2,
  },
  actions: {
    incrementCounterOptional() {
      this.counterOptional++
    },
  },
})