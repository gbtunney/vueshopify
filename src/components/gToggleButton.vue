<template>

	<div v-on:click="isActive = !isActive" ref="gToggleButton"  v-bind:class="{ active: isActive, 'disabled': isDisabled }" class="g-Button">
		<slot>
			<div class="inner">

				<a v-if="Data.link" class="g-Button__link" v-bind:href="Data.link" >{{activeMessage}} gillian{{Data.myMessage}}</a>
				<button v-else>{{disabledMessage}}: {{activeMessage}}:{{Data.label}}</button>
			</div>
		</slot>
	</div>

</template>

<script type="text/javascript">
	import Vue from 'vue';

	let self = this;

	export default {
		name: 'gToggleButton',
		props: {
			message: {
				type: String
			},
			active: {
				type: Boolean,
				default: false
			},
			disabled: {
				type: Boolean,
				default: false
			},
			guid:{
				type: String
			},
			dataObj:{}
		},
			data: function() {
				return {
					_message: "NEW DEFAULT MESSAGE",
					_active:false,
					_disabled:false,
					_data: {myMessage:"Default DataMessage Message"}
				}
			},
			computed: {
				activeMessage: function () {
					if (this.$data._active){
						return 'CUrrently active component';
					}else{
						return 'not active';
					}
				},
				disabledMessage: function () {
					// `this` points to the vm instance
					if (this.$data._disabled){
						return 'CUrrently disabled component';
					}else{
						return 'not disabled';
					}
				},
			isActive: {
					// getter
					get: function () {
						return this.$data._active;
					},
					// setter
					set: function (newValue) {
						if (!this.$data._disabled ){
							this.$data._active = newValue;

						}
					}
				},
				isDisabled: {
					// getter
					get: function () {
						return this.$data._disabled;
					},
					// setter
					set: function (newValue) {
						//console.log('setting ' + newValue);
						this.$data._disabled = newValue;
					}
				},
			Message: {
					// getter
					get: function () {
						return this.$data._message +  this.$data._data.myMessage;
					},
					// setter
					set: function (newValue) {
						this.$data._message = newValue;
					}
				},

		Data: {
			// getter
			get: function () {
				return this.$data._data ;
			},
			// setter
			set: function (newValue) {

				if ( (typeof newValue == 'string') && (typeof JSON.parse( newValue ) == 'object')){
					this.Data = JSON.parse(this.dataObj);
					this.$data._data= JSON.parse( newValue );

				}else{
					this.$data._data= newValue;
				}
			}
		}
			}
			,
			created: function () {


				this.Data = this.dataObj;

				this.Message =	this.message ;
			this.isActive = this.active;
				this.isDisabled = this.disabled;

				//if (this.dataObj){
				//	this.Data = this.dataObj;
				//}

			},
			updated: function () {

console.log("---------------------_____CHANGED");
console.log(this.isActive);
				this.Data.active = this.isActive;
				console.log( this.guid);
				this.emitEvent("changed",this.Data);



			},
			methods:{
				emitEvent( event ) {
					this.$emit(event, this, this.Data);
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
