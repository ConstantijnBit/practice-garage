<template>
    <div>
		<!-- <nav class="navbar navbar-light bg-light">
			<span class="navbar-brand">Practice Garage</span>
		</nav>
        <span class="spacer"></span>
        <div class="row">
            <div class="col-sm-12 text-center">
                <h1>Home</h1>
                <h2>{{ this.$store.state.msg }}</h2>
                <span class="spacer"></span>
                <router-link to="/garages" tag="button" class="btn btn-primary">Start Garage</router-link>
            </div>
        </div> -->
        <div class="row">
            <div class="col-sm-12 text-center">
                <h1>Home</h1>
                <h2>{{ this.$store.state.msg }}</h2>
                <span class="spacer"></span>
                <router-link to="/garages" tag="button" class="btn btn-primary">Start Garage</router-link>
            </div>
        </div>
	</div>
</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style scoped></style>
