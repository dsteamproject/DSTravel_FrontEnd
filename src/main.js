import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import VueGoogleMaps from '@fawmi/vue-google-maps'
import App from './main.vue'
import router from './routes'
import VueGlide from 'vue-glide-js'
import VueCookies from 'vue3-cookies'
import CKEditor from '@ckeditor/ckeditor5-vue';
import VueZoomer from 'vue-zoomer'
import VueEasyLightbox from 'vue-easy-lightbox'
// admin
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import VCalendar from 'v-calendar';
import 'vue-glide-js/dist/vue-glide.css'
import Vue3Geolocation from 'vue3-geolocation';
//ui 설정
window.Kakao.init('ce61cbedf2c1d5758c73ec734dc1af08');




const app = createApp(App);
library.add(fas, far, fab);
app.component('font-awesome-icon', FontAwesomeIcon);
app.config.productionTip = false;

app.use(VCalendar);
app.use(VueGlide)
app.use(VueEasyLightbox)
app.use(ElementPlus)
app.use(VueZoomer)
app.use(CKEditor).mount();
app.use(router);
app.mount('#app');
app.use(Vue3Geolocation);
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