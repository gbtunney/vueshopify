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
	...shopify
})
