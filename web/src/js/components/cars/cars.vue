<template>
    <!-- <div class="container">
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
    </div> -->
    <div>
		<nav class="navbar navbar-light bg-light">
			<ul class="navbar-nav">
				<li class="nav-item">
					<router-link to="/garages" tag="a" class="nav-link">&larr; Back to Garages</router-link>
				</li>
			</ul>
		</nav>
		<span class="spacer"></span>
		<div class="container">
			<div class="row">
				<div class="col-sm-12 text-center">
					<h2>Garages</h2>
				</div>
			</div>
			<span class="spacer"></span>
			<div class="row justify-content-sm-center">
				<new-garage @change="garageList = $event"></new-garage>
			</div>
			<span class="spacer"></span>
			<div class="row">
				<table class="table table-borderless table-hover">
					<thead class="thead-dark">
						<tr class="d-flex">
							<th class="col-3" scope="col">Name</th>
							<th class="col-3" scope="col">Brand</th>
							<th class="col-3" scope="col">Country</th>
							<th class="col-3" scope="col">id#</th>
						</tr>
					</thead>
					<tbody v-for="item in garageList" :key="item.id">
						<garage-list-item :garage="item" @change="garageList = $event"></garage-list-item>
					</tbody>
				</table>
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
    props: {
        garage: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            local: {
                plate: '',
                brand: '',
                color: '',
                garage: false
            }
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
