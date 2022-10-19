import { markRaw } from 'vue'
import { createPinia } from 'pinia'
import type { PiniaPluginContext } from 'pinia'

import router from '@/router'

const pinia = createPinia()

const myPiniaPlugin = ({ store }: PiniaPluginContext) => {
  // Marks an object so that it will never be converted to a proxy. Returns the object itself
  store.router = markRaw(router)
}

pinia.use(myPiniaPlugin)

export default pinia
