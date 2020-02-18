<template>
    <tr class="d-flex">
        <template v-if="!editing">
            <td class="col-3">
                <router-link to="/cars">{{ garage.name }}</router-link>
            </td>
            <td class="col-3">{{ garage.brand }}</td>
            <td class="col-3">{{ garage.postal_country }}</td>
            <td class="col-1 id-number">{{ garage.id }}</td>
            <td class="col-1"><button class="btn btn-primary" @click.prevent="editing = !editing">Edit</button></td>
            <td class="col-1"><button class="btn btn-danger" @click.prevent="deleteGarage">Delete</button></td>
        </template>
        <template v-else>
            <td class="col-3"><input type="text" class="form-control form-control-sm" v-model="garage.name"></td>
            <td class="col-3"><input type="text" class="form-control form-control-sm" v-model="garage.brand"></td>
            <td class="col-3"><input type="text" class="form-control form-control-sm" v-model="garage.postal_country"></td>
            <td class="col-1 id-number">{{ garage.id }}</td>
            <td class="col-1"><button class="btn btn-success" @click.prevent="save">Save</button></td>
            <td class="col-1"><button class="btn btn-danger" @click.prevent="cancel">Cancel</button></td>
        </template>
    </tr>
</template>

<script>
    export default {
        name: "garage-list-item",
        props: {
            garage: {
                type: Object,
                required: true
            }
        },
        data() {
            return {
                backup_garage: {},
                editing: false
            }
        },
        mounted() {
            this.backup_garage = Object.assign({}, this.garage)
        },
        methods: {
            deleteGarage() {
                $.ajax({
                    type: 'DELETE',
                    contentType: 'application/json',
                    url: `/garages/`,
                    data: JSON.stringify({'garage': this.garage.id})
                }).then((data) => {
                    this.$emit('change', data)
                    Object.assign(this.backup_garage, this.garage)
                })
            },
            save() {
                $.ajax({
					type: this.garage.id ? 'PUT' : 'POST',
					url: `/garages/`,
					contentType: 'application/json',
                    data: JSON.stringify(this.garage),
					timeout: 2000
				}).then((data) => {
                    this.$emit('change', data)
                    Object.assign(this.backup_garage, this.garage)
                })
                this.editing = !this.editing
            },
            cancel() {
                Object.assign(this.garage, this.backup_garage)
                this.editing = !this.editing
            }
        }
    }
</script>

<style scoped></style>