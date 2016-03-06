'use strict';

// MODULES //

var isFunction = require( 'validate.io-function' );
var copy = require( 'utils-copy' );
var validate = require( './validate.js' );
var defaults = require( './defaults.json' );
var query = require( './query.js' );


// FACTORY //

/**
* FUNCTION: factory( options, clbk )
*	Returns a function for retrieving a token.
*
* @param {Object} options - function options
* @param {String} options.token - Github access token
* @param {String} [options.useragent] - user agent string
* @param {Function} clbk - callback to invoke upon query completion
* @returns {Function} function for retrieving a token
*/
function factory( options, clbk ) {
	var opts;
	var err;
	opts = copy( defaults );
	err = validate( opts, options );
	if ( err ) {
		throw err;
	}
	if ( !isFunction( clbk ) ) {
		throw new TypeError( 'invalid input argument. Callback argument must be a function. Value: `' + clbk + '`.' );
	}
	/**
	* FUNCTION: retrieve()
	*	Retrieves a token.
	*
	* @returns {Void}
	*/
	return function retrieve() {
		query( opts, done );
		/**
		* FUNCTION: done( error, results )
		*	Callback invoked after receiving an API response.
		*
		* @private
		* @param {Error|Null} error - error object
		* @param {Object} results - response results
		* @returns {Void}
		*/
		function done( error, results ) {
			if ( error ) {
				return clbk( error );
			}
			clbk( null, results );
		} // end FUNCTION done()
	}; // end FUNCTION retrieve()
} // end FUNCTION factory()


// EXPORTS //

module.exports = factory;
