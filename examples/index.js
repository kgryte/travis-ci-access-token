'use strict';

var retrieve = require( './../lib' );

var opts = {
	'token': '<your_github_token_goes_here>'
};

retrieve( opts, clbk );

function clbk( error, results ) {
	if ( error ) {
		throw new Error( error.message );
	}
	console.dir( results );
}
