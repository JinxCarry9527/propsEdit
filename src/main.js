import Vue from 'vue'
// import VueRouter from 'vue-router'
// import Watch from '@/components/watch'
// const router = new VueRouter({
//   routes: [{
//     path: '/watch',
//     components: Watch
//   }]
// })
import App from './App.vue'


Vue.config.productionTip = false

new Vue({
  // router,
  render: h => h(App),
}).$mount('#app')
