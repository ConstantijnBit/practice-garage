<template>
    <div class="card">
        <template v-if="!editing">
            <div class="card-body">
                <h5 class="card-title">{{ carlist[index].kenteken }}</h5>
                <p class="card-subtitle text-muted">{{ carlist[index].merk }}</p>
                <p class="card-subtitle text-muted">{{ carlist[index].kleur }}</p>
                <p class="card-subtitle text-muted">In garage: {{ carlist[index].garage }}</p>
                <span></span>
                <a href="javascript:;" class="card-link" @click.prevent="editing = !editing">Edit</a>
                <a href="javascript:;" class="card-link text-danger">Delete</a>
            </div>
        </template>
        <template v-else>
            <div class="card-body">
                <form>
                    <div class="form-group">
                        <input type="text" class="form-control" v-model="update.kenteken">
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" v-model="carlist[index].merk" readonly>
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" v-model="update.kleur">
                    </div>
                    <div class="form-group form-check">
                        <input type="checkbox" class="form-check-input" id="checkbox">
                        <label class="form-check-label" for="checkbox" @change="garage = !garage">In garage</label>
                    </div>
                </form>
                <a href="javascript:;" class="card-link" @click="save">Save</a>
                <a href="javascript:;" class="card-link text-danger" @click.prevent="editing = !editing">Cancel</a>
            </div>
        </template>
    </div>
</template>

<script>
    export default {
        props: ['index'],
        data() {
            return {
                carlist: this.$store.state.carlist,
                editing: false,
                update: {
                    kenteken: '',
                    kleur: '',
                    garage: false
                }
            }
        },
        methods: {
            save() {}
        },
        mounted() {
            this.update.kenteken = this.carlist[this.index].kenteken
            this.update.kleur = this.carlist[this.index].kleur
            this.update.garage = this.carlist[this.index].garage
        }
    }
</script>

<style scoped></style>