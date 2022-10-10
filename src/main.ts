import { createApp } from 'vue'
import App from './App.vue'
import { positionStickyFunc, fullName } from './components/composableFunctions/customDirectives.vue'
import ErrorMessage from './components/sfcs/GlobalComponent.vue'

const app = createApp(App)

app.directive('positionSticky', positionStickyFunc)
app.directive('fullName', fullName)
app.component('ErrorMessage', ErrorMessage)

app.mount('#app')
