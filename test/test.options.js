'use strict';

// MODULES //

var tape = require( 'tape' );
var options = require( './../lib/options.js' );


// FUNCTIONS //

function setup() {
	return {
		'method': 'POST',
		'protocol': 'http',
		'hostname': 'beep.com',
		'pathname': '/auth/github',
		'port': 80,
		'useragent': 'beep-boop',
		'accept': 'application/vnd.travis-ci.2+json'
	};
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.equal( typeof options, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns an object', function test( t ) {
	t.equal( typeof options( setup() ), 'object', 'returns an object' );
	t.end();
});

tape( 'the function sets the HTTP request method to `POST`', function test( t ) {
	var opts = setup();
	var out = options( opts );
	t.equal( out.method, 'POST', 'method set to `POST`' );
	t.end();
});

tape( 'the function sets the HTTP request protocol', function test( t ) {
	var opts = setup();
	var out = options( opts );
	t.equal( out.protocol, opts.protocol+':', 'request protocol set protocol option' );
	t.end();
});

tape( 'the function sets the endpoint hostname', function test( t ) {
	var opts = setup();
	var out = options( opts );
	t.equal( out.hostname, opts.hostname, 'sets the endpoint hostname' );
	t.end();
});

tape( 'the function sets the endpoint port', function test( t ) {
	var opts = setup();
	var out = options( opts );
	t.equal( out.port, opts.port, 'sets the endpoint port' );
	t.end();
});

tape( 'the function sets the request headers', function test( t ) {
	var expected;
	var opts;
	var out;

	opts = setup();
	out = options( opts );

	expected = {
		'User-Agent': opts.useragent,
		'Accept': opts.accept,
		'Content-Type': 'application/json'
	};

	t.deepEqual( out.headers, expected, 'sets the request headers' );

	t.end();
});
