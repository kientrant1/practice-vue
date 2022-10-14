import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useLoadingStore = defineStore('loadingStore', () => {
  const loadingState = ref<boolean>(false)

  const setLoadingStatus = (loading: boolean) => {
    loadingState.value = loading
    
  }

  return {
    loadingState,
    setLoadingStatus
  }
})