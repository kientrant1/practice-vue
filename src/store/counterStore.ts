import { reactive, ref } from 'vue'
import { defineStore } from 'pinia'
interface ICounter {
  count: number;
}

const initialState: ICounter = {
  count: 0,
} 

export const useCounterStore = defineStore('counterStore', () => {
  // state is object data
  const counter = reactive<ICounter>(initialState)
  const counterRef = ref<number>(0)

  return {
    counter,
    counterRef
  }
})