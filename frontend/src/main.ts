import { createApp } from 'vue';
import { createMemoryHistory, createRouter } from 'vue-router';
import App from './App.vue';
import './assets/style.scss';
import './assets/tailwind.scss';

import Home from './pages/Home.vue';
import Login from './pages/Login.vue';
import Registration from "./pages/Registration.vue";
import Dashboard from "./pages/Dashboard.vue";

const routes = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/register', component: Registration },
    { path: '/dashboard', component: Dashboard },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

createApp(App)
    .use(router)
    .mount('#app')
