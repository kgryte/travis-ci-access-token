'use strict';

// MODULES //

var tape = require( 'tape' );
var create = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.equal( typeof create, 'function', 'main export is a function' );
	t.end();
});

tape( 'module exports a factory method', function test( t ) {
	t.equal( typeof create.factory, 'function', 'export includes a factory method' );
	t.end();
});
