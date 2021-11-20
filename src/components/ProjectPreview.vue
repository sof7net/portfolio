<template>
    <!-- TODO: Animer le mediaUrl sur un mouseover -->
    <div class="project-preview" :style="{flexDirection: props.reverse ? 'row-reverse' : 'row'}">
        <div class="project-preview__text">
            <h3>{{data.title}}</h3>
            <a v-if="data.projectUrl || data.projectUrl == '' " :href="data.projectUrl" target="blank"><span class="iconify-inline" data-icon="il:url"></span></a>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur minima, possimus qui nostrum officia praesentium sequi iure quam. Quaerat ea dolor, perferendis quod commodi quos omnis ab vero laborum et voluptate modi pariatur numquam ullam adipisci doloremque recusandae impedit natus, iusto voluptatem dicta, deleniti unde nobis! Reprehenderit assumenda iure ipsum labore non dolores incidunt dolorem totam esse corporis. Accusantium illo quisquam culpa ad veniam eaque dolor totam a unde natus et labore, dolores praesentium atque consequuntur ipsa quis iusto porro! Nulla inventore amet eveniet soluta cumque eos in nemo, officiis consequuntur ipsam tempore id vero consectetur a, quidem natus tempora!</p>
        </div>
        <div class="project-preview__media">
            <a :href="getImage(data.mediaUrl)" target="blank"><img :src="getImage(data.mediaUrl)" :alt="`How the ${data.title} project looks like`"></a>
        </div>
    </div>
</template>


<script setup lang="ts">

interface validData {
    title: string;
    description: string;
    mediaUrl: string;
    projectUrl: string;
}

const props = defineProps<{
    reverse: Boolean,
    data: validData
}>()

// Temporaire le temps de trouver comment host/gérer les projets
import defaultURL from '../assets/img/default_project_preview.png'

const getImage = (url: string) => {
    url = url || defaultURL
    return url
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