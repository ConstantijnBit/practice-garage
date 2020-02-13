<template>
    <div class="container">
        <div class="heading">
            <h1>Cars</h1>
        </div>
        <div class="main row">
            <div class="col-sm-6 line">
                <form>
                    <div class="form-group">
                        <label for="kenteken">Kenteken</label>
                        <input type="text" id="kenteken" class="form-control text-uppercase" placeholder="X-999-XX" v-model="car.kenteken">
                    </div>
                    <div class="form-group">
                        <label for="merk">Merk</label>
                        <input type="text" id="merk" class="form-control" placeholder="Name" v-model="car.merk">
                    </div>
                    <div class="form-group">
                        <label for="kleur">Kleur</label>
                        <input type="text" id="kleur" class="form-control" placeholder="Colorful" v-model="car.kleur">
                    </div>
                    <div class="form-group">
                        <div class="form-check">
                            <input type="checkbox" value="" id="checkbox" class="form-check-input" @change="car.garage = !car.garage">
                            <label for="checkbox" class="form-check-label">In garage</label>
                        </div>
                    </div>
                    <div class="form-group">
                        <button class="btn btn-primary" @click.prevent="save">Save car</button>
                    </div>
                </form>
            </div>
            <div class="col-sm-6">
                <div v-for="(car, index) in this.$store.state.carlist" :key="car.id">
                    <car-component :index="index"></car-component>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import car from './car'

export default {
    components: {
        'car-component': car
    },
    data() {
        return {
            car: {
                kenteken: '',
                merk: '',
                kleur: '',
                garage: false
            }
        }
    },
    methods: {
        save() {
            this.$store.commit('save', this.car)
        }
    }
}
</script>

<style scoped>
    .heading {
        padding: 2rem 0;
    }
    .line {
        border-right: 1px solid gray;
    }
</style>