import Vue from 'vue'
import VueRouter from 'vue-router'
import result from 'components/result/result'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/result',
      component: result
    }
  ]
})
