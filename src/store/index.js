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

function replaceKey(obj, oldKey, newKey) {
	// Do nothing if the names are the same
	if (oldKey == newKey){
		return obj;
	}
	// Check for the old property name to avoid a ReferenceError in strict mode.
	if (obj.hasOwnProperty(oldKey)){
		obj[newKey] = obj[oldKey];
		delete obj[oldKey];
	}
	return obj;
};

export default new Vuex.Store({
	state: {
		_products: false,
		_currentProduct: false,
		_variants: false,
		_currentVariant: false,
		_options: false,
		_currentOptionsSelected : new Object(),
		_optionCount: 3,
		count:0,
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
		CurrentOptionsSelected: state => {
			return state._currentOptionsSelected;
		}
	},
	mutations: {
		increment (state) {
			state.count++
		},
		increment2 (state) {
			state.count++
		},
		["UPDATE_SELECTED_VARIANT"](state,payload){
		
		},
		[SINGLE_OPTION_SELECTED](state, payload) {
			console.log('option selected');
		
		},
		[SINGLE_OPTION_CHANGED](state, index, optionValue ) {
			
			console.log('option changed');
			//state._currentOptionsSelected.set(`option${index}`, optionValue);
			
			//this.state._currentVariant = variant;
		},
		[CURRENT_VARIANT_CHANGED](state, variant) {
			this.state._currentVariant = variant;
		},
		[GET_SHOPIFY_DATA](state){
		
		},
		[SHOPIFY_DATA_INIT](state, products) {
			this.state._products = products;
			
			if (!this.state._currentProduct){
				this.state._currentProduct = this.state._products[0];
			}
			if (state._currentProduct){
				if (state._currentProduct.hasOwnProperty('variants')){
					this.state._variants = state._currentProduct['variants'];
					
					if (!this.state._currentVariant){
						this.state._currentVariant = this.state._variants[0]; //first available
						console.log('trying to xall');
						console.log(this.state._currentVariant);
					}
				}
				if (this.state._currentProduct.hasOwnProperty('options')){
					console.log('hihi');
					this.state._options = this.state._currentProduct['options'];
					
				}
				
			}
			
			//commit('SHOPIFY_DATA_COMPLETE');
			
		},
		[SHOPIFY_DATA_COMPLETE](state){
			console.log('data completed mutation');
		}
	},
	actions: {
		increment (context) {
			context.commit('increment')
		},
		incrementAsync ({ commit }) {
			setTimeout(() => {
				commit('increment2')
			}, 10000)
		},
		SINGLE_OPTION_SELECTED({commit}){
			//console.log(payload);
			commit('SINGLE_OPTION_SELECTED');
			
		},
		SINGLE_OPTION_CHANGED({commit}){
			console.log("HI" + commit);
			//commit('SINGLE_OPTION_SELECTED');
			
		},
		SHOPIFY_DATA_COMPLETE ({ commit }) {
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					commit('SHOPIFY_DATA_COMPLETE')
					resolve()
				}, 1000)
			})
		}
	}
})
