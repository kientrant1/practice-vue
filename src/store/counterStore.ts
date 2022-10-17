import { reactive, ref } from 'vue'
import { defineStore } from 'pinia'

interface ICounter {
  count: number;
}

interface IDeepCounter {
  countObj: {
    value: number;
  }
}

const initialState: ICounter = {
  count: 0,
} 

export const useCounterStore = defineStore('counterStore', () => {
  // state is object data
  const counter = reactive<ICounter>(initialState)
  const deepCounter = reactive<IDeepCounter>({ countObj: { value: 0 } })
  const counterRef = ref<ICounter>({...initialState})

  return {
    counter,
    deepCounter,
    counterRef
  }
})