import { reactive } from 'vue'
import type { IProduct } from '@/types/IProduct'

interface IState {
  product?: IProduct
}

interface IOutput {
  state: IState;
  updateProductState: (product: IProduct) => void;
}

const useGlobalState = (): IOutput => {
  const state = reactive<IState>({})

  const updateProductState = (product: IProduct) => {
    state.product = product
  }

  return {
    state,
    updateProductState
  }
}

export default useGlobalState
