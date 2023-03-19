import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { initializeApp } from 'firebase/app'
import { firebaseConfig } from './firebase/config'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'
import router from './router'
import './assets/styles.css'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import {
  faUserSecret,
  faChevronDown,
  faCaretRight,
  faBars,
  faRightFromBracket,
  faGear,
  faEyeSlash,
  faEye,
  faSpinner,
  faCircleExclamation,
  faCircleCheck,
  faUserGear,
  faMagnifyingGlass,
  faXmark,
  faRotateRight,
  faPen
} from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(
  faUserSecret,
  faChevronDown,
  faCaretRight,
  faBars,
  faRightFromBracket,
  faGear,
  faEyeSlash,
  faEye,
  faSpinner,
  faCircleExclamation,
  faCircleCheck,
  faUserGear,
  faMagnifyingGlass,
  faXmark,
  faRotateRight,
  faPen
)
// initializeApp(firebaseConfig);
const app = createApp(App).component('font-awesome-icon', FontAwesomeIcon)
initializeApp(firebaseConfig)
const pinia = createPinia()

app.use(pinia.use(piniaPluginPersistedstate))

app.use(router)
app.mount('#app')
