var root = this;

root.myUnderscore = {};

myUnderscore.keys = function(obj){
	var keys = [];

	for(var key in obj){
		keys.push(key);
	};
	
	return keys;
};


myUnderscore.values = function(obj){
	var values = [];
	for(var key in obj){
		values.push(obj[key]);
	};

	return values;

}