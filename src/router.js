
class Router {
	constructor(middleware) {
		this.middleware = [];
	}
}

const noop = () => {};