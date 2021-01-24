
/**Ulisesten at 22 jan 2021 */

var c_urlparser = require('./build/Release/urlparser.node');
var c_cookieparser = require('./build/Release/cookieparser.node')


exports.parse = function(url) {
     return c_urlparser.parse(url);
}

exports.milk = function(cookie) {
     return c_cookieparser.milk(cookie);
}