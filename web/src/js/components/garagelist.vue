<template>
	<div>
		<nav class="navbar navbar-light bg-light">
			<ul class="navbar-nav">
				<li class="nav-item">
					<router-link to="/" tag="a" class="nav-link">&larr; Back to Home</router-link>
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
    import GarageListItem from "./garage-list-item"
	import NewGarage from "./new-garage"

	export default {
		name: 'garage-list',
		components: {
			'new-garage': NewGarage,
			'garage-list-item': GarageListItem
		},
		data() {
			return {
				garageList: []
			}
		},
		methods: {
			load() {
				$.ajax({
					type: 'GET',
					url: `/garages/`,
					contentType: 'application/json',
					timeout: 60000
				}).then((data) => {
					this.garageList = data
				})
			}
		},
		created() {
			this.load();
		}
	}

</script>

<style scoped></style>
