<template>
    <tr class="d-flex">
        <th class="col-2 cell-overflow">{{ car.license_plate }}</th>
        <td class="col-2 cell-overflow">{{ car.brand }}</td>
        <td class="col-2 cell-overflow">{{ car.model }}</td>
        <td class="col-2 cell-overflow">{{ car.color }}</td>
        <td class="col-2 cell-overflow">{{ car.chassis_number }}</td>
        <td class="col-2 d-flex justify-content-end">
            <router-link :to="{ name: 'cars-detail', params: { car_id: car.id, car: car } }" class="card-link text-info">View Details</router-link>
            <a href="javascript:;" class="card-link text-danger">Delete</a>
        </td>
    </tr>
</template>

<script>
export default {
    props: {
        car: {
            type: Object,
            required: true
        }
    }
}
</script>
