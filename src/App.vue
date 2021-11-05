
<template>
  Hello {{word}}
</template>

<script setup lang="ts">

  import { ref } from 'vue'

  const word = ref('world')

</script>

<style lang="scss">

#app {
  font-family: Roboto, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

</style>
