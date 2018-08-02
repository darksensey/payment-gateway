import Vue from 'vue'
import router from './index'

router.beforeEach((to, from, next) => {
  console.log('Global guard', '\n\nto = ', to, '\n\nfrom = ', from)
  // if (to.path !== 'login') {
  //   next({path: 'login'})
  // }
  next()
})
