<template>
    <div :class="`about__record__card ${props.reverse ? 'reverse' : ''}`">
        <div class="about__record__card-text">
            <div>
                <h3>{{props.element.title}}</h3>
                <h4>{{props.element.subtitle}}</h4>
            </div>
            <p v-if="props.element.text">{{props.element.text}}</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt at provident necessitatibus amet placeat doloremque ratione laboriosam reprehenderit porro perspiciatis molestias, perferendis, exercitationem harum tempore odit quis est atque fugit. Nobis, aliquid fugit, dignissimos iusto amet cum autem eveniet ratione atque vero qui non quisquam omnis cupiditate ipsam quibusdam natus rem ea! Ipsum ducimus iste sit sapiente asperiores, est a et vitae. Similique aliquam magni distinctio mollitia, molestiae expedita nemo illo numquam porro, molestias rerum id consequatur, dolore voluptatibus totam veniam nihil architecto facilis quos labore temporibus iusto. Nulla, ab nisi magni eum impedit similique itaque accusantium.</p>
        </div>
        <div class="about__record__card-image">
            <img :src="`/src/assets/img/${props.element.imageLink}.svg`">
        </div>
    </div>
</template>

<script setup lang="ts">

interface validElement {
    title: String;
    subtitle: String;
    text: String;
    imageLink: String;
}

const props = defineProps<{
    element: validElement
    reverse: Boolean,
}>()
</script>

<style lang="scss">
    .about__record__card {
        display: flex;
        height: 27.5em;
        background: var(--contrast);
        background-image: linear-gradient(90deg, var(--base), var(--contrast));
        &.reverse {
            background-image: linear-gradient(-90deg, var(--base), var(--contrast));
        }
        overflow: hidden;
        h3,h4 {
            margin: 0;
        }
        border-radius: 0 25em 25em 0;

        h4 {
            font-weight: 500;
            opacity: 0.5;
            font-family: 'IBM Plex Sans';
            text-transform: uppercase;
        }

        &.reverse {
            flex-direction: row-reverse;
            h3,h4 {
                text-align: right;
            }
            border-radius: 25em 0 0 25em;
            img {
                transform: rotateY(180deg);
            }
        }

        &-text {
            width: 60%;
            padding: 1.5em;
            display: grid;
            align-content: space-evenly;
        }

        &-image {
            width: 40%;
            display: grid;
            place-items: center;
            img {
                width: 60%;
            }
        }
    }

</style>