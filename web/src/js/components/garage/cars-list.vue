<template>
    <tr class="d-flex">
        <template v-if="!editing">
            <td class="col-2"><router-link :to="{ name: 'car', params: { name: car.license_plate }, query: { id: car.id } }">{{ car.license_plate }}</router-link></td>
            <td class="col-2">{{ car.brand }}</td>
            <td class="col-2">{{ car.color }}</td>
            <td class="col-2">{{ car.storage }}</td>
            <td class="col-2 id-number">{{ car.id }}</td>
            <td class="col-1"><button class="btn btn-primary" @click="start_edit(car)">Edit</button></td>
            <td class="col-1"><button class="btn btn-danger" @click="delete_car(car)">Delete</button></td>
        </template>
        <template v-else>
            <td class="col-2"><input type="text" class="form-control form-control-sm" v-model="car.license_plate"></td>
            <td class="col-2"><input type="text" class="form-control form-control-sm" :placeholder="car.brand" readonly></td>
            <td class="col-2"><input type="text" class="form-control form-control-sm" v-model="car.color"></td>
            <td class="col-2"><input type="text" class="form-control form-control-sm" v-model="car.storage"></td>
            <td class="col-2 id-number">{{ car.id }}</td>
            <td class="col-1"><button class="btn btn-primary" @click="save_car(car)">Save</button></td>
            <td class="col-1"><button class="btn btn-danger" @click="cancel_edit(car)">Cancel</button></td>
        </template>
    </tr>
</template>

<script>
export default {
    props: {
        car: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            editing: false,
            backup_car: {}
        }
    },
    methods: {
        load() {
            $.ajax({
                type: 'GET',
                url: `/garages/${this.$route.query.id}/cars`,
                contentType: 'application/json',
                timeout: 60000
            }).then(data => {
                this.$emit('change', data)
            })
        },
        save_car(car) {
            $.ajax({
                type: car.id ? 'PUT' : 'POST',
                url: '/cars/',
                contentType: 'application/json',
                data: JSON.stringify(car),
                timeout: 2000
            }).then(data => {
                this.editing = !this.editing
            })
        },
        delete_car(car) {
            $.ajax({
                type: 'DELETE',
                url: '/cars/',
                contentType: 'application/json',
                data: JSON.stringify({'car': car.id})
            }).then(data => {
                this.load()
            })
        },
        start_edit(car) {
            Object.assign(this.backup_car, car)
            this.editing =! this.editing
        },
        cancel_edit(car) {
            Object.assign(car, this.backup_car)
            this.editing =! this.editing
        }
    }
}
</script>
