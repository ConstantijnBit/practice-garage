<template>
    <tr class="d-flex">
        <template v-if="!editing">
            <td class="col-2"><router-link :to="{ name: 'garage', params: { name: garage.name }, query: { id: garage.id } }">{{ garage.name }}</router-link></td>
            <td class="col-2">{{ garage.brand }}</td>
            <td class="col-2">{{ garage.postal_country }}</td>
            <td class="col-4 id-number">{{ garage.id }}</td>
            <td class="col-1"><button class="btn btn-primary" @click="start_edit(garage)">Edit</button></td>
            <td class="col-1"><button class="btn btn-danger" @click="delete_garage(garage)">Delete</button></td>
        </template>
        <template v-else>
            <td class="col-2"><input type="text" class="form-control form-control-sm" v-model="garage.name"></td>
            <td class="col-2"><input type="text" class="form-control form-control-sm" v-model="garage.brand"></td>
            <td class="col-2"><input type="text" class="form-control form-control-sm" v-model="garage.postal_country"></td>
            <td class="col-4 id-number">{{ garage.id }}</td>
            <td class="col-1"><button class="btn btn-primary" @click="save_garage(garage)">Save</button></td>
            <td class="col-1"><button class="btn btn-danger" @click="cancel_edit(garage)">Cancel</button></td>
        </template>
    </tr>
</template>

<script>
export default {
    props: {
        garage: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            editing: false,
            backup_garage: {}
        }
    },
    methods: {
        load() {
            $.ajax({
                type: 'GET',
                url: '/garages/',
                contentType: 'application/json',
                timeout: 60000
            }).then((data) => {
                this.$emit('change', data)
            })
        },
        save_garage(garage) {
            $.ajax({
                type: garage.id ? 'PUT' : 'POST',
                url: '/garages/',
                contentType: 'application/json',
                data: JSON.stringify(garage),
                timeout: 2000
            }).then((data) => {
                this.editing = !this.editing
            })
            console.log('garage saved')
        },
        delete_garage(garage) {
            $.ajax({
                type: 'DELETE',
                url: '/garages/',
                contentType: 'application/json',
                data: JSON.stringify({'garage': garage.id})
            }).then((data) => {
                this.load()
            })
            console.log('garage deleted')
        },
        start_edit(garage) {
            Object.assign(this.backup_garage, garage)
            this.editing =! this.editing
            console.log('start editing garage')
        },
        cancel_edit(garage) {
            Object.assign(garage, this.backup_garage)
            this.editing =! this.editing
            console.log('cancel editing garage')
        }
    }
}
</script>
