<template>
    <div class="about-preview">
        <div class="about-preview__cloak"></div>
        <div class="about-preview__more">
            <IconTitle text="En savoir plus" link="about"/>
        </div>
    </div>
</template>

<script lang="ts" setup>

    import IconTitle from './IconTitle.vue';

</script>


<style lang="scss">
    .about-preview {
        position: relative;
        width: 100%;
        height: 32em;
        background: var(--secondary);

        &__cloak {
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 25%;
            background: linear-gradient(0deg, var(--base) 0%, rgba(255, 255, 255, 0) 100%);
        }

        &__more {
            position: absolute;
            bottom: .25em;
            right: .25em;
            h3 {
                margin: 0;
            }
        }
        
    }
</style>