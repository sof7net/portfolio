<template>

    <AboutPreview />

    <div class="projects-preview">
        <h2>quelques uns de mes projets</h2>
        <ProjectPreview v-for="project, index in projects" :key="project.title" :data="project" :reverse="index % 2 == 0"/>
        <div style="text-align: right;">
            <IconTitle text="Tout mon travail" link="/projects" />
        </div>
    </div>

    <h2>Améliorer mon portfolio</h2>

    <TodoList />

</template>

<script setup lang="ts">

    import AboutPreview from '../components/AboutPreview.vue';
    import ProjectPreview from '../components/ProjectPreview.vue';
    import IconTitle from '../components/IconTitle.vue';
    import TodoList from '../components/TodoList.vue';

    import projects from '../dummy/projects.json';

</script>

<style lang="scss">


</style>