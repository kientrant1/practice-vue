import { ref, watch } from 'vue'
import type { Ref } from 'vue'

interface IParams {
  url: Ref<string>
}

interface IOutput<T> {
  loading: Ref<boolean>
  data: Ref<T | undefined>
  error: Ref<string | undefined>
}

const useFetchData = <T>({ url }: IParams): IOutput<T> => {
  const loading = ref<boolean>(true)
  const data = ref<T>()
  const error = ref<string>()

  const getData = async () => {
    try {
      // https://fakestoreapi.com/docs
      const res = await fetch(url.value)
      data.value = await res.json()
      loading.value = false
    } catch (error: any) {
      error.value = 'Error! Could not reach the API. ' + (error as string)
      loading.value = false
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
