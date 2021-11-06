<template>
    <div id="theme-switcher" v-show="currentTheme">
        <div v-show="currentTheme == 'dark'" @click="setTheme('light')"><span class="iconify" id="theme--light" data-icon="bi:sun-fill"></span></div>
        <div v-show="currentTheme == 'light'" @click="setTheme('dark')"><span class="iconify" id="theme--dark"  data-icon="bi:moon-stars-fill"></span></div>
    </div>
</template>


<script setup lang="ts">

import { ref } from 'vue';

let currentTheme = ref('');

const validThemes = ['light', 'dark']

function setTheme(theme: string) {
    if (!validThemes.includes(theme))
        return

    let bodyElement = document.querySelector('body');
    if (bodyElement) {
        currentTheme.value = theme
        bodyElement.className = theme
        window.localStorage['theme'] = theme
    }
}

// anon. function called when mounted
(() => {
    let windowTheme = window.localStorage['theme'];
    if (windowTheme && validThemes.includes(windowTheme)) {
        setTheme(windowTheme)
    } else {
        setTheme('light')
    }
})()

</script>

<style lang="scss">

    #theme-switcher {
        position: absolute;
        top:5%;
        right:4%;
        font-size: 2em;
        cursor: pointer;
    }

</style>