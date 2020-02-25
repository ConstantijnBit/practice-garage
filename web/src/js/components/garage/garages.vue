<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-12 text-center">
                <h1>Garages</h1>
            </div>
        </div>
        <span class="spacer"></span>
        <form>
            <div class="form-row align-items-center">
                <div class="col">
                    <input type="text" class="form-control" placeholder="Garage name" v-model="new_garage.name">
                </div>
                <div class="col">
                    <input type="text" class="form-control" placeholder="Brand" v-model="new_garage.brand">
                </div>
                <div class="col">
                    <input type="text" class="form-control" placeholder="Country" v-model="new_garage.postal_country">
                </div>
                <div class="col-auto">
                    <button class="btn btn-primary" @click.prevent="add_garage">Add New Garage</button>
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
                    <th class="col-6" scope="col">ID Number</th>
                </tr>
            </thead>
            <tbody>
                <template v-if="!empty_list">
                    <garages-list v-for="garage in garage_list" :key="garage.id" :garage="garage" @change="garage_list = $event"></garages-list>
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
import garages_list from './garages-list'

export default {
    data() {
        return {
            garage_list: [],
            new_garage: {
                name: '',
                brand: '',
                postal_country: ''
            }
        }
    },
    components: {
        'garages-list': garages_list
    },
    computed: {
        empty_list() {
            return Object.keys(this.garage_list).length === 0
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
                this.garage_list = data
            })
        },
        add_garage() {
            $.ajax({
                type: 'POST',
                url: '/garages/',
                contentType: 'application/json',
                data: JSON.stringify(this.new_garage),
                timeout: 2000
            }).then(data => {
                Object.assign(this.garage_list, data)
                this.reset_form()
            })
        },
        reset_form() {
            const reset = {
                name: '',
                brand: '',
                postal_country: ''
            }
            Object.assign(this.new_garage, reset)
        }
    },
    created() {
        this.load()
    }
}
</script>
