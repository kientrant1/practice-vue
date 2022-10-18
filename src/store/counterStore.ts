import { reactive, ref, computed } from 'vue'
import { defineStore } from 'pinia'
interface ICounter {
  count: number;
}

const initialState: ICounter = {
  count: 0,
} 

/**
 * Composition API
 */
export const useCounterStore = defineStore('counterStore', () => {
  // ref - reactive state
  const counter = reactive<ICounter>(initialState)
  const counterRef = ref<number>(0)
  // computed
  const doubleCounterRef = computed<number>(() => counterRef.value*2)
  // methods
  const incrementCounterRef = () => {
    counterRef.value++
  }

  return {
    counter,
    counterRef,
    doubleCounterRef,
    incrementCounterRef
  }
})

/**
 * Optional API
 */
 interface State {
  counterOptional: number;
  nameOptional: string;
}
export const useCounterOptionalStore = defineStore('counterOptionalStore', {
  // ref - reactive state
  state: (): State => ({ counterOptional: 0, nameOptional: 'Eduardo' }),
  // computed
  getters: {
    doubleCountOptional: (state): number => state.counterOptional * 2,
  },
  // methods
  actions: {
    incrementCounterOptional() {
      this.counterOptional++
    },
  },
})