<template>
    <div class="v-cart">
        <h1>Cart</h1>
        {{ CART.length }}
        <v-cart-item
            v-for="item in cart_data"
            :key="item.article"
            :cart_item_data="item"
        />
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import vCartItem from './v-cart-item';

    export default {
        name: "v-cart",
        components: {
            vCartItem
        },
        props: {
            cart_data: {
                type: Array,
                default() {
                    return [];
                }
            }
        },
        computed: {
            ...mapGetters([
                'CART'
            ])
        },
    }
</script>

<style scoped>

</style>