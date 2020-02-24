<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-12 text-center">
                <h1>Garages</h1>
            </div>
        </div>

        <span class="spacer"></span>

        <table class="table table-borderless table-hover">
            <thead class="thead-dark">
                <tr class="d-flex">
                    <th class="col-3 text-white-50" scope="col">Name</th>
                    <th class="col-3 text-white-50" scope="col">Specialty</th>
                    <th class="col-3 text-white-50" scope="col">Address</th>
                    <th class="col-3 d-flex justify-content-end"><a href="javascript:;" class="card-link text-info">+ Add New Garage</a></th>
                </tr>
            </thead>
            <tbody>
                <template v-if="this.$store.state.garages_list">
                    <garages-list v-for="garage in this.$store.state.garages_list" :key="garage.id" :garage="garage"></garages-list>
                </template>
                <template v-else>
                    <tr>
                        <td>No garages saved...</td>
                    </tr>
                </template>
            </tbody>
        </table>
    </div>
</template>

<script>
import GaragesList from './GaragesList'

export default {
    components: {
        'garages-list': GaragesList
    }
}
</script>
