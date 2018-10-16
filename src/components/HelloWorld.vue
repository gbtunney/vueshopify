<template>
  <div>
    <productOptionSelect v-on:variant="variantChanged">


    </productOptionSelect>

  </div>
</template>

<script type="text/javascript">

	import Vue from 'vue';
	import Multiselect from 'vue-multiselect'
	import productOptionSelect from '@/components/ProductOptionSelector.vue'
	import store from '../store'

	export default {
		name: 'HelloWorld',
		components: {
			 productOptionSelect
		},
        methods:{
			variantChanged: function(variant){

console.log(">>>>>>>>>>>.NEW VARIANT",variant)
            }
        },
		data() {
			return {
				msg: 'Welcome to Your Vue.js App'
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
