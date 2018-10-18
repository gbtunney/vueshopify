import ShopifyApi from "vuex-rest-api";

const SHOPIFY_API = new ShopifyApi({
	baseURL: "https://o-wool-stage.myshopify.com/",
	state: {
		products: []
	}
})
.get({
	action: "getProducts",
	property: "products",
	path: "/products.json",
	onSuccess(state, payload, axios, { params, data }) {
		// if you define the onSuccess function you have to set the state by yourself
	state.products = payload.data;
		console.log(`Post with id ${data} successfully fetched.`,payload.data);
	},
	onError(state, error, axios, { params, data }) {
		// if you define the onSuccess function you have to set the state by yourself
	//	state.post = null;
		throw "REST ERROR"
	}
})
.get({
	action: "getProduct",
	property: "product",
	path: ({ id }) => `/products/${id}.json`,
	onSuccess(state, payload, axios, { params, data }) {
		// if you define the onSuccess function you have to set the state by yourself
		state.post = payload.data;
		console.log(`Post with id ${params.id} successfully fetched.`);
	},
	onError(state, error, axios, { params, data }) {
		// if you define the onSuccess function you have to set the state by yourself
		state.post = null;
	}
})
.getStore();

export default SHOPIFY_API;
