<template>
    <v-header />
    <v-hero />

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
    import vCatalog from './v-catalog'

    export default {
        name: "v-main-wrapper",
        components: {
            vHeader,
            vHero,
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
            console.log('Yeeep!')
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