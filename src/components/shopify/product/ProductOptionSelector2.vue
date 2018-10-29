<template>
    <div>
        <h5>INVENTORY AVAILABLE {{selectedVariant.inventory_quantity}}</h5>
        <h5>PRICE {{selectedVariant.price}}</h5>
        <h5>SELECTED VARIANT {{selectedVariant.title}} VARIANT ID: {{selectedVariant.id}}</h5>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" class="icon"><path fill="#444" d="M18.64 17.02l-5.31-5.31c.81-1.08 1.26-2.43 1.26-3.87C14.5 4.06 11.44 1 7.75 1S1 4.06 1 7.75s3.06 6.75 6.75 6.75c1.44 0 2.79-.45 3.87-1.26l5.31 5.31c.45.45 1.26.54 1.71.09.45-.36.45-1.17 0-1.62zM3.25 7.75c0-2.52 1.98-4.5 4.5-4.5s4.5 1.98 4.5 4.5-1.98 4.5-4.5 4.5-4.5-1.98-4.5-4.5z"/></svg>

        <multiselect :options="Variants"
                     v-model="selectedVariant"
                     @input="variantSelectorChanged"
                     track-by="title"
                     label="title"
                     ref="multiselectmaster"
                     :taggable="false"
                     :multiple="false"
                     :closeOnSelect="false"
                     placeholder="Select one"
                     :searchable="true"
                     :allow-empty="false">

            <template slot="singleLabel" slot-scope="{ option }">
                <strong>{{ option.id }}</strong> ID:<strong>  {{ option.title }}</strong>
            </template>

        </multiselect>

        <pre class="language-json"><code>{{ selectedVariant  }}</code></pre>
        <button  v-on:created="clickMe">Click CLICK TO DISABLE SOME BUTTONS</button>

    </div>
</template>

<script type="text/javascript">

	import Vue from 'vue';
	import Multiselect from 'vue-multiselect'
	import { mapGetters } from 'vuex'
	import store from '@/store'

	export default {
		name: 'HelloWorld',
		components: {
			 Multiselect
		}, props: {
		},
        mounted:function(){
	      //  this.SelectedVariant=  this.VariantDictionary.get(this.variantID);
		},
        watch: {
	        selectedVariant: function (val) {

	        	if ( val !=  this.$data.selectedVariant){
		        this.$emit("variant", this.$data.selectedVariant);
                    }
			},
	        CurrentVariant: function (val) {
	        	console.log("CURRENTVARIANT",val);
		        this.$data.selectedVariant = val;
		        //this.$emit("variant", this.$data.selectedVariant);
	        }
		},
		computed: {
			SelectedVariant:{
				get: function(){
					return this.$data.selectedVariant;
                },
                set: function (newVal){
					this.$data.selectedVariant = newVal;  ///this.Variants[this.CurrentVariant._index];
                }
            },
			SelectedOptions: function() {
				return this.$data.selectedOptions;
			},
			...mapGetters([
				'VariantDictionary',
				'Variants',
				'Options',
				'OptionsDictionary',
				'CurrentVariant'
				// ...
			])
		},
		mounted: function() {
		},

		methods: {
			clickMe: function(){
				console.log("!!VARIANTS",this.Variants);
            },
			customLabel ({ title, desc }) {
				return `${title} – ${desc}`
			},
			_getVariantFromOptions: function() {


			},
			setSelectedOptions: function() {


			},
			variantSelectorChanged: function() {
				console.log("VUEX ::VARIANT CHANGED!!! ", this.$data.selectedVariant);
				//this.setSelectedOptions();

			}
		},
		filters: {
			toString: function (value) {
				if (!value) return ''
				value = value.toString()
				return value;
			}
		},
		data() {
			return {
				msg: 'Welcome to Your Vue.js App',
				totalOptions: 3,
				selectedOptions: [],
				options: [],
				totalVariants: 1,
				_defaultVariantIndex: 8,
				variants:[],
				selectedVariant:[],
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

    .option__swatch{
        background: yellow; border:1px solid black;
        height: 50px;width: 50px;
    }

    $generate-swatch-classes: false!default;
    $generate-type-classes: true!default;
    $generate-scheme-classes:true!default;
    $generate-utility-padding: true!default;
    $generate-utility-static:true!default;
    $generate-components:FALSE!default;
</style>
