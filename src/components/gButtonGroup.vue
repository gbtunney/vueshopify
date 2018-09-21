<template>
	<div class="gButtonGroup" v-bind:maxSelected="MaxSelected">
		{{SelectedCount}}

		<li v-for="item in Items">{{item.id}}hi</li>

		<gToggleButton v-for="item in Items" v-bind:key="getRandomInt()" v-on:changed="updateSelected"
		               v-bind:guid="item.id" v-bind:active="item.active"  v-bind:disabled="item.disabled"
		               v-bind:dataObj="item" message="GILLIAN CHILD COMPONENT"></gToggleButton>
		<vue-numeric-input  :min="1" :max="1000" :step="2"></vue-numeric-input>

	</div>
</template>


</template>

<script type="text/javascript">

	import Vue from 'vue';
	import gToggleButton from '@/components/gToggleButton.vue';
	import VueNumericInput from 'vue-numeric-input'

	export default {
		name: 'gButtonGroup',
		components: {
			gToggleButton,
			VueNumericInput
		}, props: {
			maxSelected: Number,
			buttons:Array
		},
		updated: function(evt) {
console.log("SELECTION UPDATED");
		},
		created: function(evt) {
			this.MaxSelected = this.maxSelected;

			console.log("BUTTON GROUP ");
			//this.Items = this.buttons;
			this.Items = this.$data.items.map(item => Object.assign({testing: "hihi", id: this.getRandomInt() }, item) );
			console.log("HERE!!!!!!!!!!!!!!!!!!!!!!!!!!!");
			console.log(this.Items);
this.Items = [];
			this.$nextTick(function() {
				//this.updateSelectedStatus();

			})
		},
		watch: {
			// whenever question changes, this function will run
			selected: function (newQuestion, oldQuestion) {
				//this.answer = 'Waiting for you to stop typing...'
				//this.debouncedGetAnswer()
				console.log("selected chnanged__________________________________--");
				console.log(newQuestion );
				console.log(oldQuestion );
				//this.selected = newQuestion;

			}
		},

		computed: {
			ButtonCount: function() {
				return this.$children.length;
			},SelectedCount: function() {
				return this.$data.selected.length;
			},
			Name: function() {
				return this.$options._componentTag;
			},
			isMaxSelected: function() {
			if ( this.$data.selected.length >= this.$data._maxSelected){
				return true;
			}else{
				return false;
			}
				},

			MaxSelected: {

				get: function() {
					return this.$data._maxSelected;
				},
				// setter
				set: function(newValue) {
					this.$data._maxSelected = newValue;
				}
			},
			TestMsg: {
				get: function() {
					return this.$data.testString;
				},
				// setter
				set: function(newValue) {
					this.$data.testString = newValue;
				}
			},Items: {
				get: function() {
					return this.$data._items;
				},
				// setter
				set: function(newValue) {
					this.$data._items = newValue;
				}
			},
			Selected: {
				get: function() {
					return this.$data.selected;
				},
				// setter
				set: function(newValue) {

					this.$data.selected = newValue;

					//this.SelectedCount= ;
				}
			},
			SelectedMessage: function() {
				if (this.$data.selected){
					return `THERE ARE ITEMS ${this.Selected.length} SELECTED`
				} else {
					return "none selected";
				}
			}
		},
		methods: {
			getRandomInt: function(min = 0, max = 999999999999) {
				return Math.floor(Math.random() * (max - min + 1)) + min;
			},
			updateSelected: function(vo, data,data2) {
				//this.updateSelectedStatus();
console.log( data.active);
				console.log( this.$data.items);

				var newArr = [];
				for ( var i =0; i<this.$data.items.length;i++){


					///if ( )
				/*	if ( (this.SelectedCount > (this.MaxSelected)) ){
						console.log('selected greater than.');
					}else if ( (this.SelectedCount < (this.MaxSelected)) ){

						console.log('selected less than or equal too  .');

						//!this.$data.items[i].active//!this.$data.items[i].active;
					}else if ( (this.SelectedCount == this.MaxSelected) ){
						console.log('count equal. ');

					}else{
						console.log('catch all . ');

					}*/




					if (this.$data.items[i].active){

						newArr.push(this.$data.items[i]);

					}else{
					//this.$data.items[i].disabled = true;
						if ( this.SelectedCount == (this.MaxSelected)){
						//	this.$data.items[i].disabled = true//!this.$data.items[i].active;
						}else{
							//this.$data.items[i].disabled = false//!this.$data.items[i].active;
							//this.$data.items[i].disabled = false;
							//this.$data.items[i].disabled = false;

						}
					}

				}


this.Selected=newArr;


				console.log('max status::: ' + this.isMaxSelected);



					///disable
					for ( var i =0; i<this.$data.items.length;i++) {

						if ( this.isMaxSelected){
							if (!this.$data.items[i].active){
								this.$data.items[i].disabled = true;
								///newArr.push(this.$data.items[i]);

							} else {
								this.$data.items[i].disabled = false;

							}
						}else{
							if (!this.$data.items[i].active){
								this.$data.items[i].disabled = false;
								///newArr.push(this.$data.items[i]);

							} else {
								this.$data.items[i].disabled = false;

							}

						}
					}


				this.$emit("changed", this,"hello");


			},
				updateSelectedStatus: function() {

				//var relevantChildren = this.getChildrenBy('gToggleButton');
				//	console.log(relevantChildren);


				var newArr = [];

				var disableArr = [];


					for (var i = 0; i < this.$children.length; i++) {


						if ( (this.$children[i]._isVue) && (this.$children[i].$refs.gToggleButton)&&( this.$children[i].isActive)){
							newArr.push(this.$children[i].Data);
						}else{
							disableArr.push(this.$children[i]);

						}
					}





					//= newArr;

					//this.SelectedCount =this.Selected.length;



				},
			greet: function(event) {

			}
		}
		,
		data() {
			return {
				selected: false,
				testString: "none here",
				counter: 1,
				_selectedCount: 0,
				_maxSelected: 0,
				_items: [{
					label: 'Todo A',
					message: 'Project A',
					done: false,
					active: true,
					disabled:false
				}, {
					label: 'Todo B',
					message: 'Project B',
					done: true,
					active: false
				}, {
					label: 'Todo C',
					message: 'Project C',
					done: false,
					active: false
				}, {
					label: 'Todo D',
					message: 'Project D',
					done: false,
				}],
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" type="text/scss" scoped>
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

	div {
		background: red;
	}

	$generate-swatch-classes: false !default;
	$generate-type-classes: true !default;
	$generate-scheme-classes: true !default;
	$generate-utility-padding: true !default;
	$generate-utility-static: true !default;
	$generate-components: FALSE !default;
</style>
