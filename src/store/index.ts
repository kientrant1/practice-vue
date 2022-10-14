import { markRaw } from 'vue'
import { createPinia } from 'pinia'
import type { PiniaPluginContext } from 'pinia'

import router from '@/router'

const pinia = createPinia()

const myPiniaPlugin = ({ store }: PiniaPluginContext) => {
 store.router = markRaw(router)
}

pinia.use(myPiniaPlugin)

export default pinia