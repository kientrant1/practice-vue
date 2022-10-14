import { ref, watch } from 'vue'
import type { Ref } from 'vue'

import { useLoadingStore } from '@/store/loadingStore'

interface IParams {
  url: Ref<string>
}

interface IOutput<T> {
  loading: Ref<boolean>
  data: Ref<T | undefined>
  error: Ref<string | undefined>
}

const useFetchData = <T>({ url }: IParams): IOutput<T> => {
  const { setLoadingStatus } = useLoadingStore()

  const loading = ref<boolean>(true)
  const data = ref<T>()
  const error = ref<string>()

  const setLoading = (status: boolean) => {
    setLoadingStatus(status)
    loading.value = status
  }

  const getData = async () => {
    try {
      setLoading(true)
      // https://fakestoreapi.com/docs
      const res = await fetch(url.value)
      data.value = await res.json()
      setLoading(false)
    } catch (error: any) {
      error.value = 'Error! Could not reach the API. ' + (error as string)
      setLoading(false)
    }
  }

  getData()
  watch(url, () => getData())

  return {
    loading,
    data,
    error,
  }
}

export default useFetchData
