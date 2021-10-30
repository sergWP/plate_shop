<template>
    <div class="v-cart-item flex justify-between">
        <img
            :src="require(`../assets/images/${cart_item_data.image}`)"
            alt="{{cart_item_data.name}}"
        />
        <div class="v-cart-item__info">
            <div class="v-cart-item__title">{{cart_item_data.name}}</div>
            <div class="v-cart-item__price">{{cart_item_data.price}}</div>
            <div class="v-cart-item__article">{{cart_item_data.article}}</div>
        </div>
        <div class="v-cart-item__quantity"></div>
        <button>Delete</button>
    </div>
</template>

<script>
    export default {
        name: "v-cart-item",
        props: {
            cart_item_data: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        mounted() {
            //this.$set(this.cart_item_data, 'quantity', 1)
        }
    }
</script>

<style lang="scss" scoped>

</style>