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

console.log(data);
/*
function parseOptions(inOptions) {
	
	const GDataMapOptionValues = {
		adapters: {
			default: {
				id: (obj, key) => ( !obj[key] ) ? false : true,
				slug: (obj, key) => ( !obj[key] ) ? Slugify(obj['title']) : false,
				title: (obj, key) => obj[key],
				testing: "gillintunney"
			}
		},
		validate: () => schema({
			id: {type: Number, default: Math.round(math.random(11111111111, 999999999999999))},
			parent_id: {type: Number, default: false},
			slug: {type: String, required: true},
			title: {type: String},
			_index: {type: Number, required: true},
			swatch_image: {type: Number, default: false},
			color: {type: String, default: randomColor()}
		})
	}
	
	let optionsArray = inOptions;
	
	for (let i = 0; i < optionsArray.length; i++) {
		var currentObj = optionsArray[i];
		var OPTIONS_SCHEMA = schema({
			
			id: {type: String, default: math.random(11111111111, 999999999999999)},
			name: {type: String, default: false},
			slug: {type: String, default: Slugify(currentObj["name"]), required: true},
			position: {type: Number},
			_index: {type: Number, default: i, required: true},
			product_id: {type: Number, required: true, default: false},
			values: {type: Array, default: false}
		});
		
		currentObj = OPTIONS_SCHEMA.parse(currentObj);
		for (var u = 0; u < currentObj.values.length; u++) {
			//var newValueObj = GDatamapper.expandToObject(currentObj.values[u],{slug: currentObj.values[u],_index:u, 	parent_id: optionsArray[i].id,gillian : "test"})
			//var newValueObj = GDatamapper.mapData(currentObj.values[u],GDataMap.adapters.default);
			//console.log("VALUE :" ,newValueObj);
			//newValueObj = Object.assign(newValueObj,{_index:u});
			var newValueObj = GDatamapper.expandToObject(currentObj.values[u], "title", {
				slug: Slugify(currentObj.values[u]),
				_index: u,
				parent_id: optionsArray[i].id,
				gillian: "test"
			})
				newValueObj = GDataMapOptionValues.validate().parse(newValueObj);
			currentObj.values[u] = newValueObj;
		}
		currentObj.valueDictionary = GDatamapper.parseToDictionary(currentObj.values, "id");
	}
	return optionsArray.slice(0);
}

function parseVariants(inVariants, inOptionsArr) {
	var optionCount = 3;
	let variantArr = inVariants;
	
	variantArr.forEach(function(item, key) {
		let newTargetArray = new Array();
		
		for (var u = 1; u < optionCount + 1; u++) {
			
			//make array with chosen optiosn.
			
			if (!item[`option${u}`]){
				continue;
			} else {
				let searchString = Slugify(item[`option${u}`]);
				var myArr = inOptionsArr[u - 1].values.filter(function(option) {
					
					if (option.slug == searchString){
						return true;
					} else {
						return false;
					}
				})
				
				//check to make sure there is only one
				if (myArr.length != 1){
					throw "ERROR OPTION NOT FOUND";
				} else {
					
					//console.log("FOUND AN OPTION", myArr[0])
					newTargetArray.push(myArr[0]);
				}
				//console.log("finsihed array",newTargetArray);}
				
			}
		}
		item.options = GDatamapper.parseToDictionary(newTargetArray, "parent_id");
	})
	
	//console.log("VARIANT length" , newTargetArray);
	return variantArr.slice(0);
}

const _products = data.products;
const productDictionary = GDatamapper.parseToDictionary(data.products, "id");
console.log("prodcuts", productDictionary);

var currentProduct = productDictionary.get('1919179161718');
console.log("current product", currentProduct);

var parsedOptions = parseOptions(currentProduct.options);
var optionsDictionary = GDatamapper.parseToDictionary(parsedOptions, "id");

let parsedVariants = parseVariants(currentProduct.variants, parsedOptions);
var variantDictionary= GDatamapper.parseToDictionary(parsedVariants, "id");
console.log("FINAL VARIANTS", parsedVariants)

const testDataMap = {
	currentvariant: function(obj, key) {
		return new Array(obj[key])
	},
	teststring: function(obj, key) {
		console.log("oing function now", key, obj);
		return `${obj[key]}have a nvery nice day`
	},
	currentproduct: function(obj, key) {
		
		return (typeof obj[key] == "string" || typeof obj[key] == "number" ) ? `datatype error ${typeof obj[key]}` : (typeof obj[key] == "object"  ) ? obj[key] : false;
	},
	products: function(obj, key) {
		
		console.log("trying to make a product", obj[key], typeof obj['currentproduct'])
		if (obj[key] === undefined || obj[key] === null){
			
			if (obj['currentproduct'] && (typeof obj['currentproduct'] == "object")){
				return [obj['currentproduct']]
			}
		}
		else {
			(typeof obj[key] == "array"  ) ? obj[key] : (typeof obj[key] == "object"  ) ? ["new array"] : false;
		}
	}
};

const testDataMapBase = {
	currentvariant: function(obj, key) {
		return new Array(obj[key])
	},
	teststring: function(obj, key) {
		console.log("oing function now", key, obj);
		return `${obj[key]}have a nvery nice day`
	},
	currentproduct: function(obj, key) {
		
		return (typeof obj[key] == "string" || typeof obj[key] == "number" ) ? `datatype error ${typeof obj[key]}` : (typeof obj[key] == "object"  ) ? obj[key] : false;
	},
	products: function(obj, key) {
		
		console.log("trying to make a product", obj[key], typeof obj['currentproduct'])
		if (obj[key] === undefined || obj[key] === null){
			
			if (obj['currentproduct'] && (typeof obj['currentproduct'] == "object")){
				return [obj['currentproduct']]
			}
		} else {
			(typeof obj[key] == "array"  ) ? obj[key] : (typeof obj[key] == "object"  ) ? ["new array"] : false;
		}
	}
};
*/


const productViewData ={
	productID: 1919179161718,
	products: data.products,
	variantID:18250174988406,
	currentvariant:false,
};

//myFunc:()=> (!PRODUCT_VIEW_DATA.currentproduct && PRODUCT_VIEW_DATA.productID ) ? productDictionary,get(PRODUCT_VIEW_DATA.productID ) : _products[0]



console.log(data)
//let _products = data

var vm = new Vue({
	el: '#productapp',
	components: {
		Product
	},
	data: {
		products: data.products
	},
	store,
	template: `<Product  :variantID="${productViewData.variantID}" :productID="${productViewData.productID}" :products="products"></Product>`,
})

/* eslint-disable no-new */

//initVue(data);