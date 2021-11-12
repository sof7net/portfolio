<template>

    <AboutPreview />

    <div class="projects-preview">
        <h2>Some of my work</h2>
        <ProjectPreview v-for="project, index in projects" :key="project.title" :data="project" :reverse="index % 2 == 0"/>
        <div style="text-align: right;">
            <IconTitle text="ALL OF MY WORK" link="/projects" />
        </div>
    </div>

    <h2>Improving this website</h2>

    <TodoList />

</template>

<script setup lang="ts">

    import AboutPreview from '../components/AboutPreview.vue';
    import ProjectPreview from '../components/ProjectPreview.vue';
    import IconTitle from '../components/IconTitle.vue';
    import TodoList from '../components/TodoList.vue';

    let projects = [
        {
            title: 'stuff',
            description: 'some more stuff',
            mediaUrl: '',
            projectUrl: ''
        },
        {
            title: 'stuff',
            description: 'some more stuff',
            mediaUrl: '',
            projectUrl: ''
        }
    ] 

</script>

<style lang="scss">


</style>