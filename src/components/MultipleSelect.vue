<template>
    <div class="select-multiple" @mouseenter="expand=true" @mouseleave="expand=false">
        <div class="select-multiple__options">
            <div class="select-multiple__title">
                {{title}}
                <span class="iconify-inline" data-icon="bx:bxs-down-arrow"></span>
            </div>
            <div class="select-multiple__options-option" v-for="label, option in options" v-show="expand" @click="update(option)" :class="{checked: checked.includes(option)}">
                <span class="iconify-inline select-multiple__options-option-icon" data-icon="bi:check-lg"></span>
                <span>{{label}}</span>
            </div>
        </div>
    </div>
    <div style="margin-bottom: 4em;"></div>
</template>

<script lang="ts" setup>

    import { ref } from 'vue';

    const props = defineProps<{
        title: string;
        options: Record<string,string>;
        checked?: string[];
    }>()

    let checked = ref<string[]>([]);

    if (props.checked) {
        props.checked.forEach(el => checked.value.push(el))
    } 

    let expand = ref(false);

    const emit = defineEmits(['update'])

    const update = (option: string) => {
        if (checked.value.includes(option)) {
            checked.value.splice(checked.value.indexOf(option), 1)
        } else { 
            checked.value.push(option)
        }
        emit('update', checked.value)
    }

</script>

<style lang="scss">

    .select-multiple {
        
        &__title {
            cursor: pointer;
            svg {
                margin-left: 1em;
            }
        }

        &__options {
            position: absolute;
            background: var(--base);
            border: solid 1px var(--text);

            div {
                padding: 0.5em 1em;
            }

            &-option {
                display: grid;
                grid-template-columns: 2em auto;
                transition: background .3s ease;
                &:hover {
                    cursor: pointer;
                    background: var(--secondary);
                }
                border-top: solid 1px var(--secondary);

                &.checked svg {
                    opacity: 1;
                }
                
                svg {
                    opacity: 0;
                    margin-right: 1em;
                    transition: opacity .1s ease-in;
                }
            }
        }

    }

</style>