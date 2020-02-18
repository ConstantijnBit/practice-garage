import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './components/Home'
// import Garages from './components/garagelist'
// import Cars from './components/cars/cars'
import Garages from './components/garage/garages'
import Cars from './components/garage/cars'


Vue.use(VueRouter)


const routes = [
    { path: '/', name: 'home', component: Home },
    // { path: '/garages', component: Garages },
    // { path: '/cars', component: Cars }
    { path: '/garages', name: 'garages', component: Garages },
    { path: '/cars/:name', name: 'garage', component: Cars }
]


export default new VueRouter({ routes })
