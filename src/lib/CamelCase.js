import title_case from './TitleCase';
import studle_case from './StudleCase';

/**
 * # camel_case(string)
 * 
 * Convert snake_case or studleCase into CamelCase.
 *
 * @param  {String} str
 *
 * @return {String}
 */
export default function (str) {
    return title_case(studle_case(str));
}