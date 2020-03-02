import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
    state: {
        msg: 'Welcome to Your Appengine/Vue app the garage',
        garages_list: [],
        car_list: []
    },
    mutations: {},
    actions: {},
    getters: {}
})

/*
Object examples:

var_garage: {
    name: '',
    specialty: '',
    country: ''
}

var_car: {
    licensePlate: '',
    brand: '',
    model: '',
    color: '',
    chassisNumber: ''
}

var_owner: {
    name: '',
    phone: '',
    email: '',
    address: ''
}
*/
