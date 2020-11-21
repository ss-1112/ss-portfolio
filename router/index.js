import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../src/components/pages/Home.vue'
import About from '../src/components/pages/About.vue'
import Collection from '../src/components/pages/Works.vue'

Vue.use(VueRouter)

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/Works', component: Collection }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})
  
export default router