<template>
	<div >
		<ProductImages :images="CurrentProduct"></ProductImages>
		PRODUCT: {{CurrentProduct.title}} ID: {{CurrentProduct.id}}
		<productOptionSelect  v-bind:variantID="18250174726262" v-on:variant="variantChanged"></productOptionSelect>
	</div>
</template>

<script type="text/javascript">

	import Vue from 'vue';
	import productOptionSelect from '@/components/shopify/product/ProductOptionSelector.vue'
	import ProductImages from '@/components/shopify/product/ProductImages.vue'
	import store from '@/store'
	import { mapState, mapActions } from "vuex";
	const schema = require("schm");



	export default {
		name: 'Product',
		components: {
			productOptionSelect, ProductImages

		},   props:{
			productID: Number,
			currentproduct:Object,
			products: Array,
			variantID:String,
			currentvariant:Object,
		},
		data() {
			return {
				msg: 'Welcome to Your Vue.js App',
				productDictionary: false;
			}
		},
		created: function(){
			console.log("here",this.$props)
			const productDictionary = GDatamapper.parseToDictionary(this.products, "id");


			var currentProduct = productDictionary.get('1919179161718');
			console.log("current product", currentProduct);

			var parsedOptions = parseOptions(currentProduct.options);
			var optionsDictionary = GDatamapper.parseToDictionary(parsedOptions, "id");

			let parsedVariants = parseVariants(currentProduct.variants, parsedOptions);
			var variantDictionary= GDatamapper.parseToDictionary(parsedVariants, "id");
			console.log("FINAL VARIANTS", parsedVariants)


			const PRODUCT_VIEW_SCHEMA = schema(
				{
					productID: {type: String, default: this.products[0].id},
					variantID: {type: Number, default: this.products[0].variants[0].id},
					products: {type: Array, required: true},


				});

			var payload = PRODUCT_VIEW_SCHEMA.parse(this.$props);


			/*store.dispatch('SHOPIFY_DATA_INIT', newState).then(function(res){

			})*/
		},
		mounted: function() {


		}, computed: {
			DATASTORE: function() {
				return store.getters;
			},
			CurrentProduct: {
				get: function() {
					return [];//this.$data._currentProduct;
				},
				set: function(newValue) {
					//this.$data._currentProduct = newValue;
				}
			}

		},

		methods: {
			variantChanged: function(variant) {
				console.log(">>>>>>>>>>>.NEW VARIANT", variant)

				if ( variant != undefined){
					store.commit('CURRENT_VARIANT_CHANGED', variant);

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
