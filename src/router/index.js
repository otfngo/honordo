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
    {path: '/zh/home', redirect: '/home'},
    {path: '/zh/about-us', redirect: '/about-us'},
    {path: '/zh/bussiness-scope', redirect: '/bussiness-scope'},
    {path: '/zh/successful-case', redirect: '/successful-case'},
    {path: '/zh/contact-us', redirect: '/contact-us'},

    {path: '/home', component: Home},
    {path: '/about-us', component: About},
    {path: '/bussiness-scope', component: Bussiness},
    {path: '/successful-case', component: Case},
    {path: '/contact-us', component: Contact},

    {path: '/:lang/home', component: Home},
    {path: '/:lang/about-us', component: About},
    {path: '/:lang/bussiness-scope', component: Bussiness},
    {path: '/:lang/successful-case', component: Case},
    {path: '/:lang/contact-us', component: Contact},

    {path: '/:lang/*', redirect: '/:lang/home'},
    {path: '*', redirect: '/home'}
  ]
});
