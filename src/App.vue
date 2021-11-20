
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
  --light-secondary: #e4e4e4;
  --light-contrast: rgba(255,255,255, 0.35);
  --light-project-1: #FFDADA;
  --light-project-2: #DAE0FF;


  --dark-base: #161616;
  --dark-text: #d8d8d8;
  --dark-secondary: #272727;
  --dark-contrast: #515151;
  --dark-project-1: #491D1D;
  --dark-project-2: #1D2C49;
}

body {
  font-family: Roboto, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  margin: 0;

  &.light {
    --base: var(--light-base);
    --text: var(--light-text);
    --secondary: var(--light-secondary);
    --contrast: var(--light-contrast);
    --project-1: var(--light-project-1);
    --project-2: var(--light-project-2);
  }

  &.dark {
    --base: var(--dark-base);
    --text: var(--dark-text);
    --secondary: var(--dark-secondary);
    --contrast: var(--dark-contrast);
    --project-1: var(--dark-project-1);
    --project-2: var(--dark-project-2);
  }

  --fancy-color: #ff9292;

  color: var(--text);
  background: var(--base);
  --link-color:#3366BB;

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
  font-weight: 300;
  // text-align: center;
  p {
    text-align: left;
  }
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


.fancy {
  position: relative;
  &::after {
    content: '';
    position: absolute;
    width: 87.5%;
    bottom: 10%;
    right: -5%;
    height: 22.5%;
    background: var(--fancy-color);
    z-index: -1;
    opacity: 0.65;
  }
}

@mixin fancy {
  position: relative;
  &::after {
    content: '';
    position: absolute;
    width: 87.5%;
    bottom: 10%;
    right: -5%;
    height: 22.5%;
    background: var(--fancy-color);
    z-index: -1;
    opacity: 0.65;
  }
}


h2,h3,h4 {
  font-family: 'IBM Plex Sans';
}

h2 {
  @include fancy;
  letter-spacing: 0.1em;
  font-weight: 200;
  text-transform: uppercase;
  font-size: 2.5em;
  margin-top: 4em;
  margin-bottom: 2em;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);
}

h3 {
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

select {
  background: none;
  border: none;
  font-family: 'IBM Plex Sans';
  text-transform: uppercase;
  outline: none;
  padding: 0.25em;
}

input[type=checkbox] {
  cursor: pointer;
}

</style>
