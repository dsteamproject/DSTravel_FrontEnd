import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'

const app = createApp(App);
app.use(router);
app.mount('#app');


// 설치한 모듈 
// ==> vue router (npm install vue-router@next --save),
// ==> axios (npm install axios--save),
// 