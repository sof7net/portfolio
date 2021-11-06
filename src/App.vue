
<template>

  <router-link id="watermark" to="/">SOF7</router-link>

  <Header />

  <!-- <Navbar /> Thinking about removing it.. -->
  <ThemeSwitcher />
  
  <router-view></router-view>

  <Footer />

</template>

<script setup lang="ts">

  import Header from './layouts/Header.vue'
  import Footer from './layouts/Footer.vue'
  // import Navbar from './layouts/Navbar.vue'
  import ThemeSwitcher from './layouts/ThemeSwitcher.vue'

</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@100;200;300;400&family=Roboto:wght@100;300;400&display=swap');

:root {
  --light-base: #F1F1F1;
  --light-text: #222222;
  --light-secondary: #C4C4C4;

  --dark-base: #222222;
  --dark-text: #F1F1F1;
  --dark-secondary: #B2B2B2;
}

body {
  font-family: Roboto, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  margin: 0;

  &.light {
    --base: var(--light-base);
    --text: var(--light-text);
    --secondary: var(--light-secondary)
  }

  &.dark {
    --base: var(--dark-base);
    --text: var(--dark-text);
    --secondary: var(--dark-secondary)
  }

  color: var(--text);
  background: var(--base);

  transition: background .4s ease-in;
  transition: color .3s;

}

#app {
  width: 60%;
  margin-left: 20%;
}

#watermark {
  text-decoration: none;
  color: var(--text);
  font-size: 3em;
  position: fixed;
  top: 1%;
  left: 1%;
  opacity: 0.1;
  user-select: none;
}

</style>
