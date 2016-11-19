[![codecov](https://codecov.io/gh/indianajone/strcaser/branch/master/graph/badge.svg)](https://codecov.io/gh/indianajone/strcaser)

# String Caser

"STRING CASER", It gives functionality to convert string into various cases.

## Installation

Install module:

    `npm install strcaser --save`
    
## Usage

### snake_case

```javascript
import {snake_case} from "strcaser";

snake_case("I am a string"); // i_am_a_string
snake_case("IAmAString"); // i_am_a_string
```

or passing a diameter as second argument.

```javascript
snake_case("i__am__a__string", "__") // i_am_a_string
```

### studle_case

```javascript
import {studle_case} from "strcaser";

studle_case("i_am_a_string"); // iAmAString
studle_case("IAmAString"); //  iAmAString
```

or passing a diameter as second argument.

```javascript
studle_case("i.am.a.string"); // iAmAString
```

### camel_case

```javascript
import {camel_case} from "strcaser";

camel_case("i_am_a_string"); // IAmAString
camel_case("iAmAString"); //  IAmAString
```

### title_case

```javascript
import {title_case} from "strcaser";

title_case("i'm a string"); // I'm a string
```


### lower_case

```javascript
import {lower_case} from "strcaser";

lower_case("I'm a String"); // i'm a String
```

## Test

Test module:

    `npm test`

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2016 Ravi Vaisayawan