// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import data from './data.json';
import { Slugify ,GDatamapper} from '@/gUtilities/main.js'
//import Product from './components/shopify/product/Product';
Vue.config.productionTip = false
const schema = require("schm");
import math from 'mathjs'
import isColor  from 'is-color';

var testProduct = {
	"id": "1919179161718",
	"title": "Local (worsted)",
	"body_html": "\u003cp\u003e\u003cstrong\u003eWorsted Weight\u003c\/strong\u003e\u003cbr\u003e\u003cbr\u003e\u003cstrong\u003eFiber Content:\u003c\/strong\u003e\u003cbr\u003e50% alpaca from local farms in NJ \u0026amp; PA\u003cbr\u003e50% certified organic merino\u003cbr\u003e\u003cstrong\u003ePut-up:\u003c\/strong\u003e 3.5 oz \/ 100g\u003cbr\u003e\u003cstrong\u003eYardage:\u003c\/strong\u003e 240 yds \/ 219m\u003cbr\u003e\u003cstrong\u003eGauge: \u003c\/strong\u003e18 - 20 sts = 4” \/ 10cm\u003cbr\u003e \u003cstrong\u003eNeedle:\u003c\/strong\u003e 7 - 9 US \/ 4.5 - 5.5mm \u003cbr\u003e\u003cbr\u003eHow about \u003ca href=\"\/collections\/yarns\/products\/local-natural-dyes\"\u003eLocal dyed with Natural Dyes\u003c\/a\u003e!?\u003c\/p\u003e\n\u003cp\u003eClick \u003ca href=\"\/collections\/byyarn-local\"\u003ehere\u003c\/a\u003e for patterns in Local\u003c\/p\u003e\n\u003cp\u003eWant to see all of the colors in person before ordering? \u003ca href=\"https:\/\/o-wool.myshopify.com\/collections\/yarns\/products\/color-cards\"\u003eOrder a Shade Card.\u003c\/a\u003e\u003c\/p\u003e\n\u003cmeta charset=\"utf-8\"\u003e\n\u003cp\u003e\u003cspan\u003eWant your yarn wound into balls? \u003c\/span\u003e\u003cspan\u003e\u003c\/span\u003e\u003ca href=\"\/collections\/yarns\/products\/wind-yarn-into-balls\"\u003eLook here.\u003c\/a\u003e\u003c\/p\u003e\n\u003cp\u003eAfter one adventurous drive in a minivan brimming with alpaca fiber, O-Wool Local was born. Since then, I've visited farms all around the Philadelphia area collecting fiber. Local is processed in the Northeastern USA. It is squishy and soft, and still has that alpaca smell and some lanolin left in the fiber. It is a truly rustic, minimally processed yarn - if that's your thing, you're going to love this yarn.\u003c\/p\u003e\n\u003cp\u003eHand wash in cold water with gentle detergent. Lay flat to dry.\u003c\/p\u003e\n\u003cp\u003e \u003c\/p\u003e",
	"vendor": "O-Wool",
	"product_type": "Yarns",
	"created_at": "weaewqeqw2018-07-30T15:59:53-04:00",
	"handle": "local",
	"updated_at": "2018-09-24T10:02:31-04:00",
	"published_at": "2018-07-30T15:59:25-04:00",
	"template_suffix": null,
	"tags": "yarns",
	"published_scope": "web",
	"variants": [
		{
			"id": 18250174333046,
			"product_id": 1919179161718,
			"title": "Alumroot \/ Skein",
			"price": "19.25",
			"sku": "Local:LAlumroot",
			"position": 1,
			"inventory_policy": "deny",
			"compare_at_price": null,
			"fulfillment_service": "manual",
			"inventory_management": "shopify",
			"option1": "Alumroot",
			"option2": "Skein",
			"option3": null,
			"created_at": "2018-07-30T15:59:55-04:00",
			"updated_at": "2018-09-24T09:56:25-04:00",
			"taxable": true,
			"barcode": "25125316",
			"grams": 127,
			"image_id": 5622247030902,
			"inventory_quantity": 15,
			"weight": 0.28,
			"weight_unit": "lb",
			"inventory_item_id": 18482253496438,
			"old_inventory_quantity": 15,
			"requires_shipping": true
		},
		{
			"id": 18250174365814,
			"product_id": 1919179161718,
			"title": "Ash \/ Skein",
			"price": "19.25",
			"sku": "Local:LAsh",
			"position": 2,
			"inventory_policy": "deny",
			"compare_at_price": null,
			"fulfillment_service": "manual",
			"inventory_management": "shopify",
			"option1": "Ash",
			"option2": "Skein",
			"option3": null,
			"created_at": "2018-07-30T15:59:55-04:00",
			"updated_at": "2018-09-24T09:56:26-04:00",
			"taxable": true,
			"barcode": "24526401",
			"grams": 127,
			"image_id": 5622247194742,
			"inventory_quantity": 28,
			"weight": 0.28,
			"weight_unit": "lb",
			"inventory_item_id": 18482253529206,
			"old_inventory_quantity": 28,
			"requires_shipping": true
		},
		{
			"id": 18250174398582,
			"product_id": 1919179161718,
			"title": "Basswood \/ Skein",
			"price": "19.25",
			"sku": "Local:LBasswood",
			"position": 3,
			"inventory_policy": "deny",
			"compare_at_price": null,
			"fulfillment_service": "manual",
			"inventory_management": "shopify",
			"option1": "Basswood",
			"option2": "Skein",
			"option3": null,
			"created_at": "2018-07-30T15:59:55-04:00",
			"updated_at": "2018-09-24T09:56:26-04:00",
			"taxable": true,
			"barcode": "25123266",
			"grams": 127,
			"image_id": 5622247096438,
			"inventory_quantity": 81,
			"weight": 0.28,
			"weight_unit": "lb",
			"inventory_item_id": 18482253561974,
			"old_inventory_quantity": 81,
			"requires_shipping": true
		},
		{
			"id": 18250174431350,
			"product_id": 1919179161718,
			"title": "Bee-Balm \/ Skein",
			"price": "19.25",
			"sku": "Local:LBee-Balm",
			"position": 4,
			"inventory_policy": "deny",
			"compare_at_price": null,
			"fulfillment_service": "manual",
			"inventory_management": "shopify",
			"option1": "Bee-Balm",
			"option2": "Skein",
			"option3": null,
			"created_at": "2018-07-30T15:59:55-04:00",
			"updated_at": "2018-09-24T09:56:26-04:00",
			"taxable": true,
			"barcode": "25357185",
			"grams": 127,
			"image_id": 5622246932598,
			"inventory_quantity": 28,
			"weight": 0.28,
			"weight_unit": "lb",
			"inventory_item_id": 18482253594742,
			"old_inventory_quantity": 28,
			"requires_shipping": true
		},
		{
			"id": 18250174464118,
			"product_id": 1919179161718,
			"title": "Bluebell \/ Skein",
			"price": "19.25",
			"sku": "Local:LBluebell",
			"position": 5,
			"inventory_policy": "deny",
			"compare_at_price": null,
			"fulfillment_service": "manual",
			"inventory_management": "shopify",
			"option1": "Bluebell",
			"option2": "Skein",
			"option3": null,
			"created_at": "2018-07-30T15:59:55-04:00",
			"updated_at": "2018-09-24T09:56:26-04:00",
			"taxable": true,
			"barcode": "25120048",
			"grams": 127,
			"image_id": 5622246572150,
			"inventory_quantity": 39,
			"weight": 0.28,
			"weight_unit": "lb",
			"inventory_item_id": 18482253627510,
			"old_inventory_quantity": 39,
			"requires_shipping": true
		},
		{
			"id": 18250174496886,
			"product_id": 1919179161718,
			"title": "Cresheim Creek \/ Skein",
			"price": "19.25",
			"sku": "Local:LCresheimCreek",
			"position": 6,
			"inventory_policy": "deny",
			"compare_at_price": null,
			"fulfillment_service": "manual",
			"inventory_management": "shopify",
			"option1": "Cresheim Creek",
			"option2": "Skein",
			"option3": null,
			"created_at": "2018-07-30T15:59:55-04:00",
			"updated_at": "2018-09-24T09:56:26-04:00",
			"taxable": true,
			"barcode": "25572673",
			"grams": 127,
			"image_id": 5622246539382,
			"inventory_quantity": 46,
			"weight": 0.28,
			"weight_unit": "lb",
			"inventory_item_id": 18482253660278,
			"old_inventory_quantity": 46,
			"requires_shipping": true
		},
		{
			"id": 18250174529654,
			"product_id": 1919179161718,
			"title": "Cedar Berry \/ Skein",
			"price": "19.25",
			"sku": "Local:LCedarBerry",
			"position": 7,
			"inventory_policy": "deny",
			"compare_at_price": null,
			"fulfillment_service": "manual",
			"inventory_management": "shopify",
			"option1": "Cedar Berry",
			"option2": "Skein",
			"option3": null,
			"created_at": "2018-07-30T15:59:55-04:00",
			"updated_at": "2018-09-24T09:56:26-04:00",
			"taxable": true,
			"barcode": "25107234",
			"grams": 127,
			"image_id": 5622246506614,
			"inventory_quantity": 1,
			"weight": 0.28,
			"weight_unit": "lb",
			"inventory_item_id": 18482253693046,
			"old_inventory_quantity": 1,
			"requires_shipping": true
		},
		{
			"id": 18250174562422,
			"product_id": 1919179161718,
			"title": "Fringetree \/ Skein",
			"price": "19.25",
			"sku": "Local:LFringetree",
			"position": 8,
			"inventory_policy": "deny",
			"compare_at_price": null,
			"fulfillment_service": "manual",
			"inventory_management": "shopify",
			"option1": "Fringetree",
			"option2": "Skein",
			"option3": null,
			"created_at": "2018-07-30T15:59:55-04:00",
			"updated_at": "2018-09-24T09:56:26-04:00",
			"taxable": true,
			"barcode": "4707304",
			"grams": 127,
			"image_id": 5622246834294,
			"inventory_quantity": 79,
			"weight": 0.28,
			"weight_unit": "lb",
			"inventory_item_id": 18482253725814,
			"old_inventory_quantity": 79,
			"requires_shipping": true
		},
		{
			"id": 18250174595190,
			"product_id": 1919179161718,
			"title": "Ganoga Falls \/ Skein",
			"price": "19.25",
			"sku": "Local:LGanogaFalls",
			"position": 9,
			"inventory_policy": "deny",
			"compare_at_price": null,
			"fulfillment_service": "manual",
			"inventory_management": "shopify",
			"option1": "Ganoga Falls",
			"option2": "Skein",
			"option3": null,
			"created_at": "2018-07-30T15:59:55-04:00",
			"updated_at": "2018-09-24T09:56:26-04:00",
			"taxable": true,
			"barcode": "3827197",
			"grams": 127,
			"image_id": 5622246473846,
			"inventory_quantity": 50,
			"weight": 0.28,
			"weight_unit": "lb",
			"inventory_item_id": 18482253758582,
			"old_inventory_quantity": 50,
			"requires_shipping": true
		},
		{
			"id": 18250174627958,
			"product_id": 1919179161718,
			"title": "Gingko Nut \/ Skein",
			"price": "19.25",
			"sku": "Local:LGingkoNut",
			"position": 10,
			"inventory_policy": "deny",
			"compare_at_price": null,
			"fulfillment_service": "manual",
			"inventory_management": "shopify",
			"option1": "Gingko Nut",
			"option2": "Skein",
			"option3": null,
			"created_at": "2018-07-30T15:59:55-04:00",
			"updated_at": "2018-09-24T09:56:26-04:00",
			"taxable": true,
			"barcode": "1628529",
			"grams": 127,
			"image_id": 5622246703222,
			"inventory_quantity": 4,
			"weight": 0.28,
			"weight_unit": "lb",
			"inventory_item_id": 18482253791350,
			"old_inventory_quantity": 4,
			"requires_shipping": true
		},
		{
			"id": 18250174660726,
			"product_id": 1919179161718,
			"title": "Gray Birch \/ Skein",
			"price": "19.25",
			"sku": "Local:LGrayBirch",
			"position": 11,
			"inventory_policy": "deny",
			"compare_at_price": null,
			"fulfillment_service": "manual",
			"inventory_management": "shopify",
			"option1": "Gray Birch",
			"option2": "Skein",
			"option3": null,
			"created_at": "2018-07-30T15:59:55-04:00",
			"updated_at": "2018-09-24T09:56:26-04:00",
			"taxable": true,
			"barcode": "25120772",
			"grams": 127,
			"image_id": 5622247161974,
			"inventory_quantity": 57,
			"weight": 0.28,
			"weight_unit": "lb",
			"inventory_item_id": 18482253824118,
			"old_inventory_quantity": 57,
			"requires_shipping": true
		},
		{
			"id": 18250174693494,
			"product_id": 1919179161718,
			"title": "Juneberry \/ Skein",
			"price": "19.25",
			"sku": "Local:LJuneberry",
			"position": 12,
			"inventory_policy": "deny",
			"compare_at_price": null,
			"fulfillment_service": "manual",
			"inventory_management": "shopify",
			"option1": "Juneberry",
			"option2": "Skein",
			"option3": null,
			"created_at": "2018-07-30T15:59:55-04:00",
			"updated_at": "2018-09-24T09:56:26-04:00",
			"taxable": true,
			"barcode": "25792641",
			"grams": 127,
			"image_id": 5622246998134,
			"inventory_quantity": 49,
			"weight": 0.28,
			"weight_unit": "lb",
			"inventory_item_id": 18482253856886,
			"old_inventory_quantity": 49,
			"requires_shipping": true
		},
		{
			"id": 18250174726262,
			"product_id": 1919179161718,
			"title": "Pachysandra \/ Skein",
			"price": "19.25",
			"sku": "Local:LPachysandra",
			"position": 13,
			"inventory_policy": "deny",
			"compare_at_price": null,
			"fulfillment_service": "manual",
			"inventory_management": "shopify",
			"option1": "Pachysandra",
			"option2": "Skein",
			"option3": null,
			"created_at": "2018-07-30T15:59:55-04:00",
			"updated_at": "2018-09-24T09:56:26-04:00",
			"taxable": true,
			"barcode": "25296705",
			"grams": 127,
			"image_id": 5622246637686,
			"inventory_quantity": 29,
			"weight": 0.28,
			"weight_unit": "lb",
			"inventory_item_id": 18482253889654,
			"old_inventory_quantity": 29,
			"requires_shipping": true
		},
		{
			"id": 18250174759030,
			"product_id": 1919179161718,
			"title": "Porcupine \/ Skein",
			"price": "19.25",
			"sku": "Local:LPorcupine",
			"position": 14,
			"inventory_policy": "deny",
			"compare_at_price": null,
			"fulfillment_service": "manual",
			"inventory_management": "shopify",
			"option1": "Porcupine",
			"option2": "Skein",
			"option3": null,
			"created_at": "2018-07-30T15:59:55-04:00",
			"updated_at": "2018-09-24T09:56:26-04:00",
			"taxable": true,
			"barcode": "3824865",
			"grams": 127,
			"image_id": 5622247129206,
			"inventory_quantity": 82,
			"weight": 0.28,
			"weight_unit": "lb",
			"inventory_item_id": 18482253922422,
			"old_inventory_quantity": 82,
			"requires_shipping": true
		},
		{
			"id": 18250174791798,
			"product_id": 1919179161718,
			"title": "Purple Loosestrife \/ Skein",
			"price": "19.25",
			"sku": "Local:LPurpleLoosestrife",
			"position": 15,
			"inventory_policy": "deny",
			"compare_at_price": null,
			"fulfillment_service": "manual",
			"inventory_management": "shopify",
			"option1": "Purple Loosestrife",
			"option2": "Skein",
			"option3": null,
			"created_at": "2018-07-30T15:59:55-04:00",
			"updated_at": "2018-09-24T09:56:26-04:00",
			"taxable": true,
			"barcode": "3828899",
			"grams": 127,
			"image_id": 5622247063670,
			"inventory_quantity": 34,
			"weight": 0.28,
			"weight_unit": "lb",
			"inventory_item_id": 18482253955190,
			"old_inventory_quantity": 34,
			"requires_shipping": true
		},
		{
			"id": 18250174824566,
			"product_id": 1919179161718,
			"title": "Red Squirrel \/ Skein",
			"price": "19.25",
			"sku": "Local:LRedSquirrel",
			"position": 16,
			"inventory_policy": "deny",
			"compare_at_price": null,
			"fulfillment_service": "manual",
			"inventory_management": "shopify",
			"option1": "Red Squirrel",
			"option2": "Skein",
			"option3": null,
			"created_at": "2018-07-30T15:59:55-04:00",
			"updated_at": "2018-09-24T09:56:26-04:00",
			"taxable": true,
			"barcode": "1654417",
			"grams": 127,
			"image_id": 5622246768758,
			"inventory_quantity": 17,
			"weight": 0.28,
			"weight_unit": "lb",
			"inventory_item_id": 18482253987958,
			"old_inventory_quantity": 17,
			"requires_shipping": true
		},
		{
			"id": 18250174857334,
			"product_id": 1919179161718,
			"title": "River Oat \/ Skein",
			"price": "19.25",
			"sku": "Local:LRiverOat",
			"position": 17,
			"inventory_policy": "deny",
			"compare_at_price": null,
			"fulfillment_service": "manual",
			"inventory_management": "shopify",
			"option1": "River Oat",
			"option2": "Skein",
			"option3": null,
			"created_at": "2018-07-30T15:59:55-04:00",
			"updated_at": "2018-09-24T09:56:26-04:00",
			"taxable": true,
			"barcode": "25114934",
			"grams": 127,
			"image_id": 5622246735990,
			"inventory_quantity": 90,
			"weight": 0.28,
			"weight_unit": "lb",
			"inventory_item_id": 18482254020726,
			"old_inventory_quantity": 90,
			"requires_shipping": true
		},
		{
			"id": 18250174890102,
			"product_id": 1919179161718,
			"title": "Scarlet Oak \/ Skein",
			"price": "19.25",
			"sku": "Local:LScarletOak",
			"position": 18,
			"inventory_policy": "deny",
			"compare_at_price": null,
			"fulfillment_service": "manual",
			"inventory_management": "shopify",
			"option1": "Scarlet Oak",
			"option2": "Skein",
			"option3": null,
			"created_at": "2018-07-30T15:59:55-04:00",
			"updated_at": "2018-09-24T09:56:26-04:00",
			"taxable": true,
			"barcode": "25122632",
			"grams": 127,
			"image_id": 5622246965366,
			"inventory_quantity": 50,
			"weight": 0.28,
			"weight_unit": "lb",
			"inventory_item_id": 18482254053494,
			"old_inventory_quantity": 50,
			"requires_shipping": true
		},
		{
			"id": 18250174922870,
			"product_id": 1919179161718,
			"title": "Steelhead \/ Skein",
			"price": "19.25",
			"sku": "Local:LSteelhead",
			"position": 19,
			"inventory_policy": "deny",
			"compare_at_price": null,
			"fulfillment_service": "manual",
			"inventory_management": "shopify",
			"option1": "Steelhead",
			"option2": "Skein",
			"option3": null,
			"created_at": "2018-07-30T15:59:55-04:00",
			"updated_at": "2018-09-24T09:56:26-04:00",
			"taxable": true,
			"barcode": "1660567",
			"grams": 127,
			"image_id": 5622246441078,
			"inventory_quantity": 70,
			"weight": 0.28,
			"weight_unit": "lb",
			"inventory_item_id": 18482254086262,
			"old_inventory_quantity": 70,
			"requires_shipping": true
		},
		{
			"id": 18250174955638,
			"product_id": 1919179161718,
			"title": "Wild Geranium \/ Skein",
			"price": "19.25",
			"sku": "Local:LWildGeranium",
			"position": 20,
			"inventory_policy": "deny",
			"compare_at_price": null,
			"fulfillment_service": "manual",
			"inventory_management": "shopify",
			"option1": "Wild Geranium",
			"option2": "Skein",
			"option3": null,
			"created_at": "2018-07-30T15:59:55-04:00",
			"updated_at": "2018-09-24T09:56:26-04:00",
			"taxable": true,
			"barcode": "96429195",
			"grams": 127,
			"image_id": 5622246899830,
			"inventory_quantity": 64,
			"weight": 0.28,
			"weight_unit": "lb",
			"inventory_item_id": 18482254119030,
			"old_inventory_quantity": 64,
			"requires_shipping": true
		},
		{
			"id": 18250174988406,
			"product_id": 1919179161718,
			"title": "Wissahickon \/ Skein",
			"price": "19.25",
			"sku": "Local:LWissahickon",
			"position": 21,
			"inventory_policy": "deny",
			"compare_at_price": null,
			"fulfillment_service": "manual",
			"inventory_management": "shopify",
			"option1": "Wissahickon",
			"option2": "Skein",
			"option3": null,
			"created_at": "2018-07-30T15:59:55-04:00",
			"updated_at": "2018-09-24T09:56:26-04:00",
			"taxable": true,
			"barcode": "3824979",
			"grams": 127,
			"image_id": 5622246604918,
			"inventory_quantity": 62,
			"weight": 0.28,
			"weight_unit": "lb",
			"inventory_item_id": 18482254151798,
			"old_inventory_quantity": 62,
			"requires_shipping": true
		},
		{
			"id": 18250175021174,
			"product_id": 1919179161718,
			"title": "Wood Dove \/ Skein",
			"price": "19.25",
			"sku": "Local:LWoodDove",
			"position": 22,
			"inventory_policy": "deny",
			"compare_at_price": null,
			"fulfillment_service": "manual",
			"inventory_management": "shopify",
			"option1": "Wood Dove",
			"option2": "Skein",
			"option3": null,
			"created_at": "2018-07-30T15:59:55-04:00",
			"updated_at": "2018-09-24T09:56:26-04:00",
			"taxable": true,
			"barcode": "25491457",
			"grams": 127,
			"image_id": 5622246867062,
			"inventory_quantity": 30,
			"weight": 0.28,
			"weight_unit": "lb",
			"inventory_item_id": 18482254184566,
			"old_inventory_quantity": 30,
			"requires_shipping": true
		},
		{
			"id": 18250175053942,
			"product_id": 1919179161718,
			"title": "Wood Fern \/ Skein",
			"price": "19.25",
			"sku": "Local:LWoodFern",
			"position": 23,
			"inventory_policy": "deny",
			"compare_at_price": null,
			"fulfillment_service": "manual",
			"inventory_management": "shopify",
			"option1": "Wood Fern",
			"option2": "Skein",
			"option3": null,
			"created_at": "2018-07-30T15:59:55-04:00",
			"updated_at": "2018-09-24T09:56:26-04:00",
			"taxable": true,
			"barcode": "1673987",
			"grams": 127,
			"image_id": 5622246670454,
			"inventory_quantity": 68,
			"weight": 0.28,
			"weight_unit": "lb",
			"inventory_item_id": 18482254217334,
			"old_inventory_quantity": 68,
			"requires_shipping": true
		},
		{
			"id": 19612317679734,
			"product_id": 1919179161718,
			"title": "Alumroot \/ MiniSkein",
			"price": "9.25",
			"sku": "",
			"position": 24,
			"inventory_policy": "deny",
			"compare_at_price": null,
			"fulfillment_service": "manual",
			"inventory_management": "shopify",
			"option1": "Alumroot",
			"option2": "MiniSkein",
			"option3": null,
			"created_at": "2018-09-24T09:58:43-04:00",
			"updated_at": "2018-09-24T10:02:27-04:00",
			"taxable": true,
			"barcode": "",
			"grams": 127,
			"image_id": 5622246998134,
			"inventory_quantity": 1,
			"weight": 0.28,
			"weight_unit": "lb",
			"inventory_item_id": 19972806049910,
			"old_inventory_quantity": 1,
			"requires_shipping": true
		},
		{
			"id": 19612326559862,
			"product_id": 1919179161718,
			"title": "Basswood \/ MiniSkein",
			"price": "9.25",
			"sku": "",
			"position": 25,
			"inventory_policy": "deny",
			"compare_at_price": null,
			"fulfillment_service": "manual",
			"inventory_management": "shopify",
			"option1": "Basswood",
			"option2": "MiniSkein",
			"option3": null,
			"created_at": "2018-09-24T09:59:09-04:00",
			"updated_at": "2018-09-24T10:01:43-04:00",
			"taxable": true,
			"barcode": "",
			"grams": 127,
			"image_id": 5622246473846,
			"inventory_quantity": 1,
			"weight": 0.28,
			"weight_unit": "lb",
			"inventory_item_id": 19972816797814,
			"old_inventory_quantity": 1,
			"requires_shipping": true
		},
		{
			"id": 19612361654390,
			"product_id": 1919179161718,
			"title": "Ash \/ MiniSkein",
			"price": "9.25",
			"sku": "",
			"position": 26,
			"inventory_policy": "deny",
			"compare_at_price": null,
			"fulfillment_service": "manual",
			"inventory_management": "shopify",
			"option1": "Ash",
			"option2": "MiniSkein",
			"option3": null,
			"created_at": "2018-09-24T10:00:27-04:00",
			"updated_at": "2018-09-24T10:00:27-04:00",
			"taxable": true,
			"barcode": "",
			"grams": 127,
			"image_id": null,
			"inventory_quantity": 1,
			"weight": 0.28,
			"weight_unit": "lb",
			"inventory_item_id": 19972851040374,
			"old_inventory_quantity": 1,
			"requires_shipping": true
		},
		{
			"id": 19612388098166,
			"product_id": 1919179161718,
			"title": "Bluebell \/ MiniSkein",
			"price": "19.25",
			"sku": "",
			"position": 27,
			"inventory_policy": "deny",
			"compare_at_price": null,
			"fulfillment_service": "manual",
			"inventory_management": "shopify",
			"option1": "Bluebell",
			"option2": "MiniSkein",
			"option3": null,
			"created_at": "2018-09-24T10:01:22-04:00",
			"updated_at": "2018-09-24T10:01:22-04:00",
			"taxable": true,
			"barcode": "",
			"grams": 127,
			"image_id": 5622246441078,
			"inventory_quantity": 1,
			"weight": 0.28,
			"weight_unit": "lb",
			"inventory_item_id": 19972879220854,
			"old_inventory_quantity": 1,
			"requires_shipping": true
		}
	],
	"options": [
		{
			"id": 2643071074422,
			"product_id": 1919179161718,
			"name": "Color",
			"position": 1,
			"values": [
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
			]
		},
		{
			"id": 2965366636662,
			"product_id": 1919179161718,
			"name": "Size",
			"position": 2,
			"values": [
				"Skein",
				"MiniSkein"
			]
		}
	],
	"images": [
		{
			"id": 5622246441078,
			"product_id": 1919179161718,
			"position": 1,
			"created_at": "2018-07-30T15:59:53-04:00",
			"updated_at": "2018-07-30T15:59:55-04:00",
			"alt": "Steelhead",
			"width": 1366,
			"height": 2048,
			"src": "https:\/\/cdn.shopify.com\/s\/files\/1\/0084\/4044\/7094\/products\/LSteelhead2.jpg?v=1532980795",
			"variant_ids": [
				18250174922870,
				19612388098166
			]
		},
		{
			"id": 5622246473846,
			"product_id": 1919179161718,
			"position": 2,
			"created_at": "2018-07-30T15:59:53-04:00",
			"updated_at": "2018-07-30T15:59:55-04:00",
			"alt": "Ganoga Falls",
			"width": 1365,
			"height": 2048,
			"src": "https:\/\/cdn.shopify.com\/s\/files\/1\/0084\/4044\/7094\/products\/LGanogaFalls.jpg?v=1532980795",
			"variant_ids": [
				18250174595190,
				19612326559862
			]
		},
		{
			"id": 5622246506614,
			"product_id": 1919179161718,
			"position": 3,
			"created_at": "2018-07-30T15:59:53-04:00",
			"updated_at": "2018-07-30T15:59:55-04:00",
			"alt": "Cedar Berry",
			"width": 1365,
			"height": 2048,
			"src": "https:\/\/cdn.shopify.com\/s\/files\/1\/0084\/4044\/7094\/products\/LCedarBerry3.jpg?v=1532980795",
			"variant_ids": [
				18250174529654
			]
		},
		{
			"id": 5622246539382,
			"product_id": 1919179161718,
			"position": 4,
			"created_at": "2018-07-30T15:59:53-04:00",
			"updated_at": "2018-07-30T15:59:56-04:00",
			"alt": "Cresheim Creek",
			"width": 1365,
			"height": 2048,
			"src": "https:\/\/cdn.shopify.com\/s\/files\/1\/0084\/4044\/7094\/products\/LCresheimCreek.jpg?v=1532980796",
			"variant_ids": [
				18250174496886
			]
		},
		{
			"id": 5622246572150,
			"product_id": 1919179161718,
			"position": 5,
			"created_at": "2018-07-30T15:59:53-04:00",
			"updated_at": "2018-07-30T15:59:56-04:00",
			"alt": "Bluebell",
			"width": 1365,
			"height": 2048,
			"src": "https:\/\/cdn.shopify.com\/s\/files\/1\/0084\/4044\/7094\/products\/LBluebell3_03a9970d-e75f-4dc3-9c61-3057f6c3f20e.jpg?v=1532980796",
			"variant_ids": [
				18250174464118
			]
		},
		{
			"id": 5622246604918,
			"product_id": 1919179161718,
			"position": 6,
			"created_at": "2018-07-30T15:59:54-04:00",
			"updated_at": "2018-07-30T15:59:56-04:00",
			"alt": "Wissahickon",
			"width": 1365,
			"height": 2048,
			"src": "https:\/\/cdn.shopify.com\/s\/files\/1\/0084\/4044\/7094\/products\/LWissahickon.jpg?v=1532980796",
			"variant_ids": [
				18250174988406
			]
		},
		{
			"id": 5622246637686,
			"product_id": 1919179161718,
			"position": 7,
			"created_at": "2018-07-30T15:59:54-04:00",
			"updated_at": "2018-07-30T15:59:56-04:00",
			"alt": "Pachysandra",
			"width": 1365,
			"height": 2048,
			"src": "https:\/\/cdn.shopify.com\/s\/files\/1\/0084\/4044\/7094\/products\/LPachysandra_f233f57a-3b60-40f9-88f0-298e8b0e4648.jpg?v=1532980796",
			"variant_ids": [
				18250174726262
			]
		},
		{
			"id": 5622246670454,
			"product_id": 1919179161718,
			"position": 8,
			"created_at": "2018-07-30T15:59:54-04:00",
			"updated_at": "2018-07-30T15:59:56-04:00",
			"alt": "Wood Fern",
			"width": 1366,
			"height": 2048,
			"src": "https:\/\/cdn.shopify.com\/s\/files\/1\/0084\/4044\/7094\/products\/LWoodFern3.jpg?v=1532980796",
			"variant_ids": [
				18250175053942
			]
		},
		{
			"id": 5622246703222,
			"product_id": 1919179161718,
			"position": 9,
			"created_at": "2018-07-30T15:59:54-04:00",
			"updated_at": "2018-07-30T15:59:56-04:00",
			"alt": "Gingko Nut",
			"width": 1365,
			"height": 2048,
			"src": "https:\/\/cdn.shopify.com\/s\/files\/1\/0084\/4044\/7094\/products\/LGingkoNut2.jpg?v=1532980796",
			"variant_ids": [
				18250174627958
			]
		},
		{
			"id": 5622246735990,
			"product_id": 1919179161718,
			"position": 10,
			"created_at": "2018-07-30T15:59:54-04:00",
			"updated_at": "2018-07-30T15:59:56-04:00",
			"alt": "River Oat",
			"width": 1365,
			"height": 2048,
			"src": "https:\/\/cdn.shopify.com\/s\/files\/1\/0084\/4044\/7094\/products\/LRiverOat3.jpg?v=1532980796",
			"variant_ids": [
				18250174857334
			]
		},
		{
			"id": 5622246768758,
			"product_id": 1919179161718,
			"position": 11,
			"created_at": "2018-07-30T15:59:54-04:00",
			"updated_at": "2018-07-30T15:59:56-04:00",
			"alt": "Red Squirrel",
			"width": 1366,
			"height": 2048,
			"src": "https:\/\/cdn.shopify.com\/s\/files\/1\/0084\/4044\/7094\/products\/LRedSquirrel_9bf93c6f-91f6-4618-ba14-e10a09a936ae.jpg?v=1532980796",
			"variant_ids": [
				18250174824566
			]
		},
		{
			"id": 5622246834294,
			"product_id": 1919179161718,
			"position": 12,
			"created_at": "2018-07-30T15:59:54-04:00",
			"updated_at": "2018-07-30T15:59:56-04:00",
			"alt": "Fringetree",
			"width": 1366,
			"height": 2048,
			"src": "https:\/\/cdn.shopify.com\/s\/files\/1\/0084\/4044\/7094\/products\/LFringetree3.jpg?v=1532980796",
			"variant_ids": [
				18250174562422
			]
		},
		{
			"id": 5622246867062,
			"product_id": 1919179161718,
			"position": 13,
			"created_at": "2018-07-30T15:59:54-04:00",
			"updated_at": "2018-07-30T15:59:56-04:00",
			"alt": "Wood Dove",
			"width": 1365,
			"height": 2048,
			"src": "https:\/\/cdn.shopify.com\/s\/files\/1\/0084\/4044\/7094\/products\/LWoodDove.jpg?v=1532980796",
			"variant_ids": [
				18250175021174
			]
		},
		{
			"id": 5622246899830,
			"product_id": 1919179161718,
			"position": 14,
			"created_at": "2018-07-30T15:59:54-04:00",
			"updated_at": "2018-07-30T15:59:56-04:00",
			"alt": "Wild Geranium",
			"width": 1366,
			"height": 2048,
			"src": "https:\/\/cdn.shopify.com\/s\/files\/1\/0084\/4044\/7094\/products\/LWildGeranium3.jpg?v=1532980796",
			"variant_ids": [
				18250174955638
			]
		},
		{
			"id": 5622246932598,
			"product_id": 1919179161718,
			"position": 15,
			"created_at": "2018-07-30T15:59:54-04:00",
			"updated_at": "2018-07-30T15:59:56-04:00",
			"alt": "Bee-Balm",
			"width": 1365,
			"height": 2048,
			"src": "https:\/\/cdn.shopify.com\/s\/files\/1\/0084\/4044\/7094\/products\/LBee-Balm.jpg?v=1532980796",
			"variant_ids": [
				18250174431350
			]
		},
		{
			"id": 5622246965366,
			"product_id": 1919179161718,
			"position": 16,
			"created_at": "2018-07-30T15:59:54-04:00",
			"updated_at": "2018-07-30T15:59:56-04:00",
			"alt": "Scarlet Oak",
			"width": 1366,
			"height": 2048,
			"src": "https:\/\/cdn.shopify.com\/s\/files\/1\/0084\/4044\/7094\/products\/LScarletOak3.jpg?v=1532980796",
			"variant_ids": [
				18250174890102
			]
		},
		{
			"id": 5622246998134,
			"product_id": 1919179161718,
			"position": 17,
			"created_at": "2018-07-30T15:59:54-04:00",
			"updated_at": "2018-07-30T15:59:56-04:00",
			"alt": "Juneberry",
			"width": 1365,
			"height": 2048,
			"src": "https:\/\/cdn.shopify.com\/s\/files\/1\/0084\/4044\/7094\/products\/LJuneberry.jpg?v=1532980796",
			"variant_ids": [
				18250174693494,
				19612317679734
			]
		},
		{
			"id": 5622247030902,
			"product_id": 1919179161718,
			"position": 18,
			"created_at": "2018-07-30T15:59:54-04:00",
			"updated_at": "2018-07-30T15:59:56-04:00",
			"alt": "Alumroot",
			"width": 1366,
			"height": 2048,
			"src": "https:\/\/cdn.shopify.com\/s\/files\/1\/0084\/4044\/7094\/products\/LAlumroot2.jpg?v=1532980796",
			"variant_ids": [
				18250174333046
			]
		},
		{
			"id": 5622247063670,
			"product_id": 1919179161718,
			"position": 19,
			"created_at": "2018-07-30T15:59:54-04:00",
			"updated_at": "2018-07-30T15:59:56-04:00",
			"alt": "Purple Loosestrife",
			"width": 1366,
			"height": 2048,
			"src": "https:\/\/cdn.shopify.com\/s\/files\/1\/0084\/4044\/7094\/products\/LPurpleLoosestrife.jpg?v=1532980796",
			"variant_ids": [
				18250174791798
			]
		},
		{
			"id": 5622247096438,
			"product_id": 1919179161718,
			"position": 20,
			"created_at": "2018-07-30T15:59:54-04:00",
			"updated_at": "2018-07-30T15:59:56-04:00",
			"alt": "Basswood",
			"width": 1366,
			"height": 2048,
			"src": "https:\/\/cdn.shopify.com\/s\/files\/1\/0084\/4044\/7094\/products\/LBasswood3.jpg?v=1532980796",
			"variant_ids": [
				18250174398582
			]
		},
		{
			"id": 5622247129206,
			"product_id": 1919179161718,
			"position": 21,
			"created_at": "2018-07-30T15:59:54-04:00",
			"updated_at": "2018-07-30T15:59:56-04:00",
			"alt": "Porcupine",
			"width": 1365,
			"height": 2048,
			"src": "https:\/\/cdn.shopify.com\/s\/files\/1\/0084\/4044\/7094\/products\/LPorcupine2.jpg?v=1532980796",
			"variant_ids": [
				18250174759030
			]
		},
		{
			"id": 5622247161974,
			"product_id": 1919179161718,
			"position": 22,
			"created_at": "2018-07-30T15:59:54-04:00",
			"updated_at": "2018-07-30T15:59:56-04:00",
			"alt": "Gray Birch",
			"width": 1365,
			"height": 2048,
			"src": "https:\/\/cdn.shopify.com\/s\/files\/1\/0084\/4044\/7094\/products\/LGrayBirch3_7a8070a0-b182-4ee1-ace1-30bc0ab48196.jpg?v=1532980796",
			"variant_ids": [
				18250174660726
			]
		},
		{
			"id": 5622247194742,
			"product_id": 1919179161718,
			"position": 23,
			"created_at": "2018-07-30T15:59:54-04:00",
			"updated_at": "2018-07-30T15:59:56-04:00",
			"alt": "Ash",
			"width": 1366,
			"height": 2048,
			"src": "https:\/\/cdn.shopify.com\/s\/files\/1\/0084\/4044\/7094\/products\/LAsh.jpg?v=1532980796",
			"variant_ids": [
				18250174365814
			]
		}
	],
	"image": {
		"id": 5622246441078,
		"product_id": 1919179161718,
		"position": 1,
		"created_at": "2018-07-30T15:59:53-04:00",
		"updated_at": "2018-07-30T15:59:55-04:00",
		"alt": "Steelhead",
		"width": 1366,
		"height": 2048,
		"src": "https:\/\/cdn.shopify.com\/s\/files\/1\/0084\/4044\/7094\/products\/LSteelhead2.jpg?v=1532980795",
		"variant_ids": [
			18250174922870,
			19612388098166
		]
	}
};

