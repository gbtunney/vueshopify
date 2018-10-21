// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import data from './data.json';
import Product from './components/shopify/product/Product';
Vue.config.productionTip = false

//Vue.component('Product', { /* ... */ });

var vm = new Vue({
	el: '#productapp',
	components: {
		Product
	},
	data:{
		
		shopifyproducts : data.products
	},
	store,
	template: '<Product v-bind:shopifyproducts="shopifyproducts"></Product>',
})


/*
function initVue(variable){
	console.log("data is",variable.toString());
	
	new Vue({
		el: '#productapp',
		data: {
			vueProduct : [],
			varName:null,
		},
		computed:{
			Product: function(){
				return  JSON.stringify(variable);
			}
		},
		store,
		components: { App },
		template: '<App v-bind:productsdata="Product"></App>',
		
		beforeMount: function () {
			this.varName = this.$el.attributes['data-var-name'].value;
			console.log("data is",variable.toString());
			
			this.vueProduct = variable
		},
	})
	
	
}*/
/* eslint-disable no-new */


//initVue(data);