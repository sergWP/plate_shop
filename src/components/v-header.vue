<template>
    <header class="v-header fixed w-full bg-transparency py-10 z-50">
        <div class="header-wrapper v-container relative flex justify-between pl-14 pr-14">
            <div class="header-logo relative">
                <a class="font-bold text-white" href="/">
                    <svg width="32" height="36" viewBox="0 0 32 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.5 1.44338C15.047 0.550211 16.953 0.550212 18.5 1.44338L29.0885 7.55662C30.6355 8.44979 31.5885 10.1004 31.5885 11.8868V24.1132C31.5885 25.8996 30.6355 27.5502 29.0885 28.4434L18.5 34.5566C16.953 35.4498 15.047 35.4498 13.5 34.5566L2.91154 28.4434C1.36454 27.5502 0.411543 25.8996 0.411543 24.1132V11.8868C0.411543 10.1004 1.36454 8.44979 2.91154 7.55662L13.5 1.44338Z" fill="#e31e27"/>
                    </svg>
                    <span class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">M</span>
                </a>
            </div>
            <v-cart />
        </div>
    </header>
</template>

<script>
    import vCart from './v-cart'

    export default {
        name: "v-header",
        components: {
            vCart
        }
    }
</script>

<style scoped>

</style>