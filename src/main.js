// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
//import App from './App'
import store from './store'
import data from './data.json';
import router from './router'

import {Slugify, GDatamapper} from '@/gUtilities/main.js'
import Product from './components/shopify/product/Product';
Vue.config.productionTip = false
const schema = require("schm");

const productViewData ={
	products: data.products,
	currentvariant:false,
};

const VUE_APP_NAME = '#owool-product-app';
const PRODUCT_DATA= document.querySelector(VUE_APP_NAME).dataset;


//function initVue(productViewData){
	var vm = new Vue({
		el: VUE_APP_NAME,
		components: {
			Product
		},
		data: {
			products: productViewData.products
		},
		router,
		
		store,
		template: `<Product  :variantID="${PRODUCT_DATA.variantid}" :productID="${PRODUCT_DATA.productid}" :products="products"></Product>`,
	})
//}

//initVue(productViewData);

/* eslint-disable no-new */
