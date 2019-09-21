import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      component: () => import(/* webpackChunkName: "login" */ './views/Login.vue'),
    },
    {
      path: '/register',
      component: () => import(/* webpackChunkName: "register" */ './views/Register.vue'),
    },
    {
      path: '/products',
      component: () => import(/* webpackChunkName: "products" */ './views/ProductListing.vue'),
    },
    {
      path: '/products/new',
      component: () => import(/* webpackChunkName: "products" */ './views/ProductEdit.vue'),
    },
    {
      path: '/products/:id',
      component: () => import(/* webpackChunkName: "products" */ './views/ProductEdit.vue'),
      props: true,
    },
    {
      path: '*',
      redirect: '/login',
    },
  ],
});
