<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-12 text-center">
                <h1>{{ garage.name }}</h1>
            </div>
        </div>
        <form>
            <div class="form-group row">
                <a href="javascript:;" class="col-auto col-form-label card-link text-info" @click="goback">&larr; Go Back</a>
            </div>
            <div class="form-group row">
                <label class="col-sm-2 col-form-label">Name</label>
                <div class="col-sm-3">
                    <input type="text" class="form-control-plaintext" readonly v-model="garage.name">
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-2 col-form-label">Specialty</label>
                <div class="col-sm-3">
                    <input type="text" class="form-control-plaintext" readonly v-model="garage.specialty">
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-2 col-form-label">Phone</label>
                <div class="col-sm-3">
                    <input type="text" class="form-control-plaintext" readonly v-model="garage.contact.phone">
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-2 col-form-label">Email</label>
                <div class="col-sm-3">
                    <input type="text" class="form-control-plaintext" readonly v-model="garage.contact.email">
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-2 col-form-label">Address</label>
                <div class="col-sm-3">
                    <input type="text" class="form-control-plaintext" readonly v-model="garage.contact.postal.address">
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-2 col-form-label">Postal Code</label>
                <div class="col-sm-3">
                    <input type="text" class="form-control-plaintext" readonly v-model="garage.contact.postal.code">
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-2 col-form-label">City</label>
                <div class="col-sm-3">
                    <input type="text" class="form-control-plaintext" readonly v-model="garage.contact.postal.city">
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-2 col-form-label">Country</label>
                <div class="col-sm-3">
                    <input type="text" class="form-control-plaintext" readonly v-model="garage.contact.postal.country">
                </div>
            </div>
            <template v-if="!editing">
                <div class="form-group row">
                    <div class="col-auto col-form-label">
                        <button class="btn btn-info" @click="editing = !editing">Edit</button>
                    </div>
                    <div class="col-auto col-form-label">
                        <button class="btn btn-danger">Delete</button>
                    </div>
                </div>
            </template>
            <template v-if="editing">
                <div class="form-group row">
                    <div class="col-auto col-form-label">
                        <button class="btn btn-success">Save</button>
                    </div>
                    <div class="col-auto col-form-label">
                        <button class="btn btn-danger" @click="editing = !editing">Cancel</button>
                    </div>
                </div>
            </template>
        </form>
        <span class="spacer-lg"></span>
        <table class="table table-borderless table-hover">
            <thead class="thead-dark">
                <tr class="d-flex">
                    <th class="col-2 text-white-50" scope="col">License Plate</th>
                    <th class="col-2 text-white-50" scope="col">Brand</th>
                    <th class="col-2 text-white-50" scope="col">Model</th>
                    <th class="col-2 text-white-50" scope="col">Color</th>
                    <th class="col-2 text-white-50" scope="col">Chassic Number</th>
                    <th class="col-2 d-flex justify-content-end"><a href="javascript:;" class="card-link text-info">+ Add New Car</a></th>
                </tr>
            </thead>
            <tbody>
                <template v-if="this.$store.state.car_list">
                    <cars-list v-for="car in this.$store.state.car_list" :key="car.id" :car="car"></cars-list>
                </template>
                <template v-else>
                    <tr>
                        <td>No garages available...</td>
                    </tr>
                </template>
            </tbody>
        </table>
    </div>
</template>

<script>
import CarsList from './CarsList'

export default {
    components: {
        'cars-list': CarsList
    },
    props: {
        garage_id: {
            type: Number,
            required: true
        },
        // example
        garage: {
            type: Object,
            required: false
        }
    },
    data() {
        return {
            editing: false
        }
    },
    methods: {
        goback() {
            this.$router.go(-1)
        }
    }
}
</script>
