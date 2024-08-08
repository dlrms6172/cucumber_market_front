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

    {
        path: '/login',
        name: 'login',
        component: () => import("../views/LoginView.vue"),
    },

    {
        path: '/usedtrade',
        name: 'usedtrade',
        component: () => import("../views/UsedTradeView.vue")
    },
    {
        path: '/partjob',
        name: 'partjob',
        component: () => import("../views/PartJobView.vue")
    },
    {
        path: '/realestate',
        name: 'realestate',
        component: () => import("../views/RealEstateView.vue")
    },
    {
        path: '/usedcardeal',
        name: 'usedcardeal',
        component: () => import("../views/UsedCarDealView.vue")
    },
    {
        path: '/neighborcom',
        name: 'neighborcom',
        component: () => import("../views/NeighborComView.vue")
    },
    {
        path: '/service',
        name: 'service',
        component: () => import("../views/ServiceView.vue")
    },

    {
        path: '/blog',
        name: 'blog',
        component: () => import("../views/BlogView.vue")
    },
    {
        path: '/business',
        name: 'business',
        component: () => import("../views/BusinessView.vue")
    }

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    scrollBehavior(){
        return { top: 0 }

    },
});

export default router
