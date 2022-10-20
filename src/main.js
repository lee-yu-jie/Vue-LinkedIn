import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/css/reset.css' 
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faRss, faUser, faBriefcase, faComments, faBell, faMapPin, faMagnifyingGlass, faCircleQuestion, faGear } from '@fortawesome/free-solid-svg-icons'

library.add(faRss, faUser, faBriefcase, faComments, faBell, faMapPin, faMagnifyingGlass, faCircleQuestion, faGear )

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app')
