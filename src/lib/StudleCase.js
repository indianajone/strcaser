const lower_case = require('./LowerCase');
const title_case = require('./TitleCase');

function isCamelcase(str) {
    return /^[A-Z][a-z]+/g.test(str);
}

function parse (str, diameter) {
    if(isCamelcase(str)) {
        return str.replace(/[a-z]?[A-Z][a-z]+/g, '$& ').split(' ');
    } 

    return str.split(diameter);
}

/**
 * # studle_case(string, diameter='_')
 * 
 * Convert given snake_case string into studleCase.
 *
 * @param  {String} str
 * @param  {String} diameter
 *
 * @return {String}
 */
function studle (str, diameter='_') {
    let words = parse(str, diameter).map( word => title_case(word));
    let first = lower_case(words.shift());
    
    return [first].concat(words).join('');
}

module.exports = studle;