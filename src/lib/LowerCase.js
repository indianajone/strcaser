/**
 * # lower_case(string)
 * 
 * Lower first letter of given string.
 *
 * @param  {String} str
 *
 * @return {String}
 */
export default function (str) {
    return str.charAt(0).toLowerCase() + str.slice(1);
}