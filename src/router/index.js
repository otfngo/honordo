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
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/bussiness',
      name: 'Bussiness',
      component: Bussiness
    },
    {
      path: '/case',
      name: 'Case',
      component: Case
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
});
