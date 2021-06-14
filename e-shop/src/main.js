import Vue from 'vue'
import eShop from './eShop.vue'

Vue.config.productionTip = false

export const eventBus = new Vue();

new Vue({
  el: '#shop',
  render: h => h(eShop)
})
