<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-12 text-center">
                <h1>{{ $route.params.name }}</h1>
            </div>
        </div>
        <span class="spacer"></span>
        <form>
            <div class="form-row align-items-center">
                <div class="col">
                    <input type="text" class="form-control" placeholder="License Plate" v-model="new_car.license_plate">
                </div>
                <div class="col">
                    <input type="text" class="form-control" placeholder="Brand" v-model="new_car.brand">
                </div>
                <div class="col">
                    <input type="text" class="form-control" placeholder="Color" v-model="new_car.color">
                </div>
                <div class="col">
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="szxdcfgvhb" v-model="new_car.storage">
                        <label class="form-check-label" for="szxdcfgvhb">Car in Storage</label>
                    </div>
                </div>
                <div class="col-auto">
                    <button class="btn btn-primary" @click.prevent="add_car">Add New Car</button>
                    <button class="btn btn-secondary" @click.prevent="load">Refresh List</button>
                </div>
            </div>
        </form>
        <span class="spacer"></span>
        <table class="table table-borderless table-hover">
            <thead class="thead-dark">
                <tr class="d-flex">
                    <th class="col-2" scope="col">Name</th>
                    <th class="col-2" scope="col">Brand</th>
                    <th class="col-2" scope="col">Country</th>
                    <th class="col-2" scope="col">In Storage</th>
                    <th class="col-4" scope="col">ID Number</th>
                </tr>
            </thead>
            <tbody>
                <garage-list v-for="car in car_list" :key="car.id" :car="car" @change="car_list = $event"></garage-list>
            </tbody>
        </table>
    </div>
</template>

<script>
import garage_list from './garage-list'

export default {
    data() {
        return {
            car_list: [],
            new_car: {
                license_plate: '',
                brand: '',
                color: '',
                storage: false,
                garage_id: this.$route.query.id
            }
        }
    },
    components: {
        'garage-list': garage_list
    },
    methods: {
        load() {
            $.ajax({
                type: 'GET',
                url: '/cars/',
                contentType: 'application/json',
                timeout: 60000
            }).then((data) => {
                this.car_list = data.filter(car => car.garage_id === parseInt(this.$route.query.id))
            })
            console.log('content loaded')
        },
        add_car() {
            $.ajax({
                type: 'POST',
                url: '/car/',
                contentType: 'application/json',
                data: JSON.stringify(this.new_car),
                timeout: 2000
            }).then((data) => {
                Object.assign(this.car_list, data)
                this.reset_form()
            })
            console.log('garage added')
        },
        reset_form() {
            const reset = {
                license_plate: '',
                brand: '',
                color: '',
                storage: false
            }
            Object.assign(this.new_car, reset)
            console.log('form reset')
        }
    },
    created() {
        console.log('page loaded')
        this.load()
    }
}
</script>