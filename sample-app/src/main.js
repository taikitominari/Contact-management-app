import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import firebase from 'firebase'

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyDJrJwq27bI52NwgTROEaeGpitgjVgEiMc",
  authDomain: "my-address-pj-3a951.firebaseapp.com",
  projectId: "my-address-pj-3a951",
  storageBucket: "my-address-pj-3a951.appspot.com",
  messagingSenderId: "871133339346",
  appId: "1:871133339346:web:be292f9898744e4afad70b",
  measurementId: "G-N0KVYDX4K2"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();



new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')