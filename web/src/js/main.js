// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './routes'
import store from './store'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css' // fallback for bootstrap-overwrite
// import './assets/css/bootstrap-overwrite.scss'
import './assets/css/garage.css'


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})
