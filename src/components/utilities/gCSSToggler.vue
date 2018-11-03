<template>
	<div>
		<h5>CSS TOGGLER</h5>
		<multiselect
		             :options="option.values"
		             v-model="selectedOptions[index]"
		             @input=""
		             :taggable="false"
		             ref="optionselect"
		             :multiple="false"
		             :searchable="true"
		             :allow-empty="false">
		</multiselect>

	</div>
	<p>{{ greeting }} World!</p>
</template>

<script>

	import ProductImages from '@/components/shopify/product/ProductImages.vue'

	module.exports = {
		name: 'gCSSToggler',
		data: function() {
			return {
				greeting: 'Hello'
			}
		},
		components: {},
		props: {
			exampleprop: {
				type: String,
				default: 'not set',
				required: false
			},
		},
		computed: {
			example: {
				get: function() {
					return;
				},
				set: function(newVal) {
					//=newVal;
				}
			},
			example2: function() {

			}
		}
	}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

		<style lang="scss" type="text/scss">
	p {
		font-size: 2em;
		text-align: center;
	}
</style>