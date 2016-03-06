'use strict';

// MODULES //

var factory = require( './factory.js' );


// CREATE TOKEN //

/**
* FUNCTION: create( opts, clbk )
*	Creates an access token.
*
* @param {Object} opts - function options
* @param {String} opts.token - Github access token
* @param {String} [opts.useragent] - user agent string
* @param {Function} clbk - callback to invoke upon query completion
* @returns {Void}
*/
function create( opts, clbk ) {
	factory( opts, clbk )();
} // end FUNCTION create()


// EXPORTS //

module.exports = create;
