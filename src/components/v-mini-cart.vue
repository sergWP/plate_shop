<template>
    <div class="v-cart">
        {{ CART.length }}
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "v-mini-cart",
        computed: {
            ...mapGetters([
                'CART'
            ])
        }
    }
</script>

<style scoped>

</style>