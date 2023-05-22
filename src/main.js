import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify.js'

const app = createApp(App),
  pinia = createPinia()

pinia.use(({ store }) => {
  store.$router = markRaw(router)
})

app.use(pinia)
app.use(router)
app.use(vuetify)
app.config.globalProperties.$vuetify = vuetify

app.mount('#app')
