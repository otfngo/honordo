import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = resolve => import('components/home/home').then(module => resolve(module))
const About = resolve => import('components/about/about').then(module => resolve(module))
const Bussiness = resolve => import('components/bussiness/bussiness').then(module => resolve(module))
const Case = resolve => import('components/case/case').then(module => resolve(module))
const Contact = resolve => import('components/contact/contact').then(module => resolve(module))

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
})
