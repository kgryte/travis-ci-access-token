'use strict';

// MODULES //

var tape = require( 'tape' );
var data = require( './../lib/data.js' );


// FUNCTIONS //

function setup() {
	return {
		'token': 'abcdefg'
	};
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.equal( typeof data, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a string', function test( t ) {
	t.equal( typeof data( setup() ), 'string', 'returns a string' );
	t.end();
});

tape( 'the function sets the `github_token` field', function test( t ) {
	var opts;
	var out;

	opts = setup();
	out = data( opts );
	out = JSON.parse( out );

	t.equal( out.github_token, opts.token, 'sets the `github_token` field' );
	t.end();
});
