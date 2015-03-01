# oxygen
oxygen is a small web middleware framework which is inspired by express and koa.  

The main differences between express/koa and oxygen are

  * oxygen is written fully in ES6
  * oxygen uses [async](https://github.com/lukehoban/ecmascript-asyncawait) functions to control middleware flow

--
### Using oxygen
This is an example app built with oxygen
```javascript
import oxygen from './'; // assumes that this file is in the root of this project
import rp from 'request-promise';

const app = oxygen();

// basic error handling
app.use(async function(req, res, next){
	try {
		await next();
	} catch(e) {
		console.log(e);
	}
});

// request logging
app.use(async function(req, res, next){
	var start = new Date;
	await next();
	var ms = new Date - start;
	console.log('%s %s - %s', req.method, req.url, ms);
})

app.use(async function(req, res, next){
	const google = await rp('https://www.google.com');
	res.end(google);
});

app.listen(1337);

```
