<template>
    <!-- TODO: Animer le previewMedia sur un mouseover -->
    <div class="project-preview" :style="{flexDirection: props.reverse ? 'row-reverse' : 'row'}">
        <div class="project-preview__text">
            <h3>{{data.title}}</h3>
            <a v-if="data.demo || data.demo == '' " :href="data.demo" target="blank"><span class="iconify-inline" data-icon="il:url"></span></a>
            <p>{{data.preview}}</p>
        </div>
        <div class="project-preview__media">
            <a :href="getImage(data.previewMedia)" target="blank"><img :src="getImage(data.previewMedia)" :alt="`How the ${data.title} project looks like`"></a>
        </div>
    </div>
</template>


<script setup lang="ts">

interface validData {
    title: string;
    preview: string;
    previewMedia: string;
    demo: string;
}

const props = defineProps<{
    reverse: boolean,
    data: validData
}>()

const getImage = (name: string) => {
    return new URL(`../assets/${name}`, import.meta.url).href
}

</script>


<style lang="scss">
    .project-preview {
        width: 100%;
        height: 18em;
        display: flex;
        margin-bottom: 5em;
        overflow: hidden;
        padding: 2em;

        &:hover {
            // Ajouter animation du media
        }

        &__text {
            width: 60%;
            padding-left: 1em;

            h3 {
                margin: 0.5em 0;
                display: inline-block;
            }

            a {
                color: var(--link-color)
            }

            svg {
                margin-left: 0.5em; 
                font-size: 1.5em;
            }

        }

        &__media {
            width: 40%;
            display: grid;
            place-items: center;
            a {
                display: grid;
                place-items: center;
                max-width: 75%;
                max-height: 75%;
            }
            img {
                max-width: 100%;
                max-height: 100%;
            }
        }
    }
</style>