const nestedOptionSchema = {
	values: {
	
	
	}
}

/*const optionValues = {
	id: 482394233443,
	parent_id: 54545,
	slug: Slugify
	title: "orig value"
	_index: 0,
	tags: false,
	swatch_image: fals  e,
	color: "#ff0000"    ( typeof obj[key] == "string" ) ? Slugify(obj[key]) : ''
};*/

const optionValueDatamap={
	slug: (obj,key ) => ( !obj[key] )? Slugify(obj['title']) : false ,
	title: (obj,key)=> obj[key],
	testing:"gillintunney",
	id: (obj,key) => ( !obj[key] )? math.random(11111111111,999999999999999): false,
}

const testDataMap = {
	currentvariant: function(obj,key){return new Array(obj[key])},
	teststring : function (obj,key){ console.log("oing function now" , key,obj);return  `${obj[key]}have a nvery nice day` },
	currentproduct: function(obj,key){
		
		return (typeof obj[key] == "string" || typeof obj[key] == "number" ) ?   `datatype error ${typeof obj[key]}` : (typeof obj[key] == "object"  ) ?  obj[key] : false;
	},
	products: function(obj,key){
		
		console.log("trying to make a product",obj[key],  typeof obj['currentproduct'])
		if ( obj[key] === undefined || obj[key] === null ){
			
			if ( obj['currentproduct'] && (typeof obj['currentproduct'] == "object") ){
				return [ obj['currentproduct'] ]
			}
		}
		else{
			(typeof obj[key] == "array"  ) ? obj[key] : (typeof obj[key] == "object"  ) ? ["new array"] : false;
		}
	}
};


