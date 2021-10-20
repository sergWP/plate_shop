<template>
    <div class="v-catalog-item"
         v-if="product_data.available"
    >
        <img
            :src="require(`../assets/images/${product_data.image}`)"
            alt="Купить {{product_data.name}}"
        />
        <p class="text-lg">{{product_data.name}}</p>
        <p class="text-base">Price: {{product_data.price}} UAH</p>
        <button
                class="text-base"
                @click="sendDataToParent"
        >Add to cart</button>
    </div>
</template>

<script>
    export default {
        name: "v-catalog-item",
        props: {
            product_data: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        data() {
            return {}
        },
        methods: {
            sendDataToParent() {
                this.$emit(
                    'sendArticle',
                    this.product_data.article
                )
            }
        }
    }
</script>

<style scoped>
    .v-catalog-item {
        width: 33%;
        border: 1px solid #000;
    }
</style>