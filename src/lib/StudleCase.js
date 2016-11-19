import lower_case from './LowerCase';
import title_case from './TitleCase';

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
export default function (str, diameter='_') {
    let words = parse(str, diameter).map( word => title_case(word));
    let first = lower_case(words.shift());
    
    return [first].concat(words).join('');
}

function isCamelcase(str) {
    return /^[A-Z][a-z]+/g.test(str);
}

function parse (str, diameter) {
    if(isCamelcase(str)) {
        return str.replace(/[a-z]?[A-Z][a-z]+/g, '$& ').split(' ');
    } 

    return str.split(diameter);
}
