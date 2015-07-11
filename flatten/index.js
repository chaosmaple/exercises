module.exports = function(arr) {
	var flatArr = arr;
	
	var needFlatten = function() {
		return flatArr.some(function(v) {
			return Array.isArray(v);
		});
	}
	
	while (needFlatten()) {
		flatArr = [].concat.apply([], flatArr);
	}
	
	return flatArr;
}