# format-date-time

[![Build Status](https://travis-ci.org/andreydos/date-time-format.svg?branch=master)](https://travis-ci.org/andreydos/date-time-format)
[![Coverage Status](https://coveralls.io/repos/github/andreydos/date-time-format/badge.svg?branch=master)](https://coveralls.io/github/andreydos/date-time-format?branch=master)

# Date time formatter

Lightweight date time formatter for node and browser.

# Getting started

**Browser usage** see in examples directory.

**Node usage**:

```
npm i format-date-time --save
```

```
import DateTimeFormat from 'format-date-time'

const defaultFormatter = new DateTimeFormat();

console.log(defaultFormatter.parse()); // return current date/time in default format
console.log(defaultFormatter.parse(new Date ("2017-10-02T05:05:05.985Z"), 'HH:mm:ss'));
console.log(defaultFormatter.parse("2017-10-02T08:18:31.985Z", 'HH:mm:ss (year: YYYY)')); // time string instead of Date object
console.log(defaultFormatter.now('HH:mm:ss')); // current time in specified format
console.log(defaultFormatter.now('HH:mm:ss (DD-MM-YYYY)'));
```

_or set format mask in the constructor:_

```
const formatter = new DateTimeFormat('HH:mm (YYYY-MM-DD)');
console.log(formatter.now()); // current date/time in format settled in constructor
console.log(formatter.parse(new Date ("2017-10-02T05:05:05.985Z")));
```

## Running the tests

Run test:

```
npm run test
```

Run test on Windows machine

```
npm run testWin
```

## Versioning

We use [SemVer](http://semver.org/) for versioning. 

## Authors

* **Andrii Dotsia** - *Initial work* - [andreydos](https://github.com/andreydos)

See also the list of [contributors](https://github.com/andreydos/date-time-format/graphs/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details