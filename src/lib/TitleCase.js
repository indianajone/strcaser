
function title(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * # title_case(string)
 * 
 * Upper first letter of given string.
 *
 * @param  {String} str
 *
 * @return {String}
 */
function titleCase (str) {
    let words = str.split(' ');
    let firstWord = title(words.shift());

    return [firstWord].concat(words).join(' ');
}

module.exports = titleCase;