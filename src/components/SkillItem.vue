<template>
    <div class="skill" @mouseenter="extend(true)" @mouseleave="extend(false)" :style="`max-height: ${extended ? '99em' : '5em' }`">
        <div class="skill__main">
            <img :src="skill.image" alt="">
            <div class="skill__main__wrapper">
                <span class="skill__main__title">{{skill.name}}</span>
                <span class="skill__main__type">{{label}}</span>
                <div class="skill__main__bar" :style="`width: ${skill.percent}%`"></div>
            </div>
        </div>
        <transition name="slide-down">
            <div class="skill__more" v-show="extended">
                <div class="skill__more__subs">
                    <!-- v-for subskill in skill -->
                    <div class="skill__more__subs__subskill" v-for="subskill in skill.subskills">
                        <img :src="subskill.image" alt="">
                        <div class="skill__more__subs__subskill__wrapper">
                            <span class="skill__more__subs__subskill-title">{{subskill.name}}</span>
                            <div class="skill__more__subs__subskill-bar" :style="`width: ${subskill.percent}%`"></div>
                        </div>
                        <p v-if="subskill.comment" class="skill__more__subs__subskill-comment">{{subskill.comment}} Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima quidem consectetur quisquam veritatis aliquid alias ab repudiandae incidunt doloremque repellat!</p>
                    </div>
                </div>
                <div class="skill__more__infos">
                    <span class="skill__more__infos__title">{{skill.name}}</span>
                    <div class="skill__more__infos__icons">
                        <!-- Likes -->
                        <div>
                            <span class="iconify" data-icon="ant-design:heart-outlined"></span>
                            <span>{{skill.appreciation}}/5</span>
                        </div>
                        <!-- Temps passé -->
                        <div>
                            <span class="iconify" data-icon="ant-design:hourglass-outlined"></span>
                            <span>~ {{skill.time_spent}}</span>
                        </div>
                        <!-- Maitrise -->
                        <div>
                            <span class="iconify" data-icon="bi:emoji-smile"></span>
                            <span>{{skill.level}}</span>
                        </div>
                    </div>
                    <p class="skill__more__infos__text">{{skill.comment}} Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, perferendis praesentium saepe quos quasi reprehenderit nesciunt quia excepturi veritatis repellendus aspernatur molestias, rem aut tempore? Provident fugit reprehenderit assumenda vitae impedit ipsum nemo dicta beatae esse, iusto optio quia culpa, eos a ipsa? Sit animi dolore quaerat deserunt sed cumque.</p>
                </div>
            </div>
        </transition>
    </div>
</template>

<script setup lang="ts">

import { ref } from 'vue';

let extended = ref(false);

const extend = (toggle: boolean) => {
    extended.value = toggle
}

interface SubskillInterface {
    name:string;
    image:string;
    percent: number;
    comment?: string;
}

interface SkillInterface {
    name: string;
    type: string;
    image: string;
    percent: number;
    comment: string;
    appreciation: number;
    time_spent: string;
    level: string;
    subskills: SubskillInterface[];
}

defineProps<{
    skill: SkillInterface,
    label: string,
}>()

</script>


<style lang="scss">

    .slide-down-enter, .slide-down-leave-to {
        max-height: 0;
    }

    .slide-down-enter-active, .slide-down-leave-active {
        max-height: 50em;
        transition: max-height 1s ease-in-out;
    }

    .skill {
        margin: 2.5em 0;
        overflow: hidden;
        transition: max-height 1s ease-in-out;
        padding-bottom: 1em;

        &__main {

            background: var(--base);
            display: grid;
            grid-template-columns: 6em auto;
            margin-bottom: 0.5em;

            img {
                border-radius: 100%;
                width: 90%;
                margin-right: 1em;
            }

            &__wrapper {
                display: flex;
                flex-direction: column;
                justify-content: center;
                width: 100%;
            }

            &__bar {
                margin-top: 0.25em;
                height: 1.25em;
                background: var(--secondary);
                // border-radius: 0 25px 25px 0;
            }

            &__title {
                font-size: 1.25em;
                font-family: 'IBM Plex Sans';
            }
        }

        &__more {
            display: grid;
            grid-template-columns: 6fr 4fr;
            grid-gap: 2em;
            width: 80%;
            margin-left: 10%;
            &__subs {
                width: 100%;
                &__subskill {
                    display: grid;
                    grid-template-columns: 4em auto;

                    img {
                        height: 4em;
                        width: 4em;
                    }

                    &__wrapper {
                        display: flex;
                        flex-direction: column;
                        justify-content: space-evenly;

                    }

                    &-bar {
                        margin-top: 0.125em;
                        height: 1.2em;
                        background: var(--secondary);
                    }

                    p {
                        grid-column: 1 / 3;
                    }
                }
            }

            &__infos {
                
                display: flex;
                flex-direction: column;
                align-items: center;

                &__title {
                    font-size: 1.25em;
                    font-family: 'IBM Plex Sans';
                    text-transform: uppercase;
                }

                &__icons {
                    margin: 1em 0;
                    display: grid;
                    width: 100%;
                    grid-template-columns: 1fr 1fr 1fr;

                    div {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        font-size: 1em;
                        overflow: hidden;
                        svg {
                            font-size: 1.25em;
                            margin-right: 0.25em;
                            color: var(--text);
                        }
                    }
                }

                &__text {
                    text-align: center;
                }
            }
        }
    }

</style>