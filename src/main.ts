import {createApp} from 'vue';
import App from './App.vue';
import {createPinia} from 'pinia';
import router from './router';
// @ts-ignore
import { useRegisterSW } from 'virtual:pwa-register/vue';

useRegisterSW();

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');
