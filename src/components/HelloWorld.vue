<template>
  <div class="hello">
    <multiselect v-for="option,index in options"
                 :options="option.values"
                 v-model="selectedOptions[index]"
                 @input="_getVariantFromOptions(index)"

                 v-on:close="selectClosed"
                 :key="index"
                 :taggable="false"
                 ref="optionselect"
                 :multiple="false"
                 :closeOnSelect="false" placeholder="option.name" :searchable="true" :allow-empty="false">

      <template slot="singleLabel" slot-scope="{ option }">
        <div class="optionbutton" v-bind:class="{ 'disabled': false }">{{ option }} </div>
      </template>

    </multiselect>

    <multiselect :options="variants"
                 v-model="selectedVariant"
                 @input="variantSelectorChanged"
                 track-by="title"
                 label="title"
                 ref="multiselectmaster"
                 :taggable="false"
                 v-on:close="selectClosed"
                 :multiple="false"
                 :closeOnSelect="false"
                 placeholder="Select one"
                 :searchable="true"
                 :allow-empty="false">

        <template slot="singleLabel" slot-scope="{ option }">
          <strong>{{ option.title }}</strong> ID:<strong>  {{ option.id }}</strong>
        </template>

    </multiselect>

    <pre class="language-json"><code>{{ selectedVariant  }}</code></pre>
    <button  v-on:created="">CLICK TO DISABLE SOME BUTTONS</button>

  </div>
</template>

