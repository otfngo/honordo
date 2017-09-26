import Vue from 'vue'
import Router from 'vue-router'
import Home from 'components/home/home'
import {DEFAULT_LANGUAGE} from '../api/config'

Vue.use(Router)

const About = () => import('components/about/about')
const Bussiness = () => import('components/bussiness/bussiness')
const Case = () => import('components/case/case')
const Contact = () => import('components/contact/contact')

export default new Router({
  mode: 'history',
  routes: [
    {path: '/:lang/home', component: Home},
    {path: '/:lang/about-us', component: About},
    {path: '/:lang/bussiness-scope', component: Bussiness},
    {path: '/:lang/successful-case', component: Case},
    {path: '/:lang/contact-us', component: Contact},

    {path: '/:lang/*', redirect: '/:lang/home'},
    {path: '*', redirect: `/${DEFAULT_LANGUAGE}/home`}
  ]
})
