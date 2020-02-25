import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './components/Home'
// import Garages from './components/final/Garages'
import GaragesDetail from './components/final/GaragesDetail'
import CarsDetail from './components/final/CarsDetail'
// import Garages from './components/garagelist'
// import Cars from './components/cars/cars'
import Garages from './components/garage/garages'
import Cars from './components/garage/cars'
import Owners from './components/garage/owners'


Vue.use(VueRouter)


// const routes = [
//     { path: '/', name: 'home', component: Home },
//     { path: '/garages', name: 'garages', component: Garages },
//     { path: '/garages/:garage_id/garage', name: 'garages-detail', component: GaragesDetail, props: true },
//     { path: '/garages/:car_id/car', name: 'cars-detail', component: CarsDetail, props: true }
// ]


const routes = [
    { path: '/', name: 'home', component: Home },
    // { path: '/garages', component: Garages },
    // { path: '/cars', component: Cars }
    { path: '/garages', name: 'garages', component: Garages },
    { path: '/garage/:name', name: 'garage', component: Cars },
    { path: '/car/:name', name: 'car', component: Owners },
]


export default new VueRouter({ routes })
