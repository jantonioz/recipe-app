import Vue from 'vue'
import VueRouter from 'vue-router'
import Feed from '../components/Feed';
import RecipeDetail from '../components/RecipeDetail';

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
  }
]

const router = new VueRouter({
  routes
})

export default router
