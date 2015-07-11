module.exports = function(func, wait) {
	var curr = Date.now(),
		last_call = 0,
		timer = null,
		diff,
		args,
		context,
		exec = function() {
			last_call = curr;
			func.apply(context, args);
		}
	
	return function() {
		curr = Date.now();
		context = this,
		args = arguments,
		clearTimeout(timer);
		if (!last_call) {
			last_call = curr;
		}
		diff = curr - last_call - wait;		
		
		if (diff >= 0) {
			exec();
		} else {
			timer = setTimeout(exec, wait);			
		}
	}
}