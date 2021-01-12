import Vue from 'vue'
import VueRouter from 'vue-router'
import Feed from '../components/Feed'
import RecipeDetail from '../components/RecipeDetail'
import RecipeAdd from '../components/RecipeAdd'

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
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
