<template>
    <ul>
        <li><router-link to="/">
            <span class="iconify" data-icon="ant-design:home-filled"></span>
        </router-link></li>
        <li><router-link to="/about">
            <span class="iconify" data-icon="ant-design:question-circle-filled"></span>
        </router-link></li>
        <li><router-link to="/projects">
            <span class="iconify" data-icon="bx:bx-code-alt"></span>
        </router-link></li>
        <li><router-link to="/contact">
            <span class="iconify" data-icon="bpmn:send"></span>
        </router-link></li>
    </ul>
</template>


<style lang="scss" scoped>

    ul {
        list-style-type: none;
        position: absolute;
        left: 1%;
        top: 50%;
        transform: translateY(-50%);
        margin: 0;
        padding: 0;

        li {
            margin-bottom: 0.25em;
            a {
                color: var(--text);
                font-size: 2.75em;
                opacity: 0.2;
                &.router-link-active {
                    opacity: 1;
                }
            }
        }
    }

</style>