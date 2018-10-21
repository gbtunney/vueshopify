<template>
  <div id="app">
    <img src="./assets/logo.png">


<product></product>
  </div>
</template>

<script>
	import Vue from 'vue'
	import product from '@/components/shopify/product/Product'


export default {
  name: 'App',
	components: {
		product

	},data:{
		_products:null
	},
	props:{

	},
	created:function(){

//  	console.log("data" +this.productsdata);
  	//this.$data._products= this.productsdata
	}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

  @debug 'sass';
</style>
