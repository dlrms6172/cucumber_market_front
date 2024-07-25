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
    },
    {
        path: '/company',
        name: 'company',
        component: () => import("../views/CompanyView.vue"),
    },
    
    {
        path: '/culture',
        name: 'culture',
        component: () => import("../views/CultureView.vue"),
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    scrollBehavior(){
        return { top: 0 }
        
    },
});

export default router
