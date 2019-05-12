import Vue from 'vue'
import Router from 'vue-router'
import About from '../components/general/About'
import Home from '../components/general/home/Education'
import Landing from '../components/general/Landing'
import Posts from '../components/posts/List'
import PostDetails from '../components/posts/PostDetails'
import Creator from '../components/posts/Creator'
import Admin from '../components/profile/admin/Admin'
import Education from '../components/profile/user/Dashboard'
import Contact from '../components/general/Feedback'
import SignUp from '../components/profile/SignUp'
import LogIn from '../components/profile/LogIn'
import GoalsSpring2019 from '../components/goals/GoalsSpring2019'
import ReportJanuary2019 from '../components/goals/reports/ReportJanuary2019'
import ProjectBeastFM from '../components/projects/Beastfm'
import ProjectAlienMaker from '../components/projects/AlienMaker'
import ProjectExploxCycling from '../components/projects/ExploxCycling'
import MoreProjects from '../components/projects/More'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.ROUTER_ROOT,
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/education',
      name: 'Education',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
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
      name: 'Education',
      component: Education
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
    {
      path: '/goals/spring2019',
      name: 'GoalsSpring2019',
      component: GoalsSpring2019
    },
    {
      path: '/goals/reports/january2019',
      name: 'ReportJanuary2019',
      component: ReportJanuary2019
    },
    {
      path: '/projects/beastfm',
      name: 'ProjectBeastFM',
      component: ProjectBeastFM
    },
    {
      path: '/projects/alienmaker',
      name: 'AlienMaker',
      component: ProjectAlienMaker
    },
    {
      path: '/projects/exploxcycling',
      name: 'ExploxCycling',
      component: ProjectExploxCycling
    },
    {
      path: '/projects/more',
      name: 'More',
      component: MoreProjects
    },
  ]
})
