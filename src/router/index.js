import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import NotFound from '../views/NotFound.vue'//404
import Jobs from '../views/jobs/Jobs.vue'
import JobDetail from '../views/jobs/JobDetail.vue'



const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
    
  },
  {
    path: '/jobs',
    name: 'job',
    component: Jobs
  },
  {
    path: '/jobDetail/:id',
    name: 'jobDetail',
    component: JobDetail,
    props:true
  },
  {
    path:  '/all-jobs',
    redirect: '/jobs'
  },
  //catchall 404
  {
    path: '/:catchAll(.*)',
    component: NotFound
  }
  
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
