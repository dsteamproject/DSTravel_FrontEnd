import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import VueGoogleMaps from '@fawmi/vue-google-maps'
import App from './App.vue'
import router from './routes'
import VCalendar from 'v-calendar';
//ui 설정



const app = createApp(App);

app.use(ElementPlus)
app.use(router);
app.mount('#app');
app.use(VCalendar,{})
app.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyAk3JtD4rmjVoNiVZHGcUTIs5-xU6FrbT4',
    },
})

// 설치한 모듈 
// ==> vue router (npm install vue-router@next --save),
// ==> axios (npm install axios--save),
// 