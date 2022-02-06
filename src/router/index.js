import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/search',
props: (route) =>({ query: route.query.query}),
    component: () => 
    import(/* webpackChunkName: "about" */ '../views/SearchResult.vue'),
  },
]

const router = new VueRouter({
  routes
})

export default router
