'use strict';

// MODULES //

var tape = require( 'tape' );
var headers = require( './../lib/headers.js' );


// FUNCTIONS //

function setup() {
	return {
		'useragent': 'beep-boop',
		'accept': 'application/vnd.travis-ci.2+json'
	};
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.equal( typeof headers, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns an object', function test( t ) {
	t.equal( typeof headers( setup() ), 'object', 'returns an object' );
	t.end();
});

tape( 'if provided a `useragent` option, the function sets the `User-Agent` header', function test( t ) {
	var opts = setup();
	var h = headers( opts );
	t.equal( h[ 'User-Agent' ], opts.useragent, 'sets the `User-Agent` header' );
	t.end();
});

tape( 'if provided an `accept` option, the function sets the `Accept` header', function test( t ) {
	var opts = setup();
	var h = headers( opts );
	t.equal( h[ 'Accept' ], opts.accept, 'sets the `Accept` header' );
	t.end();
});

tape( 'the function sets the `Content-Type` header to `application/json`', function test( t ) {
	var h = headers( {} );
	t.deepEqual( h, {'Content-Type':'application/json'}, 'sets the `Content-Type` header' );
	t.end();
});
