<template>

  <div class="hello">
    Product Single Option Selector

    <div>{{OptionName}}</div>
    <gButtonGroup v-on:changed="doaction" v-bind:buttons="values" class="properButtonGroup" :maxSelected="3">

    </gButtonGroup>


    <vue-numeric-input   v-model="value" :min="1" :max="1000" :step="2"></vue-numeric-input>

    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>
  </div>



</template>

<script type="text/javascript">

	import Vue from 'vue';
	import VueNumericInput from 'vue-numeric-input'
    import gButtonGroup from '@/components/gButtonGroup.vue';

	export default {
  name: 'HelloWorld2',
		components: {
			gButtonGroup,
			VueNumericInput
		},
		updated: function (evt) {

		},
		mounted: function () {

			//this.$data.items.forEach( item => console.log(Object.assign({testing: "hihi", id: this.getRandomInt() }, item) ));


			this.$nextTick(function () {
				// Code that will run only after the
				// entire view has been rendered
			})
		},
		created: function (evt) {

this.$nextTick(function(){  	this.updateSelectedStatus();
	//console.log("SETTING NEW SELECTED VALUE");
  //  var ref = {};



	/*for (var i = 0; i < this.$children.length; i++) {
		console.log(this.$children[i].Name);
		if ( this.$children[i].Name )
	}
*/

})
		},
		computed: {
			OptionName:function (){
				return this.$data._optionName;
            },
			OptionRef:function (){
				return `option${this.$data.position}`;
			},
			MyCount: {

				get: function () {
					return this.$data.value ;
				},
				// setter
				set: function (newValue) {


				//	this.$data.selected= newValue;

					this.$data.value = newValue

				}


			},
			Selected: {

				get: function () {
					return this.$data.selected ;
				},
				// setter
				set: function (newValue) {


						this.$data.selected= newValue;

				}


			},
			SelectedMessage: function () {
				console.log(this.selected);
			    if (this.$data.selected ){
			    	return `THERE ARE ITEMS ${this.Selected.length} SELECTED`
                }else{
			    	return "none selected";
                }
			}
  },
	methods: {
		getRandomInt: function(min = 0, max = 999999999999) {
			return Math.floor(Math.random() * (max - min + 1)) + min;
		},
		doaction: function (event, data) {
			// `this` inside methods points to the Vue instance

			console.log('!!ewewe');
			console.log(event)// `event` is the native DOM event

            this.MyCount = event.SelectedCount;
			//console.log(this.Selected);
			//this.updateSelectedStatus();


		},
		updateSelectedStatus: function (){
			console.log("updating status");
			var newArr = [];

			for ( var i = 0; i<this.$children.length; i++){
				console.log(this.$children[i].isActive);
				if ( this.$children[i].isActive ){
					newArr.push(this.$children[i].Data);
				}
			}
			if ( newArr.length == 0){
				this.Selected  = false;

			}else{
				this.Selected  = newArr;
            }

		},
		greet: function (event) {


		}
	}
	,
  data () {
    return {
    	value:99,
    	displayNumber:555,
    	selected:false,
      msg: 'GILLIAN PAGE',

	    id: 2643071074422,
	    product_id: 1919179161718,
	    _optionName: "Color",
	    position: 1,
	    values: [
		    "Alumroot",
		    "Ash",
		    "Basswood",
		    "Bee-Balm",
		    "Bluebell",
		    "Cresheim Creek",
		    "Cedar Berry",
		    "Fringetree",
		    "Ganoga Falls",
		    "Gingko Nut",
		    "Gray Birch",
		    "Juneberry",
		    "Pachysandra",
		    "Porcupine",
		    "Purple Loosestrife",
		    "Red Squirrel",
		    "River Oat",
		    "Scarlet Oak",
		    "Steelhead",
		    "Wild Geranium",
		    "Wissahickon",
		    "Wood Dove",
		    "Wood Fern"
	    ],
	    items: [{
		    label: 'Todo A',
		    message: 'Project A',
		    done: false,
		    active:false
	    }, {
		    label: 'Todo B',
		    message: 'Project B',
		    done: true,
            active:false
	    }, {
		    label: 'Todo C',
		    message: 'Project C',
		    done: false,

		    active:true
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
