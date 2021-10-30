<template>
    <v-sidebar />
    <div class="v-catalog flex flex-wrap flex-auto">
        <v-catalog-item
            v-for="product in PRODUCTS"
            :key="product.article"
            v-bind:product_data="product"
            @sendArticle="showChild"
        />
    </div>
</template>

<script>
    import vCatalogItem from './v-catalog-item'
    import { mapActions, mapGetters } from 'vuex'

    import vSidebar from './v-sidebar'
    export default {
        name: "v-catalog",
        components: {
            vCatalogItem,
            vSidebar
        },
        data() {
            return {

            }
        },
        computed: {
            ...mapGetters([
                'PRODUCTS'
            ])
        },
        methods: {
            ...mapActions([
                'GET_PRODUCTS_FROM_API'
            ]),
            showChild(data) {
                console.log(data)
            }
        },
        mounted() {
            this.GET_PRODUCTS_FROM_API()
                .then((response) => {
                    if(response.data) {
                        console.log('Data ready');
                    }
                });
        }
    }
</script>

<style scoped>
    .v-catalog {
        background-color: #bbb;
    }
</style>