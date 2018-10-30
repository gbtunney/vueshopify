<template>
	<div>
		<swiper :options="swiperOption" ref="mySwiper">
			<!-- slides -->
			<swiper-slide v-for="image,index in images" :key="index">
				<img style="width:200px;height: 200px" :src="image.src" :alt="image.alt">
			</swiper-slide>

			<!-- Optional controls -->
			<div class="swiper-pagination"  slot="pagination"></div>
			<div class="swiper-button-prev" slot="button-prev"></div>
			<div class="swiper-button-next" slot="button-next"></div>
			<div class="swiper-scrollbar"   slot="scrollbar"></div>
		</swiper>
	</div>
</template>

<script type="text/javascript">

	import Vue from 'vue';
	import store from '@/store'
	import {swiper, swiperSlide} from 'vue-awesome-swiper'
	import { mapGetters } from 'vuex'

	export default {
		name: 'ProductImages',
		components: {
			swiper,
			swiperSlide
		}, props: {
			images: Array,
			currentImage: {required: false}
		},
		methods: {
			SlideTo: function(image_id) {
				var currentImage = this.ImagesDictionary.get(image_id.toString());
				console.log("IMAGES", currentImage);
				this.swiper.slideTo(currentImage._index, 1000, false)
			},
			GetCurrentSlideIndex: function() {

				var index = this.state._currentProduct.images.findIndex(function(image) {
					if (requestedImageID == image.id){
						return true;
					}
				});
			},
		},
		watch: {
			CurrentVariant: function(val) {
				console.log("imagesCURRENTVARIANT", val);
				this.SlideTo(val.image_id);
			}
		},
		computed: {

			swiper: function() {
				return this.$refs.mySwiper.swiper;
			},
			CurrentImageIndex: function() {

			},
			...mapGetters([
				'CurrentProduct',
				'CurrentVariant',
				'Images',
				'ImagesDictionary'
				// ...
			])
		},
		data() {

			return {
				msg: 'Welcome to Your Vue.js App',
				_productImages: [],
				_currentImage: undefined,
				_currentSlideIndex: 0,
				_images: undefined,
				swiperOption: {
					speed: 4000,
					spaceBetween: 100,
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev',
					},
					pagination: {
						el: '.swiper-pagination'
					}
				}
			}
		}
	}

</script>
<style src="swiper/dist/css/swiper.css"></style>



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
