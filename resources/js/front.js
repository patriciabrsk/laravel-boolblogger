window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.Vue = require('vue');

Vue.use(VueRouter);

import VueRouter from 'vue-router';
import App from './pages/Home';
import App from './pages/About';
import App from './pages/Posts';
import App from './pages/Contact';
import App from './pages/NotFound';

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/about-us',
            name: 'about-us',
            component: About
        },
        {
            path: '/posts',
            name: 'posts',
            component: Posts
        },
        {
            path: '/contact-us',
            name: 'contact-us',
            component: Contact
        },
        {
            path: '/not-found',
            name: 'not-found',
            component: NotFound
        },
    ]
})
const app = new Vue({
    el: '#root',
    render: h => h(App),
    router
});

