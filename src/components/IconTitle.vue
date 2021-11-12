<template>
    <div class="icon-title">
        <h3 @click="followLink">{{props.text}}</h3>
        <span class="iconify-inline" :data-icon="props.icon"></span>
    </div>
</template>

<script setup lang="ts">

const props = defineProps({
    text: String,
    icon: {
        type: String,
        default: 'ic:baseline-keyboard-double-arrow-right'
    },
    link: String
})

function followLink() {
    if (props.link) {
        props.link.startsWith('http://')
        ? window.open(props.link, '_blank')
        : window.open(props.link, '_blank')
    }
}

</script>

<style lang="scss" scoped>

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

</style>