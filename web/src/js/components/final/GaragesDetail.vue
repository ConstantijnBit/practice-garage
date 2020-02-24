<template>
    <div>
        {{ garage_id }}
    </div>
</template>

<script>
export default {
    props: {
        garage_id: {
            type: String,
            required: true
        }
    }
}
</script>
