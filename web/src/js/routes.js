import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './components/Home'
// import Garages from './components/garagelist'
// import Cars from './components/cars/cars'
import Garages from './components/garage/garages'
import Garage from './components/garage/garage'


Vue.use(VueRouter)


const routes = [
    { path: '/', name: 'home', component: Home },
    // { path: '/garages', component: Garages },
    // { path: '/cars', component: Cars }
    { path: '/garages', name: 'garages', component: Garages },
    { path: '/garages/:name', name: 'garage', component: Garage }
]


export default new VueRouter({ routes })
