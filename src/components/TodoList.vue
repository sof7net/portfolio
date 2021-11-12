<template>
    <div class="todo-list">
        <div class="todo-list__actions">
            <label for="todo-list__show-todo">A faire</label>
            <input type="checkbox" name="todo-list__show-todo" v-model="showTodo">

            <label for="todo-list__show-done">Complétés</label>
            <input type="checkbox" name="todo-list__show-done"  v-model="showDone">

            <select name="todo-list__order-by" id="">
                <option value="">Date d'ajout</option>
            </select>
        </div>
        <div class="todo-list__task" v-for="task in getTasks">
            <h4>{{task.title}}</h4>
            <span>Ajouté le {{formatDate(task.created)}}</span>
            <span v-if="task.completed">, complété le {{formatDate(task.completed)}}</span>
            <div v-if="task.tags.length > 0" class="todo-list__task__tags">
                <span v-for="tag in task.tags" :key="task.title+tag" :class="tag">{{tagNames[tag] || tag}}</span>
            </div>
            <p>{{task.description}}</p>
        </div>
    </div>
</template>

<script setup lang="ts">

    import { computed, ref } from 'vue';

    let showTodo = ref(true);
    let showDone = ref(false);

    const tagNames : any = {
        tech: 'Technology',
        backend: 'Back-end'
    }

    interface validTask {
        title: string;
        tags: string[];
        description: string;
        created: Date;
        completed?: Date;
    }

    const formatDate = (date: Date) => {
        return `${date.getDay()}/${date.getMonth()}/${date.getFullYear()} à ${date.getHours()}H${date.getMinutes()}`
    }

    const todoList: validTask[] = [
        {
            title: 'Default title',
            tags : ['design', 'tech', 'backend'],
            description: 'Dolor deserunt excepteur eiusmod dolore aliqua. Lorem minim ullamco pariatur officia magna commodo ullamco. \
            Non excepteur id adipisicing laboris tempor eiusmod veniam nostrud. Nisi deserunt deserunt excepteur velit Lorem anim quis. \
            Dolore enim ullamco ex eiusmod proident minim incididunt.',
            created: new Date()
        },
    ]

    const getTasks = computed(() => {
        return todoList.filter(task => (showTodo.value && !task.completed) || (showDone.value && task.completed))
    })

</script>

<style lang="scss">

    .todo-list {

        margin-bottom: 3em;

        &__actions {
            display: flex;
            align-items: center;
            * {
                margin-left: 1em;
            }

            input {
                margin-right: 2em;
            }

            select {
                color: var(--text);
                text-transform: uppercase;
                margin-left: auto;
            }
        }

        &__task {
            // border: solid 2px rgba(black, .15);
            margin: 2em 0;
            padding: 1em;
            // border-radius: 2em;
            background: var(--secondary);

            &__tags {
                display: flex;
                font-size: 0.75em;
                font-weight: bold;
                margin: 0.5em 0;
                text-transform: uppercase;
                user-select: none;

                span {
                    margin-right: 0.35em;
                    padding: 0.2em 0.5em;
                    border-radius: 0.75em;
                    &.design {
                        background: rgb(255, 144, 144);
                        color: darken(rgb(255, 144, 144), 50%);
                    }
                    &.tech {
                        background: rgb(108, 255, 132);
                        color: darken(rgb(108, 255, 132), 50%);
                    }
                    &.backend {
                        background: rgb(108, 172, 255);
                        color: darken(rgb(108, 172, 255), 50%);
                    }
                }
            }

            h4 {
                margin: 0.5em 0;
                text-transform: uppercase;
                font-weight: normal;
            }

            span {
                opacity: 0.75
            }

            p {
                font-weight: 300;
            }
        }


    }

</style>