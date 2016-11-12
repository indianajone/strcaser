const title_case = require('./TitleCase');
const studle_case = require('./StudleCase');

/**
 * # camel_case(string)
 * 
 * Convert snake_case or studleCase into CamelCase.
 *
 * @param  {String} str
 *
 * @return {String}
 */
module.exports = function (str) {
    return title_case(studle_case(str));
};