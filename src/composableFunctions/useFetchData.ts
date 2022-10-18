import { ref, watch, onUnmounted } from 'vue'
import type { Ref } from 'vue'

import { useLoadingStore } from '@/store/loadingStore'
import { warn } from '@/utils/log'

interface IParams {
  url: Ref<string>
}

interface IOutput<T> {
  loading: Ref<boolean>
  data: Ref<T | undefined>
  error: Ref<string | undefined>
}

const useFetchData = <T>({ url }: IParams): IOutput<T> => {
  const loadingStore = useLoadingStore()
  const { setLoadingStatus } = loadingStore

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

  const unsubscribe = loadingStore.$onAction(({ name, args, after, onError }) => {
    const startTime = Date.now()
    warn(`Store onAction: Start "${name}" with params [${args.join(', ')}].`)
  
    after((result) => {
      warn(
        `Store onAction: Finished "${name}" after ${
          Date.now() - startTime
        }ms.\nResult: ${result}.`
      )
    })
  
    onError((error) => {
      warn(`Store onAction: Failed "${name}" after ${Date.now() - startTime}ms.\nError: ${error}.`)
    })
  })
  

  getData()
  watch(url, () => getData())

  onUnmounted(() => {
    unsubscribe()
    warn('Store onAction: unsubscribe loadingStore')
  })

  return {
    loading,
    data,
    error,
  }
}

export default useFetchData
