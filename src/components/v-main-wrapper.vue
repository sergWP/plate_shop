<template>
    <v-header />
    <v-hero />
    <v-features />

    <div class="v-container p-14">
        <h1 class="text-5xl">{{title}}</h1>

        <div class="flex">
            <v-catalog />
        </div>

    </div>
</template>

<script>
    import vHeader from './v-header'
    import vHero from './v-hero'
    import vFeatures from './v-features'
    import vCatalog from './v-catalog'

    export default {
        name: "v-main-wrapper",
        components: {
            vHeader,
            vHero,
            vFeatures,
            vCatalog
        },
        props: {},
        data() {
            return {
                title: 'Main wrapper'
            }
        },
        computed: {},
        methods: {},
        watch: {},
        mounted() {
            console.log('Main wrapper')
        }
    }
</script>

<style lang="scss">
    .v-container {
        width: $container;
        max-width: 100%;
        margin: auto;
    }
    .v-flex {
        display: $flex;
        justify-content: space-between;
    }
</style>