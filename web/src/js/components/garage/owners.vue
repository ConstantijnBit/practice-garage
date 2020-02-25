<template>
    <div class="container">
        <form>
                <div class="form-group row">
                    <a href="javascript:;" class="col-auto col-form-label" @click.prevent="fn_GoBack">&larr; Go Back</a>
                </div>
                <div class="form-group row">
                    <h3>Car Information</h3>
                </div>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">License Plate</label>
                    <div class="col-sm-3">
                        <input type="text" class="form-control-plaintext" value="License Plate" readonly>
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Brand</label>
                    <div class="col-sm-3">
                        <input type="text" class="form-control-plaintext" value="Brand" readonly>
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Color</label>
                    <div class="col-sm-3">
                        <input type="text" class="form-control-plaintext" value="Color" readonly>
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">In Storage</label>
                    <div class="col-sm-3">
                        <input type="text" class="form-control-plaintext" value="In Storage" readonly>
                    </div>
                </div>
                <span class="spacer"></span>
                <div class="form-group row">
                    <h3>Owner Information</h3>
                </div>
            <template v-if="!var_Editing">
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Name</label>
                    <div class="col-sm-3">
                        <input type="text" class="form-control-plaintext" value="Name" readonly>
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Phone</label>
                    <div class="col-sm-3">
                        <input type="text" class="form-control-plaintext" value="Phone Number" readonly>
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Email</label>
                    <div class="col-sm-3">
                        <input type="text" class="form-control-plaintext" value="Email Address" readonly>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-auto col-form-label">
                        <button class="btn btn-primary" @click.prevent="var_Editing = !var_Editing">Edit</button>
                    </div>
                    <div class="col-auto col-form-label">
                        <button class="btn btn-danger">Delete</button>
                    </div>
                </div>
            </template>
            <template v-if="var_Editing">
                <!-- <div class="form-group row">
                    <a href="javascript:;" class="col-auto col-form-label" @click.prevent="fn_GoBack">&larr; Go Back</a>
                </div>
                <div class="form-group row">
                    <h3>Car Information</h3>
                </div>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">License Plate</label>
                    <div class="col-sm-3">
                        <input type="text" class="form-control" value="License Plate">
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Brand</label>
                    <div class="col-sm-3">
                        <input type="text" class="form-control" value="Brand">
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Color</label>
                    <div class="col-sm-3">
                        <input type="text" class="form-control" value="Color">
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">In Storage</label>
                    <div class="col-sm-3">
                        <input type="text" class="form-control" value="In Storage">
                    </div>
                </div>
                <span class="spacer"></span>
                <div class="form-group row">
                    <h3>Owner Information</h3>
                </div> -->
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Name</label>
                    <div class="col-sm-3">
                        <input type="text" class="form-control" value="Name">
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Phone</label>
                    <div class="col-sm-3">
                        <input type="text" class="form-control" value="Phone Number">
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Email</label>
                    <div class="col-sm-3">
                        <input type="text" class="form-control" value="Email Address">
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-auto col-form-label">
                        <button class="btn btn-primary">Save</button>
                    </div>
                    <div class="col-auto col-form-label">
                        <button class="btn btn-danger" @click.prevent="var_Editing = !var_Editing">Cancel</button>
                    </div>
                </div>
            </template>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            var_Editing: false
        }
    },
    methods: {
        fn_GoBack() {
            this.$router.go(-1)
        }
    }
}
</script>