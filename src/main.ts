import { createApp } from 'vue'
import App from './App.vue'
import { registerInApp } from './appConfig/appConfig'

const app = createApp(App)

registerInApp(app)

app.mount('#app')
