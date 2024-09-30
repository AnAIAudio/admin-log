import { createRouter, createWebHistory } from 'vue-router';
import NotFound from '@/views/NotFound.vue';
import Home from '../views/Home.vue';
// import axiosInstance, { setHeaderAuthorization } from '@/utils/axiosInstance';
//
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'LayoutMenu',
            component: Home,
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'PageNowFounded',
            component: NotFound,
        },
    ],
});

export default router;
