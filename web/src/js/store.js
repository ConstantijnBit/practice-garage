import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
    state: {
        msg: 'Welcome to Your Appengine/Vue app the garage',
        garages_list: [
            // database examples
            { id: 1, name: 'Garage Delft', specialty: 'Mercedes-Benz', contact: { phone: '06-12345678', email: 'garagedelft@example.com', postal: { address: 'Straatweg 123', code: '1234AB', city: 'Delft', country: 'Nederland' } } },
            { id: 2, name: 'Haagland Autos', specialty: 'BMW', contact: { phone: '06-74893826', email: 'haaglandautos@example.com', postal: { address: 'Haagstraat 69', code: '2602EH', city: 'Den Haag', country: 'Nederland' } } }
        ],
        car_list: [
            { id: 1, garage_id: 1, license_plate: 'X-999-XX', brand: 'Mercedes-Benz E102 AMG', color: 'Metallic Grey', chassis_number: '1234567890', owner: { first_name: 'Bob', last_name: 'Something', phone: '06-98765432', email: 'bobsomething@example.com', postal: { address: 'Weglaan 567', code: '1234ED', city: 'Deflt', country: 'Nederland' } } }
        ]
    },
    mutations: {},
    actions: {},
    getters: {}
})

/*
Object examples:

garage: {
    name: 'Garage Delft',
    specialty: 'Mercedes-Benz',
    contact: {
        phone: '06-12345678',
        email: 'garagedelft@example.com',
        postal: {
            address: 'Straatweg 123',
            code: '1234AB',
            city: 'Delft',
            country: 'Nederland'
        }
    }
}
car: {
    license_plate: 'X-999-XX',
    brand: 'Mercedes-Benz E102 AMG',
    color: 'Metallic Grey',
    chassis_number: '1234567890',
    owner: {
        first_name: 'Bob',
        last_name: 'Something',
        phone: '06-98765432',
        email: 'bobsomething@example.com',
        postal: {
            address: 'Weglaan 567',
            code: '1234ED',
            city: 'Deflt',
            country: 'Nederland'
        }
    }
}
*/