<script type="text/javascript">

	import Vue from 'vue';
	import Multiselect from 'vue-multiselect'

	import store from '../store'
	import gAttributeSelector from '@/components/AttributeSelector.vue';

	export default {
		name: 'HelloWorld',
		components: {
			gAttributeSelector, Multiselect
		},
		computed: {
			DATASTORE: function() {
				return store.getters;
			},
			SelectedVariant: function() {

				console.log("selected varaint : ", this.$data.selectedVariant.hasOwnProperty('id'))

				console.log("setting selected variant");

				//return this.DATASTORE['SelectedVariant'];
				if (this.$data.selectedVariant.hasOwnProperty('id')){
					return this.$data.selectedVariant;
				} else {
					if (this.$data.selectedVariant.length > 0){
						return this.$data.selectedVariant[this.$data.totalVariants - 1];
					}
				}
				return false;
			},
			SelectedOptions: function() {
				return this.$data.selectedOptions;
			}
		},
		mounted: function() {
			this.setSelectedOptions();
			//store.dispatch('GET_SHOPIFY_DATA');
			//store.commit('SHOPIFY_DATA_INIT',CONFIG.products);
		},
		methods: {
			_getVariantFromOptions: function() {
				let self = this;

				let newFilteredArray = this.$data.variants;
				for (let i = 0; i < this.$data.selectedOptions.length; i++) {

					let selectedOption = this.$data.selectedOptions[i];

					if (typeof selectedOption == 'object'){
						selectedOption = selectedOption.toString();
					}
					let self = this;

					newFilteredArray = newFilteredArray.filter(function(variant) {

						var key = self.getOptionKey(i + 1);
						var variantOptionVal = variant[key];

						if (variantOptionVal == selectedOption){
							return true;
						} else {
							return false;
						}
					});
				}

				var arrayAfterFilter = newFilteredArray;
				if (arrayAfterFilter.length == 1){
					console.log(" VARIANT THAT MEET CRITERIA FOUND ", this.$data.selectedOptions)
					console.log(arrayAfterFilter[0]);

					if (arrayAfterFilter[0] != this.SelectedVariant){
						console.log("GOING TO CHANGE VAL!", this.$data.selectedVariant)
						this.$data.selectedVariant = arrayAfterFilter[0];
					}
				} else {

					console.log("NO MASTER VARIANT THAT MATCHES ", this.$data.selectedOptions)
					this.setSelectedOptions();
				}
			},
			getVariantByOptions: function(key, value) {

				return this.$data.variants.filter(function(variant) {
					if (variant[key] == value){
						return true;
					}
				});
			},
			setSelectedOptions: function() {

				var selectedArr = new Array()

				if (this.$data.selectedVariant){
					var newSelectedOptionsArray = [];
					for (var i = 0; i < this.$data.options.length; i++) {

						var optionList = this.$data.options[i].values;
						let variantOptionStringVal = this.SelectedVariant[this.getOptionKey(i + 1)];
						var optionListFoundValues = optionList.filter(function(option) {
							if (option == variantOptionStringVal){
								return true;
							}
						});
						newSelectedOptionsArray[i] = optionListFoundValues;
					}
					this.$data.selectedOptions = newSelectedOptionsArray;
				}
			},
			variantSelectorChanged: function() {
				console.log("VUEX ::VARIANT CHANGED!!! ");
				this.setSelectedOptions();
			},
			getOptionKey: (index) => `option${index}`,
			selectClosed: function() {
				console.log("select was deactivated");
			}
		},
		data() {
			return {
				msg: 'Welcome to Your Vue.js App',
				totalOptions: 3,
				selectedOptions: [],
				options: [
					{
						"id": 2643071074422,
						"product_id": 1919179161718,
						"name": "Color",
						"position": 1,
						"values": [
							"Alumroot",
							"Ash",
							"Basswood",
							"Bee-Balm",
							"Bluebell",
							"Cresheim Creek",
							"Cedar Berry",
							"Fringetree",
							"Ganoga Falls",
							"Gingko Nut",
							"Gray Birch",
							"Juneberry",
							"Pachysandra",
							"Porcupine",
							"Purple Loosestrife",
							"Red Squirrel",
							"River Oat",
							"Scarlet Oak",
							"Steelhead",
							"Wild Geranium",
							"Wissahickon",
							"Wood Dove",
							"Wood Fern"
						]
					},
					{
						"id": 2965366636662,
						"product_id": 1919179161718,
						"name": "Size",
						"position": 2,
						"values": [
							"Skein",
							"MiniSkein"
						]
					}
				],
				totalVariants: 1,
				selectedVariant: [{
					"id": 18250174365814,
					"product_id": 1919179161718,
					"title": "Ash \/ Skein",
					"price": "19.25",
					"sku": "Local:LAsh",
					"position": 2,
					"inventory_policy": "deny",
					"compare_at_price": null,
					"fulfillment_service": "manual",
					"inventory_management": "shopify",
					"option1": "Ash",
					"option2": "Skein",
					"option3": null,
					"created_at": "2018-07-30T15:59:55-04:00",
					"updated_at": "2018-09-24T09:56:26-04:00",
					"taxable": true,
					"barcode": "24526401",
					"grams": 127,
					"image_id": 5622247194742,
					"inventory_quantity": 28,
					"weight": 0.28,
					"weight_unit": "lb",
					"inventory_item_id": 18482253529206,
					"old_inventory_quantity": 28,
					"requires_shipping": true
				}],
				variants: [
					{
						"id": 18250174333046,
						"product_id": 1919179161718,
						"title": "Alumroot \/ Skein",
						"price": "19.25",
						"sku": "Local:LAlumroot",
						"position": 1,
						"inventory_policy": "deny",
						"compare_at_price": null,
						"fulfillment_service": "manual",
						"inventory_management": "shopify",
						"option1": "Alumroot",
						"option2": "Skein",
						"option3": null,
						"created_at": "2018-07-30T15:59:55-04:00",
						"updated_at": "2018-09-24T09:56:25-04:00",
						"taxable": true,
						"barcode": "25125316",
						"grams": 127,
						"image_id": 5622247030902,
						"inventory_quantity": 15,
						"weight": 0.28,
						"weight_unit": "lb",
						"inventory_item_id": 18482253496438,
						"old_inventory_quantity": 15,
						"requires_shipping": true
					},
					{
						"id": 18250174365814,
						"product_id": 1919179161718,
						"title": "Ash \/ Skein",
						"price": "19.25",
						"sku": "Local:LAsh",
						"position": 2,
						"inventory_policy": "deny",
						"compare_at_price": null,
						"fulfillment_service": "manual",
						"inventory_management": "shopify",
						"option1": "Ash",
						"option2": "Skein",
						"option3": null,
						"created_at": "2018-07-30T15:59:55-04:00",
						"updated_at": "2018-09-24T09:56:26-04:00",
						"taxable": true,
						"barcode": "24526401",
						"grams": 127,
						"image_id": 5622247194742,
						"inventory_quantity": 28,
						"weight": 0.28,
						"weight_unit": "lb",
						"inventory_item_id": 18482253529206,
						"old_inventory_quantity": 28,
						"requires_shipping": true
					},
					{
						"id": 18250174398582,
						"product_id": 1919179161718,
						"title": "Basswood \/ Skein",
						"price": "19.25",
						"sku": "Local:LBasswood",
						"position": 3,
						"inventory_policy": "deny",
						"compare_at_price": null,
						"fulfillment_service": "manual",
						"inventory_management": "shopify",
						"option1": "Basswood",
						"option2": "Skein",
						"option3": null,
						"created_at": "2018-07-30T15:59:55-04:00",
						"updated_at": "2018-09-24T09:56:26-04:00",
						"taxable": true,
						"barcode": "25123266",
						"grams": 127,
						"image_id": 5622247096438,
						"inventory_quantity": 81,
						"weight": 0.28,
						"weight_unit": "lb",
						"inventory_item_id": 18482253561974,
						"old_inventory_quantity": 81,
						"requires_shipping": true
					},
					{
						"id": 18250174431350,
						"product_id": 1919179161718,
						"title": "Bee-Balm \/ Skein",
						"price": "19.25",
						"sku": "Local:LBee-Balm",
						"position": 4,
						"inventory_policy": "deny",
						"compare_at_price": null,
						"fulfillment_service": "manual",
						"inventory_management": "shopify",
						"option1": "Bee-Balm",
						"option2": "Skein",
						"option3": null,
						"created_at": "2018-07-30T15:59:55-04:00",
						"updated_at": "2018-09-24T09:56:26-04:00",
						"taxable": true,
						"barcode": "25357185",
						"grams": 127,
						"image_id": 5622246932598,
						"inventory_quantity": 28,
						"weight": 0.28,
						"weight_unit": "lb",
						"inventory_item_id": 18482253594742,
						"old_inventory_quantity": 28,
						"requires_shipping": true
					},
					{
						"id": 18250174464118,
						"product_id": 1919179161718,
						"title": "Bluebell \/ Skein",
						"price": "19.25",
						"sku": "Local:LBluebell",
						"position": 5,
						"inventory_policy": "deny",
						"compare_at_price": null,
						"fulfillment_service": "manual",
						"inventory_management": "shopify",
						"option1": "Bluebell",
						"option2": "Skein",
						"option3": null,
						"created_at": "2018-07-30T15:59:55-04:00",
						"updated_at": "2018-09-24T09:56:26-04:00",
						"taxable": true,
						"barcode": "25120048",
						"grams": 127,
						"image_id": 5622246572150,
						"inventory_quantity": 39,
						"weight": 0.28,
						"weight_unit": "lb",
						"inventory_item_id": 18482253627510,
						"old_inventory_quantity": 39,
						"requires_shipping": true
					},
					{
						"id": 18250174496886,
						"product_id": 1919179161718,
						"title": "Cresheim Creek \/ Skein",
						"price": "19.25",
						"sku": "Local:LCresheimCreek",
						"position": 6,
						"inventory_policy": "deny",
						"compare_at_price": null,
						"fulfillment_service": "manual",
						"inventory_management": "shopify",
						"option1": "Cresheim Creek",
						"option2": "Skein",
						"option3": null,
						"created_at": "2018-07-30T15:59:55-04:00",
						"updated_at": "2018-09-24T09:56:26-04:00",
						"taxable": true,
						"barcode": "25572673",
						"grams": 127,
						"image_id": 5622246539382,
						"inventory_quantity": 46,
						"weight": 0.28,
						"weight_unit": "lb",
						"inventory_item_id": 18482253660278,
						"old_inventory_quantity": 46,
						"requires_shipping": true
					},
					{
						"id": 18250174529654,
						"product_id": 1919179161718,
						"title": "Cedar Berry \/ Skein",
						"price": "19.25",
						"sku": "Local:LCedarBerry",
						"position": 7,
						"inventory_policy": "deny",
						"compare_at_price": null,
						"fulfillment_service": "manual",
						"inventory_management": "shopify",
						"option1": "Cedar Berry",
						"option2": "Skein",
						"option3": null,
						"created_at": "2018-07-30T15:59:55-04:00",
						"updated_at": "2018-09-24T09:56:26-04:00",
						"taxable": true,
						"barcode": "25107234",
						"grams": 127,
						"image_id": 5622246506614,
						"inventory_quantity": 1,
						"weight": 0.28,
						"weight_unit": "lb",
						"inventory_item_id": 18482253693046,
						"old_inventory_quantity": 1,
						"requires_shipping": true
					},
					{
						"id": 18250174562422,
						"product_id": 1919179161718,
						"title": "Fringetree \/ Skein",
						"price": "19.25",
						"sku": "Local:LFringetree",
						"position": 8,
						"inventory_policy": "deny",
						"compare_at_price": null,
						"fulfillment_service": "manual",
						"inventory_management": "shopify",
						"option1": "Fringetree",
						"option2": "Skein",
						"option3": null,
						"created_at": "2018-07-30T15:59:55-04:00",
						"updated_at": "2018-09-24T09:56:26-04:00",
						"taxable": true,
						"barcode": "4707304",
						"grams": 127,
						"image_id": 5622246834294,
						"inventory_quantity": 79,
						"weight": 0.28,
						"weight_unit": "lb",
						"inventory_item_id": 18482253725814,
						"old_inventory_quantity": 79,
						"requires_shipping": true
					},
					{
						"id": 18250174595190,
						"product_id": 1919179161718,
						"title": "Ganoga Falls \/ Skein",
						"price": "19.25",
						"sku": "Local:LGanogaFalls",
						"position": 9,
						"inventory_policy": "deny",
						"compare_at_price": null,
						"fulfillment_service": "manual",
						"inventory_management": "shopify",
						"option1": "Ganoga Falls",
						"option2": "Skein",
						"option3": null,
						"created_at": "2018-07-30T15:59:55-04:00",
						"updated_at": "2018-09-24T09:56:26-04:00",
						"taxable": true,
						"barcode": "3827197",
						"grams": 127,
						"image_id": 5622246473846,
						"inventory_quantity": 50,
						"weight": 0.28,
						"weight_unit": "lb",
						"inventory_item_id": 18482253758582,
						"old_inventory_quantity": 50,
						"requires_shipping": true
					},
					{
						"id": 18250174627958,
						"product_id": 1919179161718,
						"title": "Gingko Nut \/ Skein",
						"price": "19.25",
						"sku": "Local:LGingkoNut",
						"position": 10,
						"inventory_policy": "deny",
						"compare_at_price": null,
						"fulfillment_service": "manual",
						"inventory_management": "shopify",
						"option1": "Gingko Nut",
						"option2": "Skein",
						"option3": null,
						"created_at": "2018-07-30T15:59:55-04:00",
						"updated_at": "2018-09-24T09:56:26-04:00",
						"taxable": true,
						"barcode": "1628529",
						"grams": 127,
						"image_id": 5622246703222,
						"inventory_quantity": 4,
						"weight": 0.28,
						"weight_unit": "lb",
						"inventory_item_id": 18482253791350,
						"old_inventory_quantity": 4,
						"requires_shipping": true
					},
					{
						"id": 18250174660726,
						"product_id": 1919179161718,
						"title": "Gray Birch \/ Skein",
						"price": "19.25",
						"sku": "Local:LGrayBirch",
						"position": 11,
						"inventory_policy": "deny",
						"compare_at_price": null,
						"fulfillment_service": "manual",
						"inventory_management": "shopify",
						"option1": "Gray Birch",
						"option2": "Skein",
						"option3": null,
						"created_at": "2018-07-30T15:59:55-04:00",
						"updated_at": "2018-09-24T09:56:26-04:00",
						"taxable": true,
						"barcode": "25120772",
						"grams": 127,
						"image_id": 5622247161974,
						"inventory_quantity": 57,
						"weight": 0.28,
						"weight_unit": "lb",
						"inventory_item_id": 18482253824118,
						"old_inventory_quantity": 57,
						"requires_shipping": true
					},
					{
						"id": 18250174693494,
						"product_id": 1919179161718,
						"title": "Juneberry \/ Skein",
						"price": "19.25",
						"sku": "Local:LJuneberry",
						"position": 12,
						"inventory_policy": "deny",
						"compare_at_price": null,
						"fulfillment_service": "manual",
						"inventory_management": "shopify",
						"option1": "Juneberry",
						"option2": "Skein",
						"option3": null,
						"created_at": "2018-07-30T15:59:55-04:00",
						"updated_at": "2018-09-24T09:56:26-04:00",
						"taxable": true,
						"barcode": "25792641",
						"grams": 127,
						"image_id": 5622246998134,
						"inventory_quantity": 49,
						"weight": 0.28,
						"weight_unit": "lb",
						"inventory_item_id": 18482253856886,
						"old_inventory_quantity": 49,
						"requires_shipping": true
					},
					{
						"id": 18250174726262,
						"product_id": 1919179161718,
						"title": "Pachysandra \/ Skein",
						"price": "19.25",
						"sku": "Local:LPachysandra",
						"position": 13,
						"inventory_policy": "deny",
						"compare_at_price": null,
						"fulfillment_service": "manual",
						"inventory_management": "shopify",
						"option1": "Pachysandra",
						"option2": "Skein",
						"option3": null,
						"created_at": "2018-07-30T15:59:55-04:00",
						"updated_at": "2018-09-24T09:56:26-04:00",
						"taxable": true,
						"barcode": "25296705",
						"grams": 127,
						"image_id": 5622246637686,
						"inventory_quantity": 29,
						"weight": 0.28,
						"weight_unit": "lb",
						"inventory_item_id": 18482253889654,
						"old_inventory_quantity": 29,
						"requires_shipping": true
					},
					{
						"id": 18250174759030,
						"product_id": 1919179161718,
						"title": "Porcupine \/ Skein",
						"price": "19.25",
						"sku": "Local:LPorcupine",
						"position": 14,
						"inventory_policy": "deny",
						"compare_at_price": null,
						"fulfillment_service": "manual",
						"inventory_management": "shopify",
						"option1": "Porcupine",
						"option2": "Skein",
						"option3": null,
						"created_at": "2018-07-30T15:59:55-04:00",
						"updated_at": "2018-09-24T09:56:26-04:00",
						"taxable": true,
						"barcode": "3824865",
						"grams": 127,
						"image_id": 5622247129206,
						"inventory_quantity": 82,
						"weight": 0.28,
						"weight_unit": "lb",
						"inventory_item_id": 18482253922422,
						"old_inventory_quantity": 82,
						"requires_shipping": true
					},
					{
						"id": 18250174791798,
						"product_id": 1919179161718,
						"title": "Purple Loosestrife \/ Skein",
						"price": "19.25",
						"sku": "Local:LPurpleLoosestrife",
						"position": 15,
						"inventory_policy": "deny",
						"compare_at_price": null,
						"fulfillment_service": "manual",
						"inventory_management": "shopify",
						"option1": "Purple Loosestrife",
						"option2": "Skein",
						"option3": null,
						"created_at": "2018-07-30T15:59:55-04:00",
						"updated_at": "2018-09-24T09:56:26-04:00",
						"taxable": true,
						"barcode": "3828899",
						"grams": 127,
						"image_id": 5622247063670,
						"inventory_quantity": 34,
						"weight": 0.28,
						"weight_unit": "lb",
						"inventory_item_id": 18482253955190,
						"old_inventory_quantity": 34,
						"requires_shipping": true
					},
					{
						"id": 18250174824566,
						"product_id": 1919179161718,
						"title": "Red Squirrel \/ Skein",
						"price": "19.25",
						"sku": "Local:LRedSquirrel",
						"position": 16,
						"inventory_policy": "deny",
						"compare_at_price": null,
						"fulfillment_service": "manual",
						"inventory_management": "shopify",
						"option1": "Red Squirrel",
						"option2": "Skein",
						"option3": null,
						"created_at": "2018-07-30T15:59:55-04:00",
						"updated_at": "2018-09-24T09:56:26-04:00",
						"taxable": true,
						"barcode": "1654417",
						"grams": 127,
						"image_id": 5622246768758,
						"inventory_quantity": 17,
						"weight": 0.28,
						"weight_unit": "lb",
						"inventory_item_id": 18482253987958,
						"old_inventory_quantity": 17,
						"requires_shipping": true
					},
					{
						"id": 18250174857334,
						"product_id": 1919179161718,
						"title": "River Oat \/ Skein",
						"price": "19.25",
						"sku": "Local:LRiverOat",
						"position": 17,
						"inventory_policy": "deny",
						"compare_at_price": null,
						"fulfillment_service": "manual",
						"inventory_management": "shopify",
						"option1": "River Oat",
						"option2": "Skein",
						"option3": null,
						"created_at": "2018-07-30T15:59:55-04:00",
						"updated_at": "2018-09-24T09:56:26-04:00",
						"taxable": true,
						"barcode": "25114934",
						"grams": 127,
						"image_id": 5622246735990,
						"inventory_quantity": 90,
						"weight": 0.28,
						"weight_unit": "lb",
						"inventory_item_id": 18482254020726,
						"old_inventory_quantity": 90,
						"requires_shipping": true
					},
					{
						"id": 18250174890102,
						"product_id": 1919179161718,
						"title": "Scarlet Oak \/ Skein",
						"price": "19.25",
						"sku": "Local:LScarletOak",
						"position": 18,
						"inventory_policy": "deny",
						"compare_at_price": null,
						"fulfillment_service": "manual",
						"inventory_management": "shopify",
						"option1": "Scarlet Oak",
						"option2": "Skein",
						"option3": null,
						"created_at": "2018-07-30T15:59:55-04:00",
						"updated_at": "2018-09-24T09:56:26-04:00",
						"taxable": true,
						"barcode": "25122632",
						"grams": 127,
						"image_id": 5622246965366,
						"inventory_quantity": 50,
						"weight": 0.28,
						"weight_unit": "lb",
						"inventory_item_id": 18482254053494,
						"old_inventory_quantity": 50,
						"requires_shipping": true
					},
					{
						"id": 18250174922870,
						"product_id": 1919179161718,
						"title": "Steelhead \/ Skein",
						"price": "19.25",
						"sku": "Local:LSteelhead",
						"position": 19,
						"inventory_policy": "deny",
						"compare_at_price": null,
						"fulfillment_service": "manual",
						"inventory_management": "shopify",
						"option1": "Steelhead",
						"option2": "Skein",
						"option3": null,
						"created_at": "2018-07-30T15:59:55-04:00",
						"updated_at": "2018-09-24T09:56:26-04:00",
						"taxable": true,
						"barcode": "1660567",
						"grams": 127,
						"image_id": 5622246441078,
						"inventory_quantity": 70,
						"weight": 0.28,
						"weight_unit": "lb",
						"inventory_item_id": 18482254086262,
						"old_inventory_quantity": 70,
						"requires_shipping": true
					},
					{
						"id": 18250174955638,
						"product_id": 1919179161718,
						"title": "Wild Geranium \/ Skein",
						"price": "19.25",
						"sku": "Local:LWildGeranium",
						"position": 20,
						"inventory_policy": "deny",
						"compare_at_price": null,
						"fulfillment_service": "manual",
						"inventory_management": "shopify",
						"option1": "Wild Geranium",
						"option2": "Skein",
						"option3": null,
						"created_at": "2018-07-30T15:59:55-04:00",
						"updated_at": "2018-09-24T09:56:26-04:00",
						"taxable": true,
						"barcode": "96429195",
						"grams": 127,
						"image_id": 5622246899830,
						"inventory_quantity": 64,
						"weight": 0.28,
						"weight_unit": "lb",
						"inventory_item_id": 18482254119030,
						"old_inventory_quantity": 64,
						"requires_shipping": true
					},
					{
						"id": 18250174988406,
						"product_id": 1919179161718,
						"title": "Wissahickon \/ Skein",
						"price": "19.25",
						"sku": "Local:LWissahickon",
						"position": 21,
						"inventory_policy": "deny",
						"compare_at_price": null,
						"fulfillment_service": "manual",
						"inventory_management": "shopify",
						"option1": "Wissahickon",
						"option2": "Skein",
						"option3": null,
						"created_at": "2018-07-30T15:59:55-04:00",
						"updated_at": "2018-09-24T09:56:26-04:00",
						"taxable": true,
						"barcode": "3824979",
						"grams": 127,
						"image_id": 5622246604918,
						"inventory_quantity": 62,
						"weight": 0.28,
						"weight_unit": "lb",
						"inventory_item_id": 18482254151798,
						"old_inventory_quantity": 62,
						"requires_shipping": true
					},
					{
						"id": 18250175021174,
						"product_id": 1919179161718,
						"title": "Wood Dove \/ Skein",
						"price": "19.25",
						"sku": "Local:LWoodDove",
						"position": 22,
						"inventory_policy": "deny",
						"compare_at_price": null,
						"fulfillment_service": "manual",
						"inventory_management": "shopify",
						"option1": "Wood Dove",
						"option2": "Skein",
						"option3": null,
						"created_at": "2018-07-30T15:59:55-04:00",
						"updated_at": "2018-09-24T09:56:26-04:00",
						"taxable": true,
						"barcode": "25491457",
						"grams": 127,
						"image_id": 5622246867062,
						"inventory_quantity": 30,
						"weight": 0.28,
						"weight_unit": "lb",
						"inventory_item_id": 18482254184566,
						"old_inventory_quantity": 30,
						"requires_shipping": true
					},
					{
						"id": 18250175053942,
						"product_id": 1919179161718,
						"title": "Wood Fern \/ Skein",
						"price": "19.25",
						"sku": "Local:LWoodFern",
						"position": 23,
						"inventory_policy": "deny",
						"compare_at_price": null,
						"fulfillment_service": "manual",
						"inventory_management": "shopify",
						"option1": "Wood Fern",
						"option2": "Skein",
						"option3": null,
						"created_at": "2018-07-30T15:59:55-04:00",
						"updated_at": "2018-09-24T09:56:26-04:00",
						"taxable": true,
						"barcode": "1673987",
						"grams": 127,
						"image_id": 5622246670454,
						"inventory_quantity": 68,
						"weight": 0.28,
						"weight_unit": "lb",
						"inventory_item_id": 18482254217334,
						"old_inventory_quantity": 68,
						"requires_shipping": true
					},
					{
						"id": 19612317679734,
						"product_id": 1919179161718,
						"title": "Alumroot \/ MiniSkein",
						"price": "9.25",
						"sku": "",
						"position": 24,
						"inventory_policy": "deny",
						"compare_at_price": null,
						"fulfillment_service": "manual",
						"inventory_management": "shopify",
						"option1": "Alumroot",
						"option2": "MiniSkein",
						"option3": null,
						"created_at": "2018-09-24T09:58:43-04:00",
						"updated_at": "2018-09-24T10:02:27-04:00",
						"taxable": true,
						"barcode": "",
						"grams": 127,
						"image_id": 5622246998134,
						"inventory_quantity": 1,
						"weight": 0.28,
						"weight_unit": "lb",
						"inventory_item_id": 19972806049910,
						"old_inventory_quantity": 1,
						"requires_shipping": true
					},
					{
						"id": 19612326559862,
						"product_id": 1919179161718,
						"title": "Basswood \/ MiniSkein",
						"price": "9.25",
						"sku": "",
						"position": 25,
						"inventory_policy": "deny",
						"compare_at_price": null,
						"fulfillment_service": "manual",
						"inventory_management": "shopify",
						"option1": "Basswood",
						"option2": "MiniSkein",
						"option3": null,
						"created_at": "2018-09-24T09:59:09-04:00",
						"updated_at": "2018-09-24T10:01:43-04:00",
						"taxable": true,
						"barcode": "",
						"grams": 127,
						"image_id": 5622246473846,
						"inventory_quantity": 1,
						"weight": 0.28,
						"weight_unit": "lb",
						"inventory_item_id": 19972816797814,
						"old_inventory_quantity": 1,
						"requires_shipping": true
					},
					{
						"id": 19612361654390,
						"product_id": 1919179161718,
						"title": "Ash \/ MiniSkein",
						"price": "9.25",
						"sku": "",
						"position": 26,
						"inventory_policy": "deny",
						"compare_at_price": null,
						"fulfillment_service": "manual",
						"inventory_management": "shopify",
						"option1": "Ash",
						"option2": "MiniSkein",
						"option3": null,
						"created_at": "2018-09-24T10:00:27-04:00",
						"updated_at": "2018-09-24T10:00:27-04:00",
						"taxable": true,
						"barcode": "",
						"grams": 127,
						"image_id": null,
						"inventory_quantity": 1,
						"weight": 0.28,
						"weight_unit": "lb",
						"inventory_item_id": 19972851040374,
						"old_inventory_quantity": 1,
						"requires_shipping": true
					}
				],
			}
		}
	}

	Object.defineProperty(Array.prototype, 'unique', {
		enumerable: false,
		configurable: false,
		writable: false,
		value: function() {
			var a = this.concat();
			for(var i=0; i<a.length; ++i) {
				for(var j=i+1; j<a.length; ++j) {
					if(a[i] === a[j])
						a.splice(j--, 1);
				}
			}

			return a;
		}
	});
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" type="text/scss"  >
//@import "../assets/g-Patternlab/config/variables";
 // @import "../assets/g-Patternlab/config/";
//@import "../assets/g-Patternlab-config.json";
.multiselect__tags{
  background: green;
}
.multiselect__content-wrapper{
  display: block;
  background: yellow;
}
.optionbutton{
  border: 2px solid red;
}

$generate-swatch-classes: false!default;
$generate-type-classes: true!default;
$generate-scheme-classes:true!default;
$generate-utility-padding: true!default;
$generate-utility-static:true!default;
$generate-components:FALSE!default;
</style>
