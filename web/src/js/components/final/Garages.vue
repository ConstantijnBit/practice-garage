<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-12 text-center">
                <h1>Garages</h1>
            </div>
        </div>
        <span class="spacer"></span>
        <table class="table table-borderless table-hover">
            <thead class="thead-dark">
                <tr class="d-flex">
                    <th class="col-3 text-white-50" scope="col">Name</th>
                    <th class="col-3 text-white-50" scope="col">Specialty</th>
                    <th class="col-3 text-white-50" scope="col">Address</th>
                    <th class="col-3 d-flex justify-content-end"><a href="javascript:;" class="card-link text-info" @click="adding = !adding">+ Add New Garage</a></th>
                </tr>
            </thead>
            <tbody>
                <template v-if="!empty_list">
                    <garages-list v-for="garage in garages_list" :key="garage.id" :garage="garage"></garages-list>
                </template>
                <template v-else>
                    <tr>
                        <td>No garages available...</td>
                    </tr>
                </template>
            </tbody>
        </table>
        <template v-if="adding">
            <div class="edit-overlay">
                <form>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label">Name</label>
                        <div class="col-sm-3">
                            <input type="text" class="form-control" v-model="new_garage.name">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label">Specialty</label>
                        <div class="col-sm-3">
                            <input type="text" class="form-control" readonly v-model="new_garage.specialty">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label">Phone</label>
                        <div class="col-sm-3">
                            <input type="text" class="form-control" v-model="new_garage.contact.phone">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label">Email</label>
                        <div class="col-sm-3">
                            <input type="text" class="form-control" v-model="new_garage.contact.email">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label">Address</label>
                        <div class="col-sm-3">
                            <input type="text" class="form-control" v-model="new_garage.contact.postal.address">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label">Postal Code</label>
                        <div class="col-sm-3">
                            <input type="text" class="form-control" v-model="new_garage.contact.postal.code">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label">City</label>
                        <div class="col-sm-3">
                            <input type="text" class="form-control" v-model="new_garage.contact.postal.city">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label">Country</label>
                        <div class="col-sm-3">
                            <input type="text" class="form-control" v-model="new_garage.contact.postal.country">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-auto col-form-label">
                            <button class="btn btn-info">Save</button>
                        </div>
                        <div class="col-auto col-form-label">
                            <button class="btn btn-danger">Cancel</button>
                        </div>
                    </div>
                </form>
            </div>
        </template>
    </div>
</template>

<script>
import GaragesList from './GaragesList'

export default {
    components: {
        'garages-list': GaragesList
    },
    data() {
        return {
            garages_list: [],
            adding: false,
            new_garage: {
                name: '',
                specialty: '',
                contact: {
                    phone: '',
                    email: '',
                    postal: {
                        address: '',
                        code: '',
                        city: '',
                        country: ''
                    }
                }
            }
        }
    },
    computed: {
        empty_list() {
            return Object.keys(this.garages_list).length === 0
        }
    },
    methods: {
        load() {
            $.ajax({
                type: 'GET',
                url: '/garages/',
                contentType: 'application/json',
                timeout: 60000
            }).then(data => {
                this.garages_list = data
            })
        }
    },
    created() {
        this.load()
    }
}
</script>
