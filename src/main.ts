import { createApp } from 'vue'
import type { DirectiveBinding } from 'vue'
import App from './App.vue'

const app = createApp(App)

const positionStickyFunc = (
  el: HTMLElement,
  bindings: DirectiveBinding
) => {
  const pos: any = bindings.arg || 'top'
  el.style.position = 'sticky'
  el.style[pos] = bindings.value + 'px'
}

app.directive('positionSticky', positionStickyFunc)

app.mount('#app')
