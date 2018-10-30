// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
//import App from './App'
import store from './store'
import data from './data.json';
import {Slugify, GDatamapper} from '@/gUtilities/main.js'
import Product from './components/shopify/product/Product';
Vue.config.productionTip = false
const schema = require("schm");

const productViewData ={
	productID: 1919179161718,
	products: data.products,
	variantID:18250174988406,
	currentvariant:false,
};

function initVue(productViewData){
	var vm = new Vue({
		el: '#productapp',
		components: {
			Product
		},
		data: {
			products: productViewData.products
		},
		store,
		template: `<Product  :variantID="${productViewData.variantID}" :productID="${productViewData.productID}" :products="products"></Product>`,
	})
}

initVue(productViewData);

/* eslint-disable no-new */

//initVue(data);