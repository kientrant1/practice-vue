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
  // methods: sync and async
  const incrementCounterRef = () => {
    counterRef.value++
  }
  const incrementCounterDelayRef = async () => {
    new Promise<number>((resolve) => {
      setTimeout(() => {
        resolve(counterRef.value++)
      }, 5000)
    })
  }

  return {
    counter,
    counterRef,
    doubleCounterRef,
    incrementCounterRef,
    incrementCounterDelayRef
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
  // methods: sync and async
  actions: {
    incrementCounterOptional() {
      this.counterOptional++
    },
    incrementCounterDelayOptional() {
      new Promise<number>((resolve) => {
        setTimeout(() => {
          resolve(this.counterOptional++)
        }, 3000)
      })
    }
  },
})