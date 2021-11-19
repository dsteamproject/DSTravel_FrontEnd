import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import VueGoogleMaps from '@fawmi/vue-google-maps'
import App from './App.vue'
import router from './routes'
import VueGlide from 'vue-glide-js'
import VueCookies from 'vue3-cookies'
import CKEditor from '@ckeditor/ckeditor5-vue';
import VueZoomer from 'vue-zoomer'
import VueEasyLightbox from 'vue-easy-lightbox'


import VCalendar from 'v-calendar';
import 'vue-glide-js/dist/vue-glide.css'
//ui 설정
window.Kakao.init('ce61cbedf2c1d5758c73ec734dc1af08');


const app = createApp(App);
app.use(VCalendar);
app.use(VueGlide)
app.use(VueEasyLightbox)
app.use(ElementPlus)
app.use(VueZoomer)
app.use(CKEditor).mount();
app.use(router);
app.mount('#app');

app.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyAk3JtD4rmjVoNiVZHGcUTIs5-xU6FrbT4',
        libraries: "places"
    },
})
app.use(VueCookies, {
    expireTimes: "7d",
});



// 설치한 모듈 
// ==> vue router (npm install vue-router@next --save),
// ==> axios (npm install axios--save),
// ==> vuezoomer (npm install vue-zoomer@next)