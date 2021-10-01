import { createWebHistory, createRouter } from "vue-router";

import Menu1 from '@/components/Menu1'
import login from '@/components/login'

const routes = [
    { path: '/', name: "Menu1", component: Menu1 },
    { path: '/login', name: "login", component: login },

];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;
