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
        add(state, payload) {
            const id = Math.floor(Math.random() * 1e10)
            const toAdd = {...payload, id}
            return state.carlist.push({...toAdd})
        },
        update(state, payload, id) {
            state.carlist.map(car => {
                if (car.id === id) {
                    return Object.assign(car, payload)
                }
            })
        },
        remove(state, id) {
            state.carlist.map((car, index) => {
                if (car.id === id) {
                    return state.carlist.splice(index, 1)
                }
            })
        }
    },
    actions: {
        // no need for sessionstorage because of server
        updateSessionStorage() {},
        loadSessionStorage() {}
    },
    getters: {
        load: (state) => {
            return state.carlist
        },
        loadID: (state) => (id) => {
            let toLoad
            state.carlist.map(car => {
                if (car.id === id) {
                    toLoad = car
                }
            })
            return toLoad
        }
    }
})
