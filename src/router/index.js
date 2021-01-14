import Vue from 'vue'
import VueRouter from 'vue-router'
import Feed from '../components/Feed'
import RecipeDetail from '../components/RecipeDetail'
import RecipeAdd from '../components/RecipeAdd'
import RecipeEdit from '../components/RecipeEdit'
import Profile from '../components/Profile'
import Login from '../components/LoginPage'
import Register from '../components/RegisterPage'

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
    path: '/recipes/edit/:id',
    name: 'RecipeEdit',
    component: RecipeEdit
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
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
