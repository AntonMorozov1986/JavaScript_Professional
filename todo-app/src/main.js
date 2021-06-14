import Vue from 'vue';
import Vuelidate from "vuelidate/src";

import ToDoApp from './ToDoApp.vue';

Vue.config.productionTip = false;
Vue.use(Vuelidate);

export const EventBus = new Vue();

new Vue({
  render: h => h(ToDoApp),
}).$mount('#todo-app')
