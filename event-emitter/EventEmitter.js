/* EventEmitter class
 * -----------------------------------------
	 API usage below:

	const emmiter = new EventEmitter();
	
	const handler = (x, y) => console.log(x, y);

	// addListener returns { remove }
	const subscription = emmiter.addListener('change', handler);

	emmiter.emit('change', 'arg1', 'arg2');
	// handler will be called and will print 'arg1' 'arg2'
	
	subscription.remove();
	// now if the event 'change' is emitted, handler will not be called
*/
 
class EventEmitter {
	constructor () {
	}

	addListener () {
	}

	emit () {
	}
}

module.exports = EventEmitter;
