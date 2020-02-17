<template>
    <div class="container">
        <div class="heading">
            <h1>Cars</h1>
        </div>
        <div class="main row">
            <div class="col-sm-6 line">
                <form>
                    <div class="form-group">
                        <label>Kenteken</label>
                        <input type="text" class="form-control text-uppercase" placeholder="X-999-XX" v-model="local.plate">
                    </div>
                    <div class="form-group">
                        <label>Merk</label>
                        <input type="text" class="form-control" placeholder="Name" v-model="local.brand">
                    </div>
                    <div class="form-group">
                        <label>Kleur</label>
                        <input type="text" class="form-control" placeholder="Colorful" v-model="local.color">
                    </div>
                    <div class="form-group">
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" :checked="local.garage" @change="local.garage = !local.garage">
                            <label class="form-check-label">In garage</label>
                        </div>
                    </div>
                    <div class="form-group">
                        <button class="btn btn-primary" @click.prevent="save">Save car</button>
                    </div>
                </form>
            </div>
            <div class="col-sm-6">
                <transition-group name="card-deck">
                        <car-component v-for="car in this.$store.getters.load" :key="car.id" :id="car.id"></car-component>
                </transition-group>
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
            // local: {
            //     plate: '',
            //     brand: '',
            //     color: '',
            //     garage: false
            // }
        }
    },
    methods: {
        // save() {
        //     this.$store.commit('add', this.local)
        //     this.reset()

        // },
        // reset() {
        //     const reset = {
        //         plate: '',
        //         brand: '',
        //         color: '',
        //         garage: false
        //     }
        //     Object.assign(this.local, reset)
        // }
    }
}
</script>

<style scoped>
    /* .heading {
        padding: 2rem 0;
    }
    .line {
        border-right: 1px solid gray;
    } */
</style>
