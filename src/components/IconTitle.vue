<template>
    <a class="icon-title" :href="props.link">
        <h3 >{{props.text}}</h3>
        <span class="iconify-inline" v-if="props.icon" :data-icon="props.icon"></span>
        <span class="iconify-inline" v-else data-icon="ic:baseline-keyboard-double-arrow-right"></span>
    </a>
</template>

<script setup lang="ts">

const props = defineProps<{
    text: string,
    icon?: string,
    link: string
}>()

</script>

<style lang="scss">


.icon-title {

    color: var(--text);

    h3 {
        display: inline-block;
        margin: 0;
        border-bottom: solid 2px rgba(0,0,0,0);
        &:hover {
            cursor: pointer;
            border-bottom-color: var(--text);
        }
    }

    svg {
        font-size: 2em;
    }
}

</style>