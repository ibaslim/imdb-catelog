import { createRouter, createWebHistory } from "vue-router";

import mainPage from "./components/views/mainPage"
import DetailView from "./components/views/movies/DetailView"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: mainPage
        },
        {
            path: '/movies/:id',
            component: DetailView,
            props: true
        }
    ]
})

export default router