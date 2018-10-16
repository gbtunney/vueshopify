<template>

  <div class="product option selector">

      <gMutuallyExclusiveButtonGroup v-bind:items="Buttons">

      </gMutuallyExclusiveButtonGroup>
   <h2 v-on:click="testMethod()">Product </h2>
{{CurrentProduct.title}}
      <h2>Quantity</h2>
          <vue-numeric-input v-model="Quantity" :min="1" :max="1000" :step="2"></vue-numeric-input>
      <h2 >Current Variant</h2>
      {{CurrentVariant.id}} : {{CurrentVariant.title}}  {{CurrentVariant.price}}

      <h2>Variants</h2>
      <h5 v-bind:class="{ active: (CurrentVariant == variant) }" class="masterVariantPickerItem" v-on:click="variantClicked(variant)" v-for="variant in Variants">
          {{variant.title}}
      </h5>

     <hr>{{CurrentOptionsSelected}}
<ProductOptionSelector defaultVariantIndex="4" ref="singleOptionSelector1" v-on:optionchanged="singleProductOptionChanged" v-bind:optionID="1" v-bind:options="Options1"></ProductOptionSelector>
      <button v-on:click="testClick">test me</button>

      <ProductOptionSelector ref="singleOptionSelector2" v-on:optionchanged="singleProductOptionChanged" v-bind:optionID="2" v-bind:options="Options2"></ProductOptionSelector>

      options

  </div>

</template>

<script type="text/javascript">

	import Vue from 'vue';
	import VueNumericInput from 'vue-numeric-input'
	import CONFIG from '@/components/config.json'
	import ProductOptionSelector from '@/components/ProductOptionSelector'
    import gMutuallyExclusiveButtonGroup from '@/components/gMutuallyExclusiveButtonGroup'

	import store from '../store'

	export default {
  name: 'Product',
		components: {
			VueNumericInput,
			ProductOptionSelector,
			gMutuallyExclusiveButtonGroup
		},
		data () {
			return {
				_buttons: [{
					dataObj: {
						label: 'Todo A'
					},
					active: true,
					disabled: false
				}, {
					dataObj: {
						label: 'Todo B'
					},
					active: true,
					disabled: false
				}, {
					dataObj: {
						label: 'Todo C'
					},
					active: true,
					disabled: false
				}, {
					dataObj: {
						label: 'Todo D'
					},
					active: true,
					disabled: false
				}
				]
			}
		},
		created: function (evt) {

			//store.dispatch('GET_SHOPIFY_DATA');


		//	store.commit('SHOPIFY_DATA_INIT',CONFIG.products);

            let mystore = store;

		//	store.dispatch('SHOPIFY_DATA_COMPLETE').then(() => {
			//	this.singleOptionSelected(1,'Wild Geranium');
			//})

		},
		computed: {
			Buttons:  function() {
				return this.$data._buttons;
			},
			DATASTORE:  function() {
				return store.getters;
			},
			CurrentProduct:  function() {
				return this.DATASTORE['CurrentProduct'];
			},
			Options: function() {
                return this.DATASTORE['Options'];   ////TODO : TRY 2 options;
			},
			Options1: function() {
				return this.DATASTORE['Options'][0];   ////TODO : TRY 2 options;
			},
			Options2: function() {
				return this.DATASTORE['Options'][1];   ////TODO : TRY 2 options;
			},
			Variants:  function() {
				return this.DATASTORE['Variants'];

			},
            CurrentOptionsSelected: function(){
	            return this.DATASTORE['CurrentOptionsSelected'];
            },
			CurrentVariant: {
				get: function () {
					return this.DATASTORE['CurrentVariant'];
				},
				set: function (newValue) {
					store.commit('CURRENT_VARIANT_CHANGED',newValue);
				}
			},
			Quantity:  function() {
				return 5;

			}
  },
	methods: {

  	singleOptionSelected:function(index,value){
			store.commit('SINGLE_OPTION_SELECTED', {
				index: index,
				value: value
			});
        },
		testMethod:function(){

  		console.log("test clicked");

  		Vue.set(this.$data._buttons[1], "active", false);

        },
  	variantClicked:function(variant){
	    store.dispatch('incrementAsync', {
		    amount: 10
	    });
	    this.CurrentVariant = variant;
    },testClick: function (){


  		var optionMeta = this.$refs[`singleOptionSelector1`];
			console.log(optionMeta);

			optionMeta.setSelectedOption(4,true);
          //  optionsMeta.forceUpdate();

		},
		singleProductOptionChanged:function(optionMeta,selectedoptions){

			console.log('!!!!!!!!!!!!!!HIHIH' + optionMeta.optionID);

  		console.log(selectedoptions);



  		if (selectedoptions.length == 1 ){
		    store.commit('SINGLE_OPTION_SELECTED', {
			    index: optionMeta.optionID,
			    value: selectedoptions[0]
		    });



		         //console.log(optionMeta.Options['4']);
		   // console.log(this.$refs);

		   // optionMeta.productOptionChanged()
        }


/*		var variantsWithCriteria=	this.Variants.filter(function (variant) {
				for (var i=0;i<selectedoptions.length;i++){
					console.log(variant[optionMeta.ProductOptionKey]);
					if ( variant[optionMeta.ProductOptionKey]== selectedoptions[i].label ){
						console.log("found!");
						return true;
                    }
                }
                return false;
				//return replaceKey(variant,"sku","testsku");
			});*/

		/*if (variantsWithCriteria.length==1){
this.CurrentVariant = variantsWithCriteria[0];
		}else{
			console.log('none selected');
		}*/

        },
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" type="text/scss"  scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
div{
  background: red;
}

.masterVariantPickerItem{

    background: blue;

    &.active{
        background: lightblue;

    }
}
$generate-swatch-classes: false!default;
$generate-type-classes: true!default;
$generate-scheme-classes:true!default;
$generate-utility-padding: true!default;
$generate-utility-static:true!default;
$generate-components:FALSE!default;
</style>
