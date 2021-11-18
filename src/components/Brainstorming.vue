<template>
    <div class="about__brainstorm">
        <span class="about__brainstorm-cloud" id="cloud"></span>
        <img src="../assets/img/brainstorm.svg" alt="Moi qui pense plus que je ne devrais">
    </div>
</template>

<script lang="ts" setup>

import { onMounted } from 'vue';

//@ts-ignore
import TagCloud from 'TagCloud';

const exempleItem = 'faire quelque chose';
const items : string[] = [] ;

for (let i=0; i<15; i++) {
    items.push(exempleItem)
}

onMounted(() => {
    let parent = document.querySelector('.about__brainstorm');
    let width = parent && parent.clientWidth ? parent.clientWidth / 2.5 : 300
    const options= {
        radius: width,
        direction: 90,
        keep: true
    }
    TagCloud('#cloud', items, options);
})
    

</script>


<style lang="scss">
    .about__brainstorm {
        height: 40em;
        position: relative;
        display: grid;
        place-items: center;
        overflow: hidden;
        margin: 3em;

        img {
            width: 33%;
            // opacity: .66;
        }

        &-cloud {
            position: absolute;
            z-index: -1;
        }

        .tagcloud--item {
            padding: 1em;
            border-radius: 25px;
        }
    }

</style>