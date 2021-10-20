<template>
    <v-main-wrapper />
</template>

<script>
import vMainWrapper from './components/v-main-wrapper'

export default {
  name: 'App',
  components: {
      vMainWrapper
  }
}
</script>

<style lang="scss">
#app {
  font-family: $fontFamily;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
