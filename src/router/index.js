import Vue from 'vue';
import Router from 'vue-router';
import Home from 'components/Home';
import About from 'components/About';
import Bussiness from 'components/Bussiness';
import Case from 'components/Case';
import Contact from 'components/Contact';

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
