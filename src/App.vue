
<template>

  <router-link id="watermark" to="/">SOF7</router-link>

  <Header />

  <!-- <Navbar /> Thinking about removing it -->
  <ThemeSwitcher />
  
  <div id="content">
    <router-view></router-view>
  </div>
  <Footer />

</template>

<script setup lang="ts">

  import Header from './layouts/Header.vue'
  import Footer from './layouts/Footer.vue'
  // import Navbar from './layouts/Navbar.vue'
  import ThemeSwitcher from './layouts/ThemeSwitcher.vue'

</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@100;200;300;400&family=Roboto:wght@100;300;400&family=Montserrat&display=swap');

:root {
  --light-base: #F1F1F1;
  --light-text: #161616;
  --light-secondary: #C4C4C4;

  --dark-base: #161616;
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
  --link-color: 	#3366BB;

  transition: background .3s ease-in;
  transition: color .5s;

}

::selection {
  background: var(--secondary);
}

::moz-selection {
  background: var(--secondary);
}

#content {
  width: 55%;
  margin-left: 22.5%;
  font-weight: 100;
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

h2 {
  font-family: 'IBM Plex Sans';
  letter-spacing: 0.1em;
  font-weight: 200;
  text-align: center;
  text-transform: uppercase;
  font-size: 2.5em;
  margin: 2em;
}

h3 {
  font-family: 'IBM Plex Sans';
  font-size: 2em;
  letter-spacing: 0.15em;
  font-weight: 200;
  text-transform: uppercase;
}

ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

</style>
