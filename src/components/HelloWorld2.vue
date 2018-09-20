<template>

  <div class="hello">
    <button v-on:click="greet">Greet</button>
    <li v-for="item in items">
      {{ item.label }}
    </li>

    <gToggleButton v-for="item in items" v-bind:data="item" v-bind:key="item.label"  v-bind:active="item.active" v-bind:label="item.label"  v-on:updated="greet" v-on:my-event="greet" v-on:change="greet"  link="http://google.com" >


    </gToggleButton>
    <vue-numeric-input  :min="1" :max="10" :step="2"></vue-numeric-input>

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
	import gToggleButton from '@/components/gToggleButton.vue';
	import VueNumericInput from 'vue-numeric-input'


	export default {
  name: 'HelloWorld2',
		components: {
			gToggleButton,
			VueNumericInput
		},
		updated: function (evt) {
			console.log("calling updating " + evt )

		},


	methods: {
		greet: function (event) {
			// `this` inside methods points to the Vue instance

console.log(this.$children);			// `event` is the native DOM event

            for ( var i = 0; i<this.$children.length; i++){
            	console.log(this.$children[i]);
            }
			if (event) {
				alert(event.target.tagName)
			}
		}
	}
	,
  data () {
    return {
      msg: 'GILLIAN PAGE',
	    items: [{
		    label: 'Todo A',
		    link: 'Project A',
		    done: false,
		    active:true
	    }, {
		    label: 'Todo B',
		    link: 'Project B',
		    done: true,
            active:true


	    }, {
		    label: 'Todo C',
		    project: 'Project C',
		    done: false,

		    active:true
	    }, {
		    label: 'Todo D',
		    project: 'Project D',
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
