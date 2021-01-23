
/**Ulisesten at 22 jan 2021 */

var c_urlparser = require('./build/Release/urlparser.node');


exports.parse = function(url) {
     return c_urlparser.parse(url);
}