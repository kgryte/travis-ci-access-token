'use strict';

// DATA //

/**
* FUNCTION: data( opts )
*	Extracts data to be posted to a remote endpoint.
*
* @param {String} opts.token - Github access token
* @returns {String} data to post
*/
function data( opts ) {
	var out = {};
	out.github_token = opts.token;
	return JSON.stringify( out );
} // end FUNCTION data()


// EXPORTS //

module.exports = data;
