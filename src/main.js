// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import data from './data.json';

Vue.config.productionTip = false



function initVue(variable){
	new Vue({
		el: '#productapp',
		data: {
			vueProduct : variable
		},
		props: ['products'],
		router,
		store,
		components: { App },
		template: '<App products="products"/>'
	})
	
	
}
/* eslint-disable no-new */


initVue(data);