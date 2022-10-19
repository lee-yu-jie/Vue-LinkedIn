import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/css/reset.css' 
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faRss, faUser, faBriefcase, faComments, faBell, faMapPin, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faRss, faUser, faBriefcase, faComments, faBell, faMapPin, faMagnifyingGlass)


createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app')
