import { reactive } from 'vue'
import type { IProduct } from '@/types/IProduct'

interface IState {
  product?: IProduct;
  loading: boolean;
}

interface IOutput {
  state: IState;
  // updateProductState: (product: IProduct) => void;
}

const useGlobalState = (): IOutput => {
  const state = reactive<IState>({ loading: false })

  // const updateProductState = (product: IProduct) => {
  //   state.product = product
  // }

  return {
    state,
    // updateProductState
  }
}

export default useGlobalState
