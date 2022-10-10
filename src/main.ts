import { createApp } from 'vue'
import App from './App.vue'
import { positionStickyFunc, fullName } from './components/composableFunctions/customDirectives.vue'

const app = createApp(App)

app.directive('positionSticky', positionStickyFunc)
app.directive('fullName', fullName)

app.mount('#app')
