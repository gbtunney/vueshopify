<template>

	<div v-on:click="isActive = !isActive" v-bind:active="false" v-bind:class="{ active: isActive, 'disabled': isDisabled }" class="g-Button">
		<a class="g-Button__link" v-bind:href="link" >{{styleModifier}}:{{scheme}} : {{ label }}</a>

	</div>

</template>

<script type="text/javascript">
	import Vue from 'vue';

	import Vector from '@/components/icon-flame.svg'
	//Vue.component('vector', Vector);
	//var logoTwo = require('icon-flame.svg');
//<img v-bind:src="svgData" />

	let self = this;

	console.log(self);
	export default {
		name: 'gToggleButton',
		props: {
			label: String,
			link: String,
			scheme: {
				type: String,
				default: "dark scheme"
			},
			styleModifier: {
				type: String,
				default: "myflags"
			},
			active: Boolean,
			disabled: Boolean
		},
		data: function() {
			return {
				myTestVar: "testvar gillian",
				svgData: Vector}
		},
		created: function () {
			// `this` points to the vm instance
			//console.log('created' + 			atob(svgData));




		},
		updated: function (evt) {
			//console.log("calling updating " + evt )
			//console.log("calling updating " + JSON.stringify(this) )
			//console.log('a is: ' + evt  )

			//this.$emit('myEvent');
		//	this.$emit('myEvent',this);

			//this.$emit('change');
this.emitEvent();
			this.$nextTick(function () {
				// Code that will run only after the
				// entire view has been re-rendered
			})
		},
		methods:{
			emitEvent() {
console.log("emitting");
					this.$emit("updated");

			}
		},
		computed: {
			isActive: {
				// getter
				get: function () {
					return this.active;
				},
				// setter
				set: function (newValue) {
					console.log(newValue);
					this.active = newValue
				}
			},
			isDisabled: {
				// getter
				get: function () {
					return this.disabled;
				},
				// setter
				set: function (newValue) {
					console.log(newValue);
					this.disabled = newValue
				}
			},
			svgImage: {
				// getter
				get: function () {
					return atob(this).svgData;
				},
				// setter
				set: function (newValue) {
					this.svgData =newValue
				}
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" type="text/scss"  scoped>

	.g-Button{
		background: yellow;
		&.active{
		background: green;
	}
	}
</style>
