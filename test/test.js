'use strict';

// MODULES //

var tape = require( 'tape' );
var retrieve = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.equal( typeof retrieve, 'function', 'main export is a function' );
	t.end();
});

tape( 'module exports a factory method', function test( t ) {
	t.equal( typeof retrieve.factory, 'function', 'export includes a factory method' );
	t.end();
});
