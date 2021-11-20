import { createRouter, createWebHistory } from 'vue-router'

import Home from './views/Home.vue'
import About from './views/About.vue'
import Projects from './views/Projects.vue'
import Contact from './views/Contact.vue'

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home,
            alias: ['/home', '/index']
        },
        {
            path: '/about',
            component: About
        },
        {
            path: '/projects',
            component: Projects
        },
        {
            path: '/contact',
            component: Contact
        },
        
    ],
    scrollBehavior (to, from, savedPosition) {
        return { left: 0, top: 0 , behavior: 'smooth'}
      }
})