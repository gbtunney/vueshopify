<template>
    <div >
        <h5>SELECTED VARIANT {{selectedVariant.title}} VARIANT ID: {{selectedVariant.id}}</h5>
        <h5>INVENTORY AVAILABLE {{selectedVariant.inventory_quantity}} : PRICE {{selectedVariant.price}}</h5>

        <div class="attribute-panel" v-for="option,index in Options">
<h3> {{option.name}}</h3>        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" class="icon"><path fill="#444" d="M18.64 17.02l-5.31-5.31c.81-1.08 1.26-2.43 1.26-3.87C14.5 4.06 11.44 1 7.75 1S1 4.06 1 7.75s3.06 6.75 6.75 6.75c1.44 0 2.79-.45 3.87-1.26l5.31 5.31c.45.45 1.26.54 1.71.09.45-.36.45-1.17 0-1.62zM3.25 7.75c0-2.52 1.98-4.5 4.5-4.5s4.5 1.98 4.5 4.5-1.98 4.5-4.5 4.5-4.5-1.98-4.5-4.5z"/></svg>


            <multiselect :options="option.values"
                         v-model="selectedOptions[index]"
                         @input="_getVariantFromOptions()"
                         :class="option.slug"
                         :optionid="option.id"
                         v-on:close="selectClosed"

                         :key="index"
                         :taggable="false"
                         label="title"
                         ref="optionselect"
                         :multiple="false"
                         track-by="title"
                         :closeOnSelect="false"
                         :searchable="_getSearchable(option)"
                         :allow-empty="false">

                <template slot="singleLabel"  slot-scope="props">
                    <div class="optionbutton" >{{ props.option.title }}</div>
                </template>
                <template slot="option" class="" slot-scope="props">
                    <img class="option__image" :src="props.option.img">
                    <div class="option__swatch"  v-bind:style="{ backgroundColor: props.option.color}"  style=""></div>
                    <div class="option__desc"><span class="option__title">{{props.option.color}}{{_getIsDisabled(props.option)}} {{ props.option.title }}</span></div>
                </template>
            </multiselect>
        </div>



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
        watch: {
	        selectedVariant: function (val) {
		       // this.$emit("variant", this.$data.selectedVariant);
                		        this.$emit("variant", this.$data.selectedVariant);

		        if ( val !=  this.$data.selectedVariant){
			       // this.$data.selectedVariant=val;

                    }
			},
	        CurrentVariant: function (val) {
	        	console.log("CURRENTVARIANT",val);
		        this.$data.selectedVariant = val;

		        //this is the first time thru only.
		        this._setSelectedOptions();
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
		methods: {
			selectClosed: function() {
				console.log("select was deactivated");
			},
			_getSearchable: function (option){
				return ( option.slug == "color") ? true : false;
            },
			_getIsDisabled: function(option) {
				var inverseMap = new Map(this.OptionsDictionary)  //.delete(option.id);
				inverseMap.delete(option.parent_id);

				let newFilteredArray = this.Variants;
				let optionSelf = option;

				newFilteredArray = newFilteredArray.filter(function(variant) {

					var foundArray = [];

					var optionID = optionSelf.parent_id;
					var optionValueID = optionSelf.id;

					if (optionValueID == variant.options.get(optionID).id){
						return true;
					}
				})

				let self = this;
				inverseMap.forEach(function(value, key, map) {
					let currentSelectedOption = self.$data.selectedOptions[value._index];
					if (currentSelectedOption){
						newFilteredArray = newFilteredArray.filter(function(variant) {

							var foundArray = [];

							var optionID = currentSelectedOption.parent_id;
							var optionValueID = currentSelectedOption.id;

							if (optionValueID == variant.options.get(optionID).id){
								return true;
							}
						})
					}
				});

				if (newFilteredArray.length < 1){
					Vue.set(option, '$isDisabled', true);
				} else {
					Vue.set(option, '$isDisabled', false);
				}
				return;

			},
			clickMe: function(){
				console.log("!!VARIANTS",this.Variants);
            },
			customLabel ({ title, desc }) {
				return `${title} – ${desc}`
			},
			_getVariantFromOptions: function() {
				let self = this;
				let mySelectedOptions = this.$data.selectedOptions;
				let newFilteredArray = this.Variants;

				for (let i = 0; i < mySelectedOptions.length; i++) {

					newFilteredArray = newFilteredArray.filter(function(variant) {

						var foundArray = [];

						var optionID = mySelectedOptions[i].parent_id;
						var optionValueID = mySelectedOptions[i].id;

						if (optionValueID == variant.options.get(optionID).id){
							return true;
						}
					})
				}
				var arrayAfterFilter = newFilteredArray;
				if (arrayAfterFilter.length == 1){
					console.log(" VARIANT THAT MEET CRITERIA FOUND ", this.$data.selectedOptions)
					console.log(arrayAfterFilter[0]);

					if (arrayAfterFilter[0] != this.SelectedVariant){
						this.SelectedVariant = arrayAfterFilter[0];

					}
				} else if (arrayAfterFilter.length >= 1){
					console.log(` ${arrayAfterFilter.length}MASTER VARIANT THAT MATCHES `, this.$data.selectedOptions)
				} else {
					console.log("NO MASTER VARIANT THAT MATCHES ", this.$data.selectedOptions)
					this._setSelectedOptions();
				}
			},
			_setSelectedOptions: function() {

				var selectedArr = new Array()

				if (this.$data.selectedVariant){
					this.$data.selectedOptions = [];
					for (var i = 0; i < this.Options.length; i++) {
						this.$data.selectedOptions.push(this.$data.selectedVariant.options.get(this.Options[i].id));
					}
				}
			},
			variantSelectorChanged: function() {
				console.log("VUEX ::VARIANT CHANGED!!! ", this.$data.selectedVariant);
				this._setSelectedOptions();
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
				selectedVariant:[],
			}
		}
	}
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" type="text/scss"  >
    //@import "../assets/g-Patternlab/config/variables";
    // @import "../assets/g-Patternlab/config/";
    //@import "../assets/g-Patternlab-config.json";
    .multiselect__tags{
       // background: green;
    }
    .multiselect__content-wrapper{
        display: block;
       // background: yellow;
    }
    .optionbutton{
        border: 0px solid red;
    }

    .attribute-panel{
        background: #eeeeee;padding: 30px;
        margin-bottom: 20px;
    }
    .option__swatch{
       // background: yellow;
        border:1px solid black;
        height: 50px;width: 50px;
    }
    code{

    }
    .multiselect{
        .option__swatch{
            display: none;


        }
        &.color{
            .option__swatch{
                display: block;
            }
        }
    }

    $generate-swatch-classes: false!default;
    $generate-type-classes: true!default;
    $generate-scheme-classes:true!default;
    $generate-utility-padding: true!default;
    $generate-utility-static:true!default;
    $generate-components:FALSE!default;
</style>
