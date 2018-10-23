import Vue from 'vue'
import Vuex from 'vuex'
import shopify from "./shopify";

export const SHOPIFY_DATA_INIT = 'SHOPIFY_DATA_INIT';

export const SHOPIFY_DATA_READY = 'SHOPIFY_DATA_READY';

export const CURRENT_VARIANT_CHANGED = 'CURRENT_VARIANT_CHANGED';
export const GET_SHOPIFY_DATA = 'GET_SHOPIFY_DATA';
export const SINGLE_OPTION_CHANGED = 'SINGLE_OPTION_CHANGED';
export const SINGLE_OPTION_SELECTED = 'SINGLE_OPTION_SELECTED';
export const SHOPIFY_DATA_COMPLETE = 'SHOPIFY_DATA_COMPLETE';


//shopify...




Vue.use(Vuex)


const person1 = { name: 'David Walsh', age: 33 };
const person2 = { name: 'David Walsh Jr.', role: 'kid' };

const SHOPIFY = new Vuex.Store({
	...shopify
});
const BASESTORE = {
	state: {
		_products: [],
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
		},
	},
	mutations: {...{
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
			console.log("CURRENT image IS ",newImage);
			
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
			console.log('----VARIANT ' , payload);
			
			this.state._currentVariant = payload;
			this.commit('PRODUCT_IMAGE_REQUESTED');
			
		},
		[SHOPIFY_DATA_READY](state, products) {
		
		},
		
		["SHOPIFY_DATA_INIT"](state,  payload) {
			
			console.log("INITING DATA~!!!",payload);
			
			
			
			
		/*
		let newState = {
				_products: [],
				_productID: false,
				_currentProduct: false,
				_currentVariant: false,
				_currentVariantID:false
			}
		if (!this.state._currentProduct){
				this.state._currentProduct = this.state._products[0];
			}
			*/
			//this.commit('SHOPIFY_DATA_READY', this.state._products);
			
		},
		["SET_CURRENT_PRODUCT"](state, payload ) {
			let product ;
			let variantID;
			if (payload.hasOwnProperty('VariantID') ){
				variantID=payload['VariantID'];
			}
			if (payload.hasOwnProperty('product') ){
				product = payload['product'];
			}else if (payload.hasOwnProperty('id')){
				product=payload;
			}else{
				throw "ERROR!",payload;
			}
			this.state._currentProduct = product;
			if (this.state._currentProduct){
				
				//setting variants
				if (state._currentProduct.hasOwnProperty('variants')){
					this.state._variants = state._currentProduct['variants'];
				}
				//setting options
				if (this.state._currentProduct.hasOwnProperty('options')){
					this.state._options = this.state._currentProduct['options'];
				}
				
				if (variantID){
					//throw variantID;
					
					console.log("TRYING TO SET AN ID" ,variantID);
					let self = this;
					this.dispatch('GET_CURRENT_VARIANT_BY_ID', variantID).then((result) => {
						console.log("VARIANT ID  ID DATA  DATA~!!!", result);
						
						self.commit('CURRENT_VARIANT_CHANGED', result)
					})
				}
			
			}
			
			console.log("STATE IS!" , this.state)
		},
		[SHOPIFY_DATA_COMPLETE](state) {
			//	console.log('data completed mutation');
		}
	}},
	actions: {
		GET_CURRENT_VARIANT_BY_ID({dispatch, commit}, id) {
			if (!this.state._variants){
				return false;
			}
			let variantID = id;
			var foundVariant = this.state._variants.filter(function(variant) {
				console.log("found!", variantID, variant.id)
				
				if (variant.id == variantID){
					return true;
				}
			})
			
			if (foundVariant.length == 1){
				return foundVariant[0];
			} else {
				throw `ERROR FINDING VARIANT${productID}`
			}
			return false;
		},
		GET_CURRENT_PRODUCT_BY_ID({dispatch, commit}, id) {
			if (!this.state._products){
				return false;
			}
			let productID = id;
			var foundProduct = this.state._products.filter(function(product) {
				if (product.id == productID){
					console.log("found!", productID, product.id)
					return true;
				}
			})
			
			if (foundProduct.length == 1){
				return foundProduct[0];
			} else {
				throw `ERROR FINDING PRODUCT${productID}`
			}
			return false;
		},
		increment(context) {
			context.commit('increment')
		},
		incrementAsync({commit}) {
			setTimeout(() => {
				commit('increment2')
			}, 10000)
		},
		"SET_CURRENT_PRODUCT"({commit,state},payload) {
			
			commit('SET_CURRENT_PRODUCT',payload);
			
		},
		"SHOPIFY_DATA_INIT"({commit,state},payload) {
			
			
			commit('SHOPIFY_DATA_INIT',payload);
			
		},
		"IS_READY"({commit}) {
			//	console.log(payload);
			//	commit('SINGLE_OPTION_SELECTED');
			
		}
	},
}


 BASESTORE.mutations = {...BASESTORE.mutations, ...shopify.mutations}
  BASESTORE.actions = {...BASESTORE.actions, ...shopify.actions}
BASESTORE.state = {...BASESTORE.state, ...shopify.state}

console.log(BASESTORE);
export default new Vuex.Store(BASESTORE);
