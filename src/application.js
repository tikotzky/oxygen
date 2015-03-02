import { EventEmitter } from 'events';
import http from 'http';
import Context from './context';

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
			const ctx = this.createContext(req, res);

			let idx = 0;

			const next = err => {
				return this.middleware[idx++].call(ctx, next);
			};

			next();
		}
	}

	createContext(req, res) {
		return new Context({
			this,
			req,
			res
		});
	}

}

export default function factory(...options) {
	return new Application(...options);
}

