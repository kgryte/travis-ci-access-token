Access Token
===
[![NPM version][npm-image]][npm-url] [![Build Status][build-image]][build-url] [![Coverage Status][coverage-image]][coverage-url] [![Dependencies][dependencies-image]][dependencies-url]

> Retrieve an access token to [authenticate][travis-ci-authenticate] against Travis CI.


## Installation

``` bash
$ npm install travis-ci-access-token
```


## Usage

``` javascript
var createToken = require( 'travis-ci-access-token' );
```

<a name="create-token"></a>
#### createToken( options, clbk )

Retrieve an access token to [authenticate][travis-ci-authenticate] against Travis CI.

``` javascript
var opts = {
	'token': 'tkjorjk34ek3nj4!' // Github token
};

createToken( opts, clbk );

function clbk( error, results ) {
	if ( error ) {
		throw new Error( error.message );
	}
	console.dir( results );
	/* returns 
		{
			"access_token": "12345678"
		}
	*/
}
```
The `function` accepts the following `options`:
*	__token__: Github [access token][github-token] (*required*). The [access-token][github-token] should have the following [scopes][github-scopes]:
	-	`read:org`
	-	`user:email`
	-	`repo_deployment`
	-	`repo:status`
	-	`write:repo_hook`
*	__useragent__: user agent `string`.

To [authenticate][travis-ci-authenticate] with Travis CI, Travis CI __requires__ a Github [access token][github-token]. To specify a Github [access token][github-token], set the `token` option.

``` javascript
var opts = {
	'token': 'tkjorjk34ek3nj4!'
};

createToken( opts, clbk );
```

To specify a user agent, set the `useragent` option.

``` javascript
var opts = {
	'token': 'tkjorjk34ek3nj4!',
	'useragent': 'hello-github!'
};

createToken( opts, clbk );
```


#### createToken.factory( options, clbk )

Creates a reusable `function`.

``` javascript
var opts = {
	'token': 'tkjorjk34ek3nj4!',
	'useragent': 'hello-github!'
};

var create = createToken.factory( opts, clbk );

create();
create();
create();
// ...
```

The factory method accepts the same `options` as [`createToken()`](#create-token).


---
## Examples

``` javascript
var createToken = require( 'travis-ci-access-token' );

var opts = {
	'token': '<your_github_token_goes_here>'
};

create( opts, clbk );

function clbk( error, results ) {
	if ( error ) {
		throw new Error( error.message );
	}
	console.dir( results );
}
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


---
## CLI

### Installation

To use the module as a general utility, install the module globally

``` bash
$ npm install -g travis-ci-access-token
```


### Usage

``` bash
Usage: travistoken [options]

Options:

  -h,  --help                Print this message.
  -V,  --version             Print the package version.
       --token token         Github access token.
  -ua, --useragent ua        User agent.
```


### Notes

*	In addition to the [`token`][github-token] option, the [token][github-token] may also be specified by either a [`TRAVISCI_GITHUB_TOKEN`][github-token] or a [`GITHUB_TOKEN`][github-token] environment variable. The command-line option __always__ takes precedence.


### Examples

Setting the access [token][github-token] using the command-line option:

``` bash
$ DEBUG=* travistoken --token <token>
# => '12345678'
```

Setting the access [token][github-token] using an environment variable:

``` bash
$ DEBUG=* TRAVISCI_GITHUB_TOKEN=<token> travistoken
# => '12345678'
```

For local installations, modify the command to point to the local installation directory; e.g., 

``` bash
$ DEBUG=* ./node_modules/.bin/travistoken --token <token>
# => '12345678'
```

Or, if you have cloned this repository and run `npm install`, modify the command to point to the executable; e.g., 

``` bash
$ DEBUG=* node ./bin/cli --token <token>
# => '12345678'
```


---
## Tests

### Unit

This repository uses [tape][tape] for unit tests. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul][istanbul] as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


### Browser Support

This repository uses [Testling][testling] for browser testing. To run the tests in a (headless) local web browser, execute the following command in the top-level application directory:

``` bash
$ make test-browsers
```

To view the tests in a local web browser,

``` bash
$ make view-browser-tests
```

<!-- [![browser support][browsers-image]][browsers-url] -->


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2016. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/travis-ci-access-token.svg
[npm-url]: https://npmjs.org/package/travis-ci-access-token

[build-image]: http://img.shields.io/travis/kgryte/travis-ci-access-token/master.svg
[build-url]: https://travis-ci.org/kgryte/travis-ci-access-token

[coverage-image]: https://img.shields.io/codecov/c/github/kgryte/travis-ci-access-token/master.svg
[coverage-url]: https://codecov.io/github/kgryte/travis-ci-access-token?branch=master

[dependencies-image]: http://img.shields.io/david/kgryte/travis-ci-access-token.svg
[dependencies-url]: https://david-dm.org/kgryte/travis-ci-access-token

[dev-dependencies-image]: http://img.shields.io/david/dev/kgryte/travis-ci-access-token.svg
[dev-dependencies-url]: https://david-dm.org/dev/kgryte/travis-ci-access-token

[github-issues-image]: http://img.shields.io/github/issues/kgryte/travis-ci-access-token.svg
[github-issues-url]: https://github.com/kgryte/travis-ci-access-token/issues

[tape]: https://github.com/substack/tape
[istanbul]: https://github.com/gotwarlost/istanbul
[testling]: https://ci.testling.com

[github-token]: https://github.com/settings/tokens/new
[github-scopes]: https://developer.github.com/v3/oauth/#scopes

[travis-ci-authenticate]: https://docs.travis-ci.com/api?http#authentication