const testData = {
	testme:"jklsdjl",
	currentvariant: "Edklklklklkl",
	teststring : "gillian",
	currentproduct: testProduct,
	products:false
};

const productListSchema = schema({
	products: Number,
})

var newObj = productListSchema.parse(data.products);
var arr = [...[data.products][0]];
//console.log("parsed" , arr)

const testDataMapBase = {
	currentvariant: function(obj,key){return new Array(obj[key])},
	teststring : function (obj,key){ console.log("oing function now" , key,obj);return  `${obj[key]}have a nvery nice day` },
	currentproduct: function(obj,key){
		
		return (typeof obj[key] == "string" || typeof obj[key] == "number" ) ?   `datatype error ${typeof obj[key]}` : (typeof obj[key] == "object"  ) ?  obj[key] : false;
	},
	products: function(obj,key){
		
		console.log("trying to make a product",obj[key],  typeof obj['currentproduct'])
		if ( obj[key] === undefined || obj[key] === null ){
			
			if ( obj['currentproduct'] && (typeof obj['currentproduct'] == "object") ){
				return [ obj['currentproduct'] ]
			}
		}else{
			(typeof obj[key] == "array"  ) ? obj[key] : (typeof obj[key] == "object"  ) ? ["new array"] : false;
		}
	}
};


