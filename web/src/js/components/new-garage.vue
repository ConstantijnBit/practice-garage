<template>
    <form>
        <div class="form-row">
            <div class="col">
                <input type="text" class="form-control" placeholder="Garage name" v-model="garage.name">
            </div>
            <div class="col">
                <input type="text" class="form-control" placeholder="Brand" v-model="garage.brand">
            </div>
            <div class="col">
                <input type="text" class="form-control" placeholder="Country" v-model="garage.postal_country">
            </div>
            <div class="col">
                <button class="btn btn-primary" @click.prevent="save">Add new garage</button>
            </div>
        </div>
    </form>
</template>

<script>
    export default {
        name: "new-garage",
        data() {
            return {
                garage: {
                    name: '',
                    brand: '',
                    postal_country: ''
                }
            }
        },
        methods: {
            save() {
                $.ajax({
                    type: 'POST',
                    url: `/garages/`,
                    contentType: 'application/json',
                    data: JSON.stringify(this.garage),
                    timeout: 2000
                }).then((data) => {
                    this.$emit('change', data)
                    this.resetForm()
                })
            },
            resetForm() {
                if (this.garage.id) {
                    Object.assign(this.myGarage, this.garage)
                } else {
                    this.myGarage = {
                        name: '',
                        brand: '',
                        postal_country: ''
                    }
                    Object.assign(this.garage, this.myGarage)
                }
            }
        }
    }
</script>

<style scoped></style>