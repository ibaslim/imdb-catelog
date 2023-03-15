import { createRouter, createWebHistory } from "vue-router";

import mainPage from "./components/views/mainPage"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: mainPage}
    ]
})

export default router