'use strict';

// MODULES //

var factory = require( './factory.js' );


// RETRIEVE TOKEN //

/**
* FUNCTION: retrieve( opts, clbk )
*	Retrieves an access token.
*
* @param {Object} opts - function options
* @param {String} opts.token - Github access token
* @param {String} [opts.useragent] - user agent string
* @param {String} [opts.hostname] - endpoint hostname
* @param {Function} clbk - callback to invoke upon query completion
* @returns {Void}
*/
function retrieve( opts, clbk ) {
	factory( opts, clbk )();
} // end FUNCTION retrieve()


// EXPORTS //

module.exports = retrieve;
