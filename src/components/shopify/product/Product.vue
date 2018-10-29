<template>
	<div >
		<ProductImages ></ProductImages>

		<productOptionSelect  :variants="Variants"  :selectedVariant="CurrentVariant" v-on:variant="variantChanged"></productOptionSelect>
	</div>
</template>

<script type="text/javascript">

	import Vue from 'vue';
	import productOptionSelect from '@/components/shopify/product/ProductOptionSelector2.vue'
	import ProductImages from '@/components/shopify/product/ProductImages.vue'
	import store from '@/store'
	import { mapState, mapActions } from "vuex";
	const schema = require("schm");
	import {Slugify, GDatamapper} from '@/gUtilities/main.js'
import math from 'mathjs';
	import { mapGetters } from 'vuex'


	import isColor from 'is-color';
	import randomColor from 'randomcolor';

	export default {
		name: 'Product',
		components: {
			productOptionSelect, ProductImages

		},   props:{
			productID: Number,
			currentproduct:Object,
			products: Array,
			variantID:{
				required:false,
			},
			currentvariant:Object,
		},
		data() {
			return {
				msg: 'Welcome to Your Vue.js App',
				productDictionary: false,
				selectedVariant: false,
			}
		},
		created: function(){
			console.log("here",this.$props)
//			const productDictionary = GDatamapper.parseToDictionary(this.products, "id");


		//	var currentProduct = productDictionary.get('1919179161718');
			//console.log("current product", currentProduct);

			//var parsedOptions = this.parseOptions(currentProduct.options);
			//var optionsDictionary = GDatamapper.parseToDictionary(parsedOptions, "id");

		//	let parsedVariants = this.parseVariants(currentProduct.variants, parsedOptions);
			//var variantDictionary= GDatamapper.parseToDictionary(parsedVariants, "id");
			//console.log("FINAL VARIANTS", parsedVariants)


			const PRODUCT_SCHEMA = schema(
				{
					productID: {type: String, default: this.products[0].id},
					variantID: {type: String, default: false},
					products: {type: Array, required: true},
				});

			let payload = PRODUCT_SCHEMA.parse(this.$props);


			store.dispatch('SHOPIFY_DATA_INIT', payload).then(function(res){
				if (payload.productID ){
					store.dispatch('SET_CURRENT_PRODUCT', payload).then(function(res){
						console.log("DONE" , payload);

						store.dispatch('SET_CURRENT_VARIANT', payload);
					});
				}
			})
		},
		mounted: function() {

		}, computed: {
			...mapGetters([
				'VariantDictionary',
				'Variants',
				'Options',
				'OptionsDictionary',
				'CurrentProduct',
				'CurrentVariant'
				// ...
			])
		},

		methods: {

			variantChanged: function(variant) {
				console.log(">>>>>>>>>>>.NEW VARIANT", variant)

				if ( variant != undefined){
					//store.commit('CURRENT_VARIANT_CHANGED', variant);
					//store.dispatch('SET_CURRENT_VARIANT', {selectedVariant:variant });

				}
			},
		}
	}

</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" type="text/scss">
	//@import "../assets/g-Patternlab/config/variables";
	// @import "../assets/g-Patternlab/config/";
	//@import "../assets/g-Patternlab-config.json";
	.multiselect__tags {
		background: green;
	}

	.multiselect__content-wrapper {
		display: block;
		background: yellow;
	}

	.optionbutton {
		border: 2px solid red;
	}

	.option__swatch {
		background: yellow;
		border: 1px solid black;
		height: 50px;
		width: 50px;
	}

	$generate-swatch-classes: false !default;
	$generate-type-classes: true !default;
	$generate-scheme-classes: true !default;
	$generate-utility-padding: true !default;
	$generate-utility-static: true !default;
	$generate-components: FALSE !default;
</style>
