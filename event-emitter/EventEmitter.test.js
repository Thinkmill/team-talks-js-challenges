const EventEmitter = require('./EventEmitter');

describe('EventEmitter', () => {

	it('implements the EventEmitter interface', () => {
		const emitter = new EventEmitter();
		expect(emitter.addListener).toBeDefined();
		expect(emitter.emit).toBeDefined();
	});

	describe('#addListener', () => {

		it('returns an object with a remove method', () => {
			const emitter = new EventEmitter();
			const subscription = emitter.addListener('event', () => {});
			expect(subscription.remove).toBeDefined();
		});

		describe('#remove', () => {
			
			it('removes event handler for event type', () => {
				const emitter = new EventEmitter();
				const handler = jest.fn();

				const subscription = emitter.addListener('event', handler);
				emitter.emit('event');

				expect(handler).toBeCalled();

				subscription.remove();
				expect(handler.mock.calls.length).toEqual(1);
			});

		});

	});

	describe('#emit', () => {

		it('returns undefined', () => {
			const emitter = new EventEmitter();
			expect(emitter.emit('event', 'test')).toEqual(undefined);
		});

		it('only invokes listeners for event type', () => {
			const emitter = new EventEmitter();

			const mocks = [jest.fn(), jest.fn(), jest.fn()];

			emitter.addListener('event1', mocks[0]);
			emitter.addListener('event1', mocks[1]);
			emitter.addListener('event2', mocks[2]);

			emitter.emit('event1');

			expect(mocks.map(({ mock }) => mock.calls.length))
			.toEqual([1, 1, 0]);

			emitter.emit('event2');

			expect(mocks.map(({ mock }) => mock.calls.length))
			.toEqual([1, 1, 1]);
		});

		it('should invoke event listener with arguments', () => {
				const emitter = new EventEmitter();
				const handler = jest.fn();

				const subscription = emitter.addListener('event', handler);
				emitter.emit('event', 'arg1', 'arg2');

				expect(handler).toBeCalledWith('arg1', 'arg2');
		});

	});

});
