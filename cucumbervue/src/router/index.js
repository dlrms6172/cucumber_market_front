import {createRouter, createWebHistory} from 'vue-router'
import Main from '../views/MainView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Main
    },
    {
        path: '/about',
        name: 'about',
        component: () => import("../views/AboutView.vue"),
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
