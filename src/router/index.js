import Vue from 'vue'
import VueRouter from 'vue-router'
import Feed from '../components/Feed'
import RecipeDetail from '../components/RecipeDetail'
import RecipeAdd from '../components/RecipeAdd'
import Profile from '../components/Profile'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Feed',
    component: Feed
  },
  {
    path: '/recipe/:id',
    name: 'RecipeDetail',
    component: RecipeDetail
  },
  {
    path: '/recipes/add',
    name: 'RecipeAdd',
    component: RecipeAdd
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
