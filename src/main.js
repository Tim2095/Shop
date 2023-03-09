import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { MotionPlugin } from '@vueuse/motion'

import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { fas } from "@fortawesome/free-solid-svg-icons";


library.add(fas)

import './assets/main.scss'

const app = createApp(App)

app.use(createPinia())
app.use(MotionPlugin)
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
