<template>
    <div class="card">
        <template v-if="!editing">
            <div class="card-body">
                <h5 class="card-title">{{ local.plate }}</h5>
                <p class="card-subtitle text-muted">{{ local.brand }}</p>
                <p class="card-subtitle text-muted">{{ local.color }}</p>
                <p class="card-subtitle text-muted">In garage: {{ local.garage }}</p>
                <span></span>
                <a href="javascript:;" class="card-link" @click.prevent="edit">Edit</a>
                <a href="javascript:;" class="card-link text-danger" @click.prevent="remove">Delete</a>
            </div>
        </template>
        <template v-else>
            <div class="card-body">
                <form>
                    <div class="form-group">
                        <input type="text" class="form-control" v-model="local.plate">
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" v-model="local.brand" readonly>
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" v-model="local.color">
                    </div>
                    <div class="form-group form-check">
                        <input type="checkbox" class="form-check-input" :checked="local.garage" @change="local.garage = !local.garage">
                        <label class="form-check-label">In garage</label>
                    </div>
                </form>
                <a href="javascript:;" class="card-link" @click="update">Update</a>
                <a href="javascript:;" class="card-link text-danger" @click.prevent="cancel">Cancel</a>
            </div>
        </template>
    </div>
</template>

<script>
export default {
    props: ['id'],
    data() {
        return {
            local: this.$store.getters.loadID(this.id),
            editing: false,
            quicksave: {}
        }
    },
    methods: {
        update() {
            this.$store.commit('update', this.local, this.id)
            this.quicksave = {}
            this.editing = !this.editing
        },
        edit() {
            Object.assign(this.quicksave, this.local)
            this.editing = !this.editing
        },
        cancel() {
            Object.assign(this.local, this.quicksave)
            this.quicksave = {}
            this.editing = !this.editing
        },
        remove() {
            this.$store.commit('remove', this.id)
        }
    }
}
</script>

<style scoped></style>