var myoptionvals = GDatamapper.expandToObject("test string ","title",{slug: false,id:false, mygillian: "test"});
console.log(myoptionvals);
console.log( GDatamapper.mapData(myoptionvals,optionValueDatamap));

//console.log( GDatamapper.mapData(testData,testDataMap));
///console.log(GDatamapper.parseToDictionary(data.products,"id" , {testaddition: "message to people"}).get(1919165890678));

const exclaim = prevSchema => prevSchema.merge({
	parsers: {
		exclaim: v => `${v}!!!!!!!!!!!!!!!!!!!!!!!!`,
		defaultProduct: function(value){
			//throw value;
			if (!value){
				return data.products[0]
			}
		},
	},
});

const testSchema = schema(
	{
		id: { type: String, exclaim: true },
		age: Number,
	},
	exclaim
);





var USER_INPUTED_DATA={
	products:data.products,
	
}
const PRODUCT_VIEW_SCHEMA= schema(
	{
		productID: { type: Number, default: data.products[0].id },
		variantID: { type: Number, default: data.products[0].variants[0].id },
		products: { type: Array, required: true },
		currentproduct:{type: Object , defaultProduct: true },
		currentvariant:Object,
	},
	exclaim
);




var newObj = PRODUCT_VIEW_SCHEMA.parse(USER_INPUTED_DATA);



async function asyncFun () {
	var value = 10
	return value
}
(async () => { console.log(await asyncFun()) })()

/*var vm = new Vue({
	el: '#productapp',
	components: {
		Product
	},
	data:{
		product: data.products[0],
		selectedvariant: "18250174726262",
		shopifyproducts : data.products,
	shopifyproductID : "1919179161718"
	},
	store,
	template: '<Product v-bind:selectedvariant="selectedvariant" v-bind:product="shopifyproductID" v-bind:shopifyproducts="shopifyproducts"></Product>',
})*/

/* eslint-disable no-new */


//initVue(data);