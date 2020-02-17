import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './components/Home'
import Garages from './components/garagelist'
import Cars from './components/cars/cars'

Vue.use(VueRouter)


const routes = [
    { path: '/', component: Home },
    { path: '/garages', component: Garages }
]


export default new VueRouter({ routes })
