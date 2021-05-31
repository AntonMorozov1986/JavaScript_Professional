import Vue from 'vue'
import eShop from './eShop.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(eShop),
}).$mount('#shop')
