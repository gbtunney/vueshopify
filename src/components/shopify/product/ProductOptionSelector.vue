<template>
    <div>
        <h5>INVENTORY AVAILABLE {{selectedVariant.inventory_quantity}}</h5>
        <h5>PRICE {{selectedVariant.price}}</h5>
        <h5>SELECTED VARIANT {{selectedVariant.title}} VARIANT ID: {{selectedVariant.id}}</h5>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" class="icon"><path fill="#444" d="M18.64 17.02l-5.31-5.31c.81-1.08 1.26-2.43 1.26-3.87C14.5 4.06 11.44 1 7.75 1S1 4.06 1 7.75s3.06 6.75 6.75 6.75c1.44 0 2.79-.45 3.87-1.26l5.31 5.31c.45.45 1.26.54 1.71.09.45-.36.45-1.17 0-1.62zM3.25 7.75c0-2.52 1.98-4.5 4.5-4.5s4.5 1.98 4.5 4.5-1.98 4.5-4.5 4.5-4.5-1.98-4.5-4.5z"/></svg>
        <multiselect v-for="option,index in options"
                     :options="option.values"
                     v-model="selectedOptions[index]"
                     @input="_getVariantFromOptions(index)"
                     :class="(option.name).toString().toLowerCase()"
                     :optionid="option.id"
                     v-on:close="selectClosed"
                     :key="index"
                     :taggable="false"
                     ref="optionselect"
                     :multiple="false"
                     :closeOnSelect="false"  :searchable="true" :allow-empty="false">


            <template slot="singleLabel"  slot-scope="props">
                <div class="optionbutton" >{{ props.option }}</div>
            </template>
            <template slot="option" slot-scope="props">
                <img class="option__image" :src="props.option.img">
                <div class="option__swatch" style=""></div>
                <div class="option__desc"><span class="option__title">{{ props.option }}</span></div>
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

	import store from '@/store'

	export default {
		name: 'HelloWorld',
		components: {
			 Multiselect
		}, props: {

		},
        created:function(){


			store.subscribe((mutation, state) => {
				if (mutation.type=="SET_CURRENT_PRODUCT"){
					this.$data.variants =state["_variants"];
					this.$data.options =state["_options"];
					console.log("CALLUBG DEFAULT VARIANT", state["_variants"]);

					if ( this.$data.selectedVariant.length<= 0 ){

						if (  this.$data._defaultVariantIndex && (this.$data.variants.length >= this.$data._defaultVariantIndex )){
							this.SelectedVariant=this.$data.variants[this.$data._defaultVariantIndex-1];
						}else{
							this.SelectedVariant=this.$data.variants[0];
						}
					}
					this.setSelectedOptions();
				}
			});
		},
        watch: {
	        selectedVariant: function (val) {
				//this.fullName = val + ' ' + this.lastName
		        this.$emit("variant", this.$data.selectedVariant);
			}
		},
		computed: {
			DATASTORE: function() {
				return store.getters;
			},
			SelectedVariant: {
				get: function() {


					if (this.$data.selectedVariant.hasOwnProperty('id') ){

						/// is a variant single object with id.
						return this.$data.selectedVariant;
					}


                    if (!this.$data.selectedVariant.hasOwnProperty('id')){

						if (this.$data.selectedVariant.length > 0){
							return this.$data.selectedVariant[this.$data.totalVariants - 1];
							throw "MULTIPLE SELECTION ";
						}
					}
					return this.$data.selectedVariant;
				},
				// setter
				set: function(newValue ) {
					//throw "SelectedVariant";

					if (!this.$data.selectedVariant  && newValue){
						throw "setting default!!!";
						this.$data.selectedVariant = newValue;

                        this.setSelectedOptions();

					}else{
						if (newValue != (this.$data.selectedVariant)){
							this.$data.selectedVariant = newValue;
						}
					}
				}
			},
			SelectedOptions: function() {
				return this.$data.selectedOptions;
			}
			,
			DATASTORE:  function() {
				return store.getters;
			},
		},
		mounted: function() {
		},

		methods: {
			customLabel ({ title, desc }) {
				return `${title} – ${desc}`
			},
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

						if ( !variantOptionVal ){
							console.log("OPTION NOT SET");
						}

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
						this.SelectedVariant = arrayAfterFilter[0];

					}
				} else if ( arrayAfterFilter.length >= 1 ){
					console.log(` ${arrayAfterFilter.length}MASTER VARIANT THAT MATCHES `, this.$data.selectedOptions)


				}else {

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
				console.log("VUEX ::VARIANT CHANGED!!! ",this.DATASTORE['CurrentVariant']);
				this.setSelectedOptions();

			},
			getOptionKey: (index) => `option${index}`,
			selectClosed: function() {
				console.log("select was deactivated");
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
				selectedVariant: [],
				_defaultVariantIndex: 8,
				variants:[],
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
