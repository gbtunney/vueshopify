export function Multiply(a, b) {
	return a * b;
}
export function Slugify(text) {
				// https://gist.github.com/mathewbyrne/1280286
		return text.toString().toLowerCase()
		.replace(/\s+/g, '-')           // Replace spaces with -
		.replace(/[^\w\-]+/g, '')       // Remove all non-word chars
		.replace(/\-\-+/g, '-')         // Replace multiple - with single -
		.replace(/^-+/, '')             // Trim - from start of text
		.replace(/-+$/, '')             // Trim - from end of text
		.replace(/[\s_-]+/g, '-');
		
	
}

export const GDatamapper = {
	mapData : function(obj,map,merge =true){
		let data_map = map;
		let Obj= Object.assign(obj);
		
		console.log("obj" ,Obj);
		Object.keys(obj).forEach(function(key) {
			console.log(`key ${ key} ,${data_map.hasOwnProperty(key)}map   ${Obj.hasOwnProperty(key) } obj`);
			
			if (data_map.hasOwnProperty(key) && (typeof data_map[key]=='function') ){
				Obj[key] = (data_map[key]).call(data_map[key],Obj,key);
			}else{
				if (Obj.hasOwnProperty(key) ){
					if ( merge ){
						console.log("key for this being creeated",key);
						
						Obj[key] = Obj[key] ;
					}else{
						console.log("key for this being deleted", key);
						
						delete Obj[key];
					}
					
				}else{
				
				}
			}
		});
		return Obj;
	},
	expandToObject: function(_value ,_keyprop,_addprops={} ){
		if( typeof _value == "string" ||  typeof _value == "number"  ){
			console.log("trying to convert" , _value)
			return	Object.assign({[_keyprop.toString()] :_value  }, _addprops);
		}else{
			return _value;
		}
	},
	parseToDictionary : function( _array ,_keyprop,_addprops ){
		var _dictionary = new Map();
		//throw typeof _array;
		
		//throw "calling", typeof _array;
		if ( typeof _array == "object" ){
			for ( var i = 0 ; i < _array.length; i++){
				
				var _currObject = _array[i];
				if ( typeof _currObject != "object" ){
					///this is when the value
					throw "its an array need to map";
				}else{
					var _newObject = Object.assign({_index: i }, _currObject);
					_dictionary.set(_newObject[_keyprop], _newObject);
				}
				
			}
		}else{
			return false;
		}
		
		return _dictionary;
	}
};
export default {
	// Some data...
};