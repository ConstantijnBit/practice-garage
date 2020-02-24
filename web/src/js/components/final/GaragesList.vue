<template>
    <tr class="d-flex">
        <th class="col-3 cell-overflow">{{ garage.name }}</th>
        <td class="col-3 cell-overflow">{{ garage.specialty }}</td>
        <td class="col-3 cell-overflow">{{ garage.contact.postal.address }}, {{ garage.contact.postal.code }}, {{ garage.contact.postal.city }}, {{ garage.contact.postal.country }}</td>
        <td class="col-3 d-flex justify-content-end">
            <router-link :to="{ name: 'garages-detail', params: { garage_id: garage.name } }" class="card-link text-info">View Details</router-link>
            <a href="javascript:;" class="card-link text-danger">Delete</a>
        </td>
    </tr>
</template>

<script>
export default {
    props: {
        garage: {
            type: Object,
            required: true
        }
    }
}
</script>
