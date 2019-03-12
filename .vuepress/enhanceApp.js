// import Vue from 'vue'
// import App from './App'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faTerminal, faBook, faEnvelopeOpen, faCode, faLifeRing } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  // FontAwesome Vue
  library.add(faUserSecret, faTerminal, faBook, faEnvelopeOpen, faCode, faLifeRing)
  Vue.component('fontawesomeicon', FontAwesomeIcon)
  Vue.config.productionTip = false
}
