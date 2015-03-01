import { EventEmitter } from 'events';
import http from 'http';

class Application extends EventEmitter {

	constructor() {
		this.middleware = [];
	}

	listen(...options) {
		const server = http.createServer(this.callback());
		return server.listen(...options);
	}

	use(fn) {
		this.middleware.push(fn);
		return this;
	}

	callback() {
		return (req, res) => {
			let idx = 0;

			const next = err => {
				return this.middleware[idx++](req, res, next);
			};

			next();

		}
	}

}

export default function factory(...options) {
	return new Application(...options);
}

