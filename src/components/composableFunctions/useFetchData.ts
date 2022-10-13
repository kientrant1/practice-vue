import { ref } from 'vue'
import type { Ref } from 'vue'

interface IParams {
  url: string;
}

interface IOutput<T> {
  loading: Ref<boolean>;
  data: Ref<T | null>;
  error: Ref<string | null>;
}

const useFetchData = <T>({ url }: IParams): IOutput<T> => {
  const loading = ref(true)
  const data = ref(null)
  const error = ref(null)

  fetch(url)
    .then((res) => res.json())
    .then((json) => {
      loading.value = false
      data.value = json
    })
    .catch((err) => {
      loading.value = false
      error.value = err
    })

  return {
    loading,
    data,
    error,
  }
}

export default useFetchData
