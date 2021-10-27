<template v-if="features.length > 0">
    <section class="v-features v-container">
        <div class="v-features__wrapper flex flex-row justify-between my-36">

            <div class="v-features__item border border-solid px-4 py-5"
                v-for="feature in features"
                 :key="feature.id"
            >
                <div class="flex">
                    <img
                        :src="require(`../assets/icons/${feature.icon}`)"
                        alt="Купить {{feature.title}}"
                    />
                    <div class="v-features__title">{{feature.title}}</div>
                </div>
                <div class="flex">
                    {{feature.description}}
                </div>
            </div>

        </div>
    </section>
</template>

<script>
    export default {
        name: "v-features",
        data: function () {
            return {
                features: [
                    {
                        id: 1,
                        'icon':'f-delivery.svg',
                        'title': 'Fast Delivery',
                        'description': "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard"
                    },
                    {
                        id: 2,
                        'icon':'f-service.svg',
                        'title': 'Great Customer Service',
                        'description': "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard"
                    },
                    {
                        id: 3,
                        'icon':'f-plant.svg',
                        'title': 'Original Plants',
                        'description': "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard"
                    },
                    {
                        id: 4,
                        'icon':'f-price.svg',
                        'title': 'Affordable Price',
                        'description': "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard"
                    }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .v-features__item {
        width: 23%;
    }
</style>