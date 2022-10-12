import { createApp } from 'vue'
import App from './App.vue'
import { registerInApp } from './appConfig/appConfig'
import router from './router'

const app = createApp(App)

registerInApp(app)
app.use(router)

app.mount('#app')
