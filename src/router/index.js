import Vue from 'vue';
import Router from 'vue-router';
import Home from 'components/home/home';
import About from 'components/about/about';
import Bussiness from 'components/bussiness/bussiness';
import Case from 'components/case/case';
import Contact from 'components/contact/contact';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/bussiness',
      component: Bussiness
    },
    {
      path: '/case',
      component: Case
    },
    {
      path: '/contact',
      component: Contact
    }
  ]
});
