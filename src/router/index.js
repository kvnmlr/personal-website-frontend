import Vue from 'vue'
import Router from 'vue-router'
import About from '../components/general/About'
import Hub from '../components/general/home/Hub'
import Landing from '../components/general/Landing'
import Posts from '../components/posts/List'
import PostDetails from '../components/posts/PostDetails'
import Creator from '../components/posts/Creator'
import Admin from '../components/profile/admin/Admin'
import Dashboard from '../components/profile/user/Dashboard'
import GetStarted from '../components/general/GetStarted'
import Feedback from '../components/general/Feedback'
import SignUp from '../components/profile/SignUp'
import LogIn from '../components/profile/LogIn'

Vue.use(Router);

export default new Router({
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  mode: 'history',
  base: process.env.ROUTER_ROOT,
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/hub',
      name: 'Hub',
      component: Hub
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/guide',
      name: 'GetStarted',
      component: GetStarted
    },
    {
      path: '/feedback',
      name: 'Feedback',
      component: Feedback
    },
    {
      path: '/creator',
      name: 'Creator',
      component: Creator
    },
    {
      path: '/posts',
      name: 'Posts',
      component: Posts
    },
    {
      path: '/posts/:id',
      name: 'Post Details',
      component: PostDetails
    },
    {
      path: '/admin/dashboard',
      name: 'AdminDashboard',
      component: Admin
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/login',
      name: 'LogIn',
      component: LogIn
    },
  ]
})
