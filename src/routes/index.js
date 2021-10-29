import { createWebHistory, createRouter } from "vue-router";

import Menu1 from '@/components/Menu1'
import login from '@/components/login'
import join from '@/components/join'
import search from '@/components/search'
import airline from '@/components/airline'
import car from '@/components/car'
import hotel from '@/components/hotel'
import find from '@/components/find'
import board from '@/components/board'
import boardinfo from '@/components/info'
import boardfree from '@/components/free'
import boardreview from '@/components/review'
import boardque from '@/components/que'

import vs from '@/components/vs'
import vsseoul from '@/components/vsseoul'
import findid from '@/components/id'
import findpw from '@/components/pw'
import freewrite from '@/components/freewrite'
import freecontent from '@/components/freecontent'
import freechange from '@/components/freechange'
import mypage from '@/components/mypage'
import mypagemypw from '@/components/mypw'
import mypagemyinfo from '@/components/myinfo'
import mypagemyboard from '@/components/myboard'
import mypagemylike from '@/components/mylike'
import mypagemymap from '@/components/mymap'
import mypagemydel from '@/components/mydel'
import myho from '@/components/mmho'
import mytr from '@/components/mmtr'

const routes = [
    { path: '/', name: "Menu1", component: Menu1 },
    { path: '/login', name: "login", component: login },
    { path: '/join', name: "join", component: join },
    { path: '/search', name: "search", component: search },
    { path: '/airline', name: "airline", component: airline },

    { path: '/car', name: "car", component: car },
    { path: '/freewrite', name: "freewrite", component: freewrite },
    { path: '/freecontent', name: "freecontent", component: freecontent },
    { path: '/freechange', name: "freechange", component: freechange },

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
    {
        path: '/board', name: "board", component: board,
        children: [
            { path: '/board/info', component: boardinfo },
            { path: '/board/free', component: boardfree },
            { path: '/board/review', component: boardreview },
            { path: '/board/que', component: boardque }
        ]
    },
    {
        path: '/mypage', name: "mypage", component: mypage,
        children: [
            {path:'/mypage/mypw', component:mypagemypw},
            {path:'/mypage/myinfo', component:mypagemyinfo},
            {path:'/mypage/myboard', component:mypagemyboard},
            {
                path: '/mypage/mylike', component: mypagemylike,
                children: [
                    {path:'/mypage/mylike/mmtr', component:mytr},
                    {path:'/mypage/mylike/mmho', component:myho},
                ]
            },
            {path:'/mypage/mymap', component:mypagemymap},
            {path:'/mypage/mydel', component:mypagemydel},
        ]
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;
