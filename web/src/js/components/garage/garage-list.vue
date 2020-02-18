<template>
    <tr class="d-flex">
        <template v-if="!editing">
            <td class="col-2">{{ car.license_plate }}</td>
            <td class="col-2">{{ car.brand }}</td>
            <td class="col-2">{{ car.color }}</td>
            <td class="col-2">{{ car.storage }}</td>
            <td class="col-2 id-number">{{ car.id }}</td>
            <td class="col-1"><button class="btn btn-primary" @click="start_edit(car)">Edit</button></td>
            <td class="col-1"><button class="btn btn-danger" @click="delete_car(car)">Delete</button></td>
        </template>
        <template v-else>
            <td class="col-2"><input type="text" class="form-control form-control-sm" v-model="car.license_plate"></td>
            <td class="col-2">{{ car.brand }}</td>
            <td class="col-2"><input type="text" class="form-control form-control-sm" v-model="car.color"></td>
            <td class="col-2">{{ car.storage }}</td>
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
                url: '/cars/',
                contentType: 'application/json',
                timeout: 60000
            }).then((data) => {
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
            }).then((data) => {
                this.editing = !this.editing
            })
            console.log('garage saved')
        },
        delete_garage(car) {
            $.ajax({
                type: 'DELETE',
                url: '/cars/',
                contentType: 'application/json',
                data: JSON.stringify({'car': car.id})
            }).then((data) => {
                this.load()
            })
            console.log('car deleted')
        },
        start_edit(car) {
            Object.assign(this.backup_car, car)
            this.editing =! this.editing
            console.log('start editing car')
        },
        cancel_edit(car) {
            Object.assign(car, this.backup_car)
            this.editing =! this.editing
            console.log('cancel editing car')
        }
    }
}
</script>