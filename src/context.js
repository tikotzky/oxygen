const hidden = new WeakMap();

export default class Context {
	constructor(req, res) {
		const privateVariables = {
			req,
			res
		};

		hidden.set(this, privateVariables);

	}

	get req() {
		return hidden.get(this).req;
	}

	get res() {
		return hidden.get(this).res;
	}

}