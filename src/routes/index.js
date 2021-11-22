import { createWebHistory, createRouter } from "vue-router";

import Menu1 from '@/components/Menu1'
import login from '@/components/login'
import join from '@/components/join'
import search from '@/components/search'

import airline from '@/components/airline'
import car from '@/components/car'
import car1 from '@/components/car1'
import carcontent from '@/components/carcontent'
import hotel from '@/components/hotel'
import hotelcontent from '@/components/hotelcontent'
import find from '@/components/find'
import board from '@/components/board'
import boardinfo from '@/components/info'
import boardfree from '@/components/free'
import boardreview from '@/components/review'
import boardque from '@/components/que'
import boardtravel from '@/components/travel'
import order from '@/components/order'

import vs from '@/components/vs'
import vsseoul from '@/components/vsseoul'
import vscontent from '@/components/vscontent'
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

import myfo from '@/components/mmfo'
import myho from '@/components/mmho'
import mytr from '@/components/mmtr'
import mbwrite from '@/components/mbwrite'
import mblike from '@/components/mblike'
import sample from '@/components/sample'

const routes = [
    {
        path: '/', name: "Menu1", component: Menu1
    },
    { path: '/login', name: "login", component: login, meta: { auth: true } },
    { path: '/sample', name: "sample", component: sample },
    { path: '/join', name: "join", component: join },
    { path: '/search', name: "search", component: search },

    { path: '/airline', name: "airline", component: airline },
    { path: '/order', name: "order", component: order },

    { path: '/car', name: "car", component: car },
    { path: '/car1', name: "car1", component: car1 },
    { path: '/carcontent', name: "carcontent", component: carcontent },
    { path: '/freewrite', name: "freewrite", component: freewrite, meta: { auth2: true }, },
    { path: '/freecontent', name: "freecontent", component: freecontent },
    { path: '/freechange', name: "freechange", component: freechange, meta: { auth2: true } },

    { path: '/vs', name: "vs", component: vs },
    { path: '/vsseoul', name: "vsseoul", component: vsseoul },
    { path: '/vscontent', name: "vscontent", component: vscontent },
    { path: '/hotel', name: "hotel", component: hotel },
    { path: '/hotelcontent', name: "hotelcontent", component: hotelcontent },
    {
        path: '/find', name: "find", component: find, meta: { auth: true },
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
            { path: '/board/que', component: boardque },
            { path: '/board/travel', component: boardtravel },
        ]
    },
    {
        path: '/mypage', name: "mypage", component: mypage, meta: { auth2: true },
        children: [
            { path: '/mypage/mypw', component: mypagemypw },
            { path: '/mypage/myinfo', name: "mypagemyinfo", component: mypagemyinfo },
            {
                path: '/mypage/myboard', component: mypagemyboard,
                children: [
                    { path: '/mypage/myboard/mbwrite', component: mbwrite },
                    { path: '/mypage/myboard/mblike', component: mblike },
                ]
            },
            {
                path: '/mypage/mylike', component: mypagemylike,
                children: [
                    { path: '/mypage/mylike/mmtr', component: mytr },
                    { path: '/mypage/mylike/mmho', component: myho },
                    { path: '/mypage/mylike/mmfo', component: myfo },
                ]
            },
            { path: '/mypage/mymap', component: mypagemymap },
            { path: '/mypage/mydel', component: mypagemydel },
        ]
    },
];


const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach(function (to, from, next) {
    const token = sessionStorage.getItem("TOKEN");
    if (to.meta.auth && token !== null) { // 로그인시 막기
        console.log(from);
        next('/')
        return;
    }
    if (to.meta.auth2 && token === null) {  //비로그인시 막기
        console.log("잘못된 접근입니다");
        next('/')
        return;
    }
    next();
})
export default router;
