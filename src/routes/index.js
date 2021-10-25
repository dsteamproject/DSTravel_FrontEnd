import { createWebHistory, createRouter } from "vue-router";

import Menu1 from '@/components/Menu1'
import login from '@/components/login'
import join from '@/components/join'
import search from '@/components/search'
import airline from '@/components/airline'
import car from '@/components/car'
import hotel from '@/components/hotel'
import find from '@/components/find'
import mypage from '@/components/mypage'
import vs from '@/components/vs'
import vsseoul from '@/components/vsseoul'
import findid from '@/components/id'
import findpw from '@/components/pw'

const routes = [
    { path: '/', name: "Menu1", component: Menu1 },
    { path: '/login', name: "login", component: login },
    { path: '/join', name: "join", component: join },
    { path: '/search', name: "search", component: search },
    { path: '/airline', name: "airline", component: airline },
    { path: '/mypage', name: "mypage", component: mypage },
    { path: '/car', name: "car", component: car },
    { path: '/vs', name: "vs", component: vs },
    { path: '/vsseoul', name: "vsseoul", component: vsseoul },
    { path: '/hotel', name: "hotel", component: hotel },
    {
        path: '/find', name: "find", component: find,
        children: [
            { path: '/find/id', component: findid },
            { path: '/find/pw', component: findpw }
        ]
    },

];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;
