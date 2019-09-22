import Vue from 'vue';
import Router from 'vue-router';
import store from './store'

Vue.use(Router);

const authGuard = (to, from, next) => {
  if (!store.state.token) {
    next('/login')
  } else {
    next()
  }
}

const noAuth = (to, from, next) => {
  if (store.state.token) {
    next('/products')
  } else {
    next()
  }
}

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      component: () => import(/* webpackChunkName: "login" */ './views/Login.vue'),
      beforeEnter: noAuth,
    },
    {
      path: '/register',
      component: () => import(/* webpackChunkName: "register" */ './views/Register.vue'),
      beforeEnter: noAuth,
    },
    {
      path: '/products',
      component: () => import(/* webpackChunkName: "products" */ './views/ProductListing.vue'),
      beforeEnter: authGuard,
    },
    {
      path: '/products/new',
      component: () => import(/* webpackChunkName: "products" */ './views/ProductEdit.vue'),
      beforeEnter: authGuard,
    },
    {
      path: '/products/:id',
      component: () => import(/* webpackChunkName: "products" */ './views/ProductEdit.vue'),
      beforeEnter: authGuard,
      props: true,
    },
    {
      path: '*',
      redirect: '/login',
    },
  ],
});
