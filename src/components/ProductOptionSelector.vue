<template>

  <div class="product option selector">
   <h2>Product Single Option Selector</h2>

    <div>{{ProductOptionName}}</div>
    <div v-if="SelectedOptionCount">Selected Count {{SelectedOptionCount }}</div>
    <gButtonGroup v-bind:mutuallyExclusive="false" ref="productOptionSelector" v-on:changed="productOptionChanged" v-bind:items="Options" class="properButtonGroup" :maxSelected="6">

    </gButtonGroup>

  </div>

</template>

<script type="text/javascript">

	import Vue from 'vue';
	import VueNumericInput from 'vue-numeric-input'
    import gButtonGroup from '@/components/gButtonGroup.vue';

	 function getRandomInt(min = 0, max = 999999999999) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	export default {
  name: 'ProductOptionSelector',
		components: {
			gButtonGroup,
			VueNumericInput
		},
		props: {
			options: Object,
			optionID: Number
		},
		created: function (evt) {
  	//INITIALIZE SELECTOR


	            this.OptionSelectorMeta = this.options;
			console.log( this.options);

			this.Options = this.OptionSelectorMeta.values.map(function(item) {
				var _guid = getRandomInt()
				return {dataObj: {label: item, guid: _guid}, guid: _guid};
			});
		},
		computed: {
			OptionSelectorMeta: {

				get: function () {
					return this.$data._optionSelectorMeta ;
				},
				// setter
				set: function (newValue) {
					this.$data._optionSelectorMeta = newValue;
				}
            },
			ProductOptionName:function (){
				if ( !this.$data._optionName){
					this.OptionSelectorMeta.name;
                }
				return this.$data._optionName;
            },
			ProductOptionKey:function (){
				return `option${this.OptionSelectorMeta.position}`;
			},
			Options: {
				get: function () {
					return this.$data._options ;
				},
				// setter
				set: function (newValue) {
					this.$data._options = newValue;
				}
			},
			SelectedOptions: {

				get: function () {
					return this.$data._selectedOptions ;
				},
				// setter
				set: function (newValue) {
						this.$data._selectedOptions= newValue;
				}
			},SelectedOptionCount: function () {
				if (this.$data._selectedOptions){
					return this.$data._selectedOptions.length;

				}
				return false;
			}
  },
	methods: {
		setSelectedOption: function (index,active) {
			// `this` inside methods points to the Vue instance


Vue.set(this.$data._options[index], "active",true)
            console.log(  this.$data._options);


			//this.SelectedOptions = new Array();
			//this.SelectedOptions.push(this.Options[index].Data);
			//this.$forceUpdate();
			//console.log(this.SelectedOptions)

			//this.SelectedOptions = data;
			//this.$emit("optionchanged", this, data);
		},
		productOptionChanged: function (selected) {
			// `this` inside methods points to the Vue instance
			console.log('******SINGLE OPTION CHANGE'+ selected)
            this.SelectedOptions = selected;
			this.$emit("optionchanged", this, selected);
		}
	},
  data () {
    return {
    	_optionSelectorMeta:{},
        _options:[]

    }
  }
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

$generate-swatch-classes: false!default;
$generate-type-classes: true!default;
$generate-scheme-classes:true!default;
$generate-utility-padding: true!default;
$generate-utility-static:true!default;
$generate-components:FALSE!default;
</style>
