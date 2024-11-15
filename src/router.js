import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/HomePage.vue';
import ProjectsPage from './pages/ProjectsPage.vue';
import AboutPage from './pages/AboutPage.vue';
//import PostList from './pages/PostList.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/Pagina-dei-progetti',
            name: 'progetti',
            component: ProjectsPage
        },
        {
            path: '/about',
            name: 'about',
            component: AboutPage
        },
    ]
});

export { router };