import { createApp } from 'vue'
import pinia from './stores/index.js'
import { MotionPlugin } from '@vueuse/motion'

import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { fas } from '@fortawesome/free-solid-svg-icons'

import './assets/main.scss'

library.add(fas)

const app = createApp(App)

app.use(pinia)
app.use(MotionPlugin)
app.use(router)

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
