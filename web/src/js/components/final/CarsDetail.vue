<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-12 text-center">
                <h1>{{ car.license_plate }}</h1>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-sm-12">
                <div class="row">
                    <div class="col"><a href="javascript:;" class="goback card-link text-info" @click="goback">&larr; Go Back</a></div>
                </div>
                <span class="spacer"></span>
                <div class="row">
                    <div class="col"><h3>Basic Information</h3></div>
                </div>
                <div class="row">
                    <div class="col-sm-3"><p>License Plate:</p></div>
                    <div class="col"><p>{{ car.license_plate }}</p></div>
                </div>
                <div class="row">
                    <div class="col-sm-3"><p>Brand and Model:</p></div>
                    <div class="col"><p>{{ car.brand }} {{ car.model }}</p></div>
                </div>
                <div class="row">
                    <div class="col-sm-3"><p>Color:</p></div>
                    <div class="col"><p>{{ car.color }}</p></div>
                </div>
                <div class="row">
                    <div class="col-sm-3"><p>Chassis Number:</p></div>
                    <div class="col"><p>{{ car.chassis_number }}</p></div>
                </div>
                <span class="spacer"></span>
                <div class="row">
                    <div class="col"><h3>Owner Information</h3></div>
                </div>
                <div class="row">
                    <div class="col-sm-3"><p>Name:</p></div>
                    <div class="col"><p>{{ car.contact.first_name }} {{ car.contact.last_name }}</p></div>
                </div>
                <div class="row">
                    <div class="col-sm-3"><p>Phone:</p></div>
                    <div class="col"><p>{{ car.contact.phone }}</p></div>
                </div>
                <div class="row">
                    <div class="col-sm-3"><p>Email:</p></div>
                    <div class="col"><p>{{ car.contact.email }}</p></div>
                </div>
                <div class="row">
                    <div class="col-sm-3"><p>Address:</p></div>
                    <div class="col"><p>{{ car.contact.postal.address }}</p></div>
                </div>
                <div class="row">
                    <div class="col-sm-3"><p>Postal Code:</p></div>
                    <div class="col"><p>{{ car.contact.postal.code }}</p></div>
                </div>
                <div class="row">
                    <div class="col-sm-3"><p>City:</p></div>
                    <div class="col"><p>{{ car.contact.postal.city }}</p></div>
                </div>
                <div class="row">
                    <div class="col-sm-3"><p>Country:</p></div>
                    <div class="col"><p>{{ car.contact.postal.country }}</p></div>
                </div>
                <span class="spacer"></span>
                <div class="row">
                    <div class="col-auto"><button class="btn btn-info">Edit</button></div>
                    <div class="col-auto"><button class="btn btn-danger">Delete</button></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        car_id: {
            type: Number,
            required: true
        },
        // example
        car: {
            type: Object,
            required: false
        }
    },
    methods: {
        goback() {
            this.$router.go(-1)
        }
    }
}
</script>
