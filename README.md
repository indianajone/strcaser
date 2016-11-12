# Stringroid

"STRING ON STERIOD", It gives functionality to convert string into various cases. Also provides some utility function like random a string.

## Installation

Install module:

    `npm install stringroid --save`
    
## Usage

### snake_case

```javascript
import {snake_case} from "stringroid";

snake_case("I am a string on steriod"); // i_am_a_string_on_steriod
snake_case("IAmAStringOnSteriod"); // i_am_a_string_on_steriod
```

or passing a diameter as second argument.

```javascript
snake_case("i__am__a__string__on__streriod", "__") // i_am_a_string_on_steriod
```

### studle_case

```javascript
import {studle_case} from "stringroid";

studle_case("i_am_a_string_on_steriod"); // iAmAStringOnSteriod
studle_case("IAmAStringOnSteriod"); //  iAmAStringOnSteriod
```

or passing a diameter as second argument.

```javascript
studle_case("i.am.a.string.on.steriod"); // iAmAStringOnSteriod
```

### camel_case

```javascript
import {camel_case} from "stringroid";

camel_case("i_am_a_string_on_steriod"); // IAmAStringOnSteriod
camel_case("iAmAStringOnSteriod"); //  IAmAStringOnSteriod
```

### title_case

```javascript
import {title_case} from "stringroid";

title_case("i'm a string on steriod"); // I'm a string on steriod
```


### lower_case

```javascript
import {lower_case} from "stringroid";

lower_case("I'm a String on steriod"); // i'm a String on steriod
```
