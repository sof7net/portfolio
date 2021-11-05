
<template>

  <Header />

  <Navbar />
  <ThemeSwitcher />
  <FloatButton />
  
  <router-view></router-view>

  <Footer />

</template>

<script setup lang="ts">

  import Header from './layouts/Header.vue'
  import Footer from './layouts/Footer.vue'
  import Navbar from './layouts/Navbar.vue'
  import ThemeSwitcher from './layouts/ThemeSwitcher.vue'
  import FloatButton from './layouts/FloatButton.vue'

</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@100;200;300;400&family=Roboto:wght@100;300;400&display=swap');

body {
  font-family: Roboto, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  margin: 0;

  &.light {
    $bg-color: #F1F1F1;
    background: $bg-color;
  }

  &.dark {
    $bg-color: #161616;
    background: $bg-color;
  }

}

#app {
  text-align: center;
  width: 60%;
  margin-left: 20%;
}

</style>
