import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// Store used for the "car" app section, not "garages"
export default new Vuex.Store({
    state: {
        msg: 'Welcome to Your Appengine/Vue app the garage',
        carlist: []
    },
    mutations: {
        save(state, payload) {
            state.carlist.push({...payload})
            console.log(state.carlist)
        }
    },
    actions: {},
    getters: {}
})