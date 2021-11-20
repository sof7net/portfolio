<template>
    <section id="projects">
        <div class="project" v-for="project, index in projects">
            <div class="project__header">
                <h3>{{project.title}}</h3>
                <div class="project__header--icons">
                    <a v-if="project.demo" :href="project.demo" target="blank"><span class="iconify-inline" data-icon="il:url"></span></a>
                    <a v-if="project.source" :href="project.source" target="blank"><span class="iconify-inline" data-icon="akar-icons:github-fill"></span></a>
                </div>
            </div>
            <div class="project__body" :style="`background: var(--project-${index+1});`">
                <div v-for="block in project.blocks" :class="`project__body--block ${block.media ? 'media' : 'text'} ${block.media && shouldReverse(project.title) ? 'reverse' : ''}`">
                    <p>
                        {{block.text}}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, placeat doloribus architecto vitae ex earum amet ullam eaque sequi totam, saepe, odio consequatur! Repellendus aperiam minus eligendi iste, provident laboriosam.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, placeat doloribus architecto vitae ex earum amet ullam eaque sequi totam, saepe, odio consequatur! Repellendus aperiam minus eligendi iste, provident laboriosam.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, placeat doloribus architecto vitae ex earum amet ullam eaque sequi totam, saepe, odio consequatur! Repellendus aperiam minus eligendi iste, provident laboriosam.
                    </p>
                    <div v-if="block.media"><img :src="block.media"></div>
                </div>
            </div>
            <div class="project__community">
                <div class="project__community__actions">
                    <div class="project__community__actions--icon">
                        <span class="iconify" data-icon="akar-icons:heart"></span>
                        <span>{{project.likes}}</span>
                    </div>
                    <div class="project__community__actions--icon">
                        <span class="iconify" data-icon="akar-icons:comment-add"></span>
                        <span>{{project.comments.length}}</span>
                    </div>
                    <span class="project__community__actions--button" @click="toggleComments(project.title)">{{withComments.includes(project.title) ? 'Masquer' : 'Afficher'}} les {{project.comments.length}} commentaires</span>
                </div>
                <div class="project__community__comments" v-show="withComments.includes(project.title)">
                    <div class="project__community__comments--comment" v-for="comment in project.comments">
                        <span class="project__community__comments--comment--title">Posté par {{comment.author}} le {{comment.date}}</span>
                        <div class="project__community__comments--comment--text">
                            {{comment.text}}
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, quas ea! Necessitatibus quisquam ea odit atque, repellat odio error tenetur.
                        </div>
                    </div>
                    <div class="project__community__comments--post">
                        <span class="project__community__comments--post--title">Envoyer un nouveau commentaire</span>
                        <textarea class="project__community__comments--post--textarea" placeholder="Que souhaitez-vous dire?" v-model="comment"></textarea>
                        <button class="project__community__comments--post--button" @click="sendComment"><span class="iconify" data-icon="carbon:send-alt-filled"></span>Envoyer</button>
                    </div>
                </div>
            </div>
        </div>
        <div v-show="commentSucces" id="projects__comment-send">
            <span class="iconify-inline" data-icon="akar-icons:circle-check-fill"></span>
            <span>Votre commentaire a bien été envoyé !</span>
        </div>
    </section>
</template>

<script lang="ts" setup>

    import { ref } from 'vue'
    import projects from "../dummy/projects.json"

    let lastTitle = '';
    let reverse = false;

    const shouldReverse = (title: string) => {
        if (lastTitle != title) {
            lastTitle = title
            reverse = false;
        } else {
            reverse = !reverse
        }
        return reverse
    }


    const withComments = ref<string[]>([]);
    const toggleComments = (title: string) => {
        let idx = withComments.value.indexOf(title);
        if (idx == -1) {
            withComments.value.push(title)
        } else {
            withComments.value.splice(idx, 1)
        }
    }
    
    let comment = ref<string>('');
    let commentSucces = ref<boolean>(false);
    const sendComment = () => {
        commentSucces.value = true;
        setTimeout(_ => {
            commentSucces.value = false
        }, 5000)
    }

</script>

<style lang="scss">

    #projects {
        display: grid;
        grid-gap: 5em;

        &__comment-send {
            position: fixed;
            top: 5%;
            background: var(--base);
            padding: 0.75em 2em;
            left: 50%;
            transform: translateX(-50%);
            border-radius: 50px;
            display: flex;
            align-items: center;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

            svg {
                font-size: 1.5em;
                margin-right: 1em;
            }
        }
    }

    .project {
        position: relative;

        &__header {
            display: grid;
            place-items: center;
            grid-gap: 0.5em;
            h3 {
                margin: 0;
                font-size: 2.5em;
                transform: translateY(40%);
                font-weight: 300;
            }
           &--icons {
                position: absolute;
                right: 0;
                display: flex;
                font-size: 2em;
                margin-right: 0.5em;
                svg {
                    margin-left: 0.5em;
                    color: var(--text);
                    transition: opacity .25s ease-in-out;
                    opacity: 0.75;
                    &:hover {
                        opacity: 1;
                    }
                }
           }
        }

        &__body {

            padding: 3em;

            display: grid;
            grid-gap: 3em;

            &--block {
                &.media {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    grid-gap: 1em;
                    grid-auto-flow: dense;

                    &.reverse {
                        div {
                            grid-column: 1;
                        }
                        p {
                            grid-column: 2;
                        }
                    }

                    p {
                        display: flex;
                        align-items: center;
                    }

                    div {
                        display: grid;
                        place-items: center;
                        img {
                            width: 90%;
                        }
                    }
                }

                &.text {
                    font-style: italic; // ?
                }

            }
        }

        &__community {
            &__actions {
                margin: 1em;
                display: flex;
                align-items: center;
                &--icon {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    svg {
                        font-size: 1.5em;
                        &:hover {
                            cursor: pointer;
                            transform: scale(1.05);
                        }
                    }
                    margin-right: 1em;
                    font-weight: bold;
                }
                &--button {
                    height: 100%;
                    background: var(--text);
                    color: var(--base);
                    padding: 0.5em 1em;
                    border-radius: 25px;
                    outline: none;
                    border: none;
                    transition: transform .15s ease;
                    transition: box-shadow .15s ease;
                    &:hover {
                        cursor: pointer;
                        box-shadow: 1px 1px 8px var(--text);
                    }
                }

            }

            &__comments {
                margin-top: 2em;
                display: grid;
                grid-gap: 3em;
                width: 90%;
                margin-left: 5%;
                &--comment {
                    &--title {
                        font-weight: 400;
                    }
                    &--text {
                        background: var(--contrast);
                        display: flex;
                        align-items: center;
                        min-height: 2.25em;
                        margin-top: 0.5em;
                        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                        border-radius: 10px;
                        padding: 1em;
                    }
                }

                &--post {
                    display: flex;
                    flex-direction: column;
                    &--title {
                        font-weight: 400;
                    }
                    &--button {
                        display: flex;
                        align-items: center;
                        padding: 0.5em 0.75em;
                        background: var(--secondary);
                        color: var(--text);
                        border-radius: 25px;
                        outline: none;
                        border: none;
                        font-size: 0.9em;
                        place-self: flex-end;
                        font-weight: 400;

                        &:hover {
                            cursor: pointer;
                            box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
                        }
                        
                        svg {
                            margin-right: 0.5em;
                            font-size: 1.25em;
                        }
                    }

                    textarea {
                        height: 5em;
                        padding: 1em;
                        margin: 1em 0;
                        border-radius: 10px;
                        background: var(--contrast);
                        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                        resize: none;
                        font-family: 'Roboto';
                        border: none;
                        outline: none;
                        color: var(--text);
                    }
                }
            }
        }
    }
</style>