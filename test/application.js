import oxygen from '..';
import { expect } from 'chai';

describe('app', () => {
	
	it('should be an instance of Application', () => {
		const app = oxygen();
		expect(app.constructor.name).to.be.equal('Application');
	});

});