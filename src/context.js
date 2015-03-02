const hidden = new WeakMap();

export default class Context {
	constructor({app, req, res}) {
		const privateVariables = {
			app,
			req,
			res,
			originalUrl: req.url
		};

		hidden.set(this, privateVariables);

		this.state = {};
	}

	get app() {
		return hidden.get(this).app;
	}

	get originalUrl() {
		return hidden.get(this).originalUrl;
	}

	get req() {
		return hidden.get(this).req;
	}

	get res() {
		return hidden.get(this).res;
	}

}