import Vue from 'vue'
import Vuex from 'vuex'

export const SHOPIFY_DATA_INIT = 'SHOPIFY_DATA_INIT';

export const SHOPIFY_DATA_READY = 'SHOPIFY_DATA_READY';

export const CURRENT_VARIANT_CHANGED = 'CURRENT_VARIANT_CHANGED';
export const GET_SHOPIFY_DATA = 'GET_SHOPIFY_DATA';
export const SINGLE_OPTION_CHANGED = 'SINGLE_OPTION_CHANGED';
export const SINGLE_OPTION_SELECTED = 'SINGLE_OPTION_SELECTED';
export const SHOPIFY_DATA_COMPLETE = 'SHOPIFY_DATA_COMPLETE';
Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		_products: false,
		_currentProduct: false,
		_variants: false,
		_currentVariant: false,
		_options: false,
		count: 0,
	},
	getters: {
		Products: state => {
			return state._products;
		},
		CurrentProduct: state => {
			return state._currentProduct;
		},
		Variants: state => {
			return state._variants;
		},
		CurrentVariant: state => {
			return state._currentVariant;
		},
		Options: state => {
			
			return state._options;
		},
		CurrentVariantImage: state => {
			
			return state._currentVariant;
		},
		CurrentOptionsSelected: state => {
			return state._currentOptionsSelected;
		}
	},
	mutations: {
		increment(state) {
			state.count++
		},
		increment2(state) {
			state.count++
		},
		["PRODUCT_IMAGE_REQUESTED"](state) {
			let requestedImageID = this.state._currentVariant.image_id;
			var newImage = this.state._currentProduct.images.find(function(image) {
				if (requestedImageID == image.id){
					return true;
				}
			});
			
			this.commit('PRODUCT_IMAGE_CHANGED', {
				image: newImage
			});
		},
		["PRODUCT_IMAGE_CHANGED"](state, payload) {
		
		},
		[SINGLE_OPTION_SELECTED](state, payload) {
			//	console.log('option selected');
		},
		[SINGLE_OPTION_CHANGED](state, index, optionValue) {
		},
		[CURRENT_VARIANT_CHANGED](state, payload) {
			this.state._currentVariant = payload;
			this.commit('PRODUCT_IMAGE_REQUESTED');
			
		},
		[SHOPIFY_DATA_READY](state, products) {
		
		},
		["SHOPIFY_DATA_INIT"](state, products) {
			this.state._products = products;
			if (!this.state._currentProduct){
				this.state._currentProduct = this.state._products[0];
			}
			if (state._currentProduct){
				if (state._currentProduct.hasOwnProperty('variants')){
					this.state._variants = state._currentProduct['variants'];
				}
				if (this.state._currentProduct.hasOwnProperty('options')){
					this.state._options = this.state._currentProduct['options'];
				}
				this.commit('SHOPIFY_DATA_READY', this.state._products);
			}
		},
		
		[SHOPIFY_DATA_COMPLETE](state) {
			//	console.log('data completed mutation');
		}
	},
	actions: {
		increment(context) {
			context.commit('increment')
		},
		incrementAsync({commit}) {
			setTimeout(() => {
				commit('increment2')
			}, 10000)
		},
		"IS_READY"({commit}) {
			//	console.log(payload);
			//	commit('SINGLE_OPTION_SELECTED');
			
		}
	}
})
