<template>
    <v-sidebar />
    <div class="v-catalog flex flex-wrap flex-auto">
        <v-catalog-item
            v-for="product in products"
            :key="product.article"
            v-bind:product_data="product"
            @sendArticle="showChild"
        />
    </div>
</template>

<script>
    import vCatalogItem from './v-catalog-item'
    import vSidebar from './v-sidebar'
    export default {
        name: "v-catalog",
        components: {
            vCatalogItem,
            vSidebar
        },
        data() {
            return {
                products: [
                    {
                        "image": "annie-spratt.png",
                        "name": "Kaktus Plants",
                        "price": 2100.234234234,
                        "article": "T1",
                        "available": true
                    },
                    {
                        "image": "galina-n.png",
                        "name": "Landak Plants",
                        "price": 3150.12312412,
                        "article": "T2",
                        "available": true
                    },
                    {
                        "image": "stephanie-harvey.png",
                        "name": "Kecubung Plants",
                        "price": 4200.51524,
                        "article": "T3",
                        "available": true
                    },
                    {
                        "image": "stephanie-harvey-v.png",
                        "name": "Kecubung Plants",
                        "price": 5300.1245512,
                        "article": "T4",
                        "available": true
                    },
                    {
                        "image": "stephanie-harvey-w.png",
                        "name": "Kecubung Plants",
                        "price": 6500.3522314,
                        "article": "T5",
                        "available": true
                    }
                ]
            }
        },
        methods: {
            showChild(data) {
                console.log(data)
            }
        }
    }
</script>

<style scoped>
    .v-catalog {
        background-color: #bbb;
    }
</style>