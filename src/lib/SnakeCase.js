/**
 * # snake_case(string, diameter=' ')
 * 
 * Convert given string into snake_case.
 *
 * @param  {String} str
 * @param  {String} diameter
 *
 * @return {String}
 */
export default function (str, diameter='\\s') {
    return str.replace(/([A-Z])([a-z]+)?/g, '$& ')
            .trim()
            .replace(new RegExp(`${diameter}+`, 'g'), '_')
            .toLowerCase();
}