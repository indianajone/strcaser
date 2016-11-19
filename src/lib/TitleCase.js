/**
 * # title_case(string)
 * 
 * Upper first letter of given string.
 *
 * @param  {String} str
 *
 * @return {String}
 */
export default function (str) {
    let words = str.split(' ');
    let firstWord = title(words.shift());

    return [firstWord].concat(words).join(' ');
}

function title(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}