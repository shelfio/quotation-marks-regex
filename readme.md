# quotation-marks-regex [![CircleCI](https://circleci.com/gh/shelfio/quotation-marks-regex/tree/master.svg?style=svg)](https://circleci.com/gh/shelfio/quotation-marks-regex/tree/master) ![](https://img.shields.io/badge/code_style-prettier-ff69b4.svg) [![npm (scoped)](https://img.shields.io/npm/v/@shelf/quotation-marks-regex.svg)](https://www.npmjs.com/package/@shelf/quotation-marks-regex)

> Regular expression for matching quotation marks ([source](https://en.wikipedia.org/wiki/Quotation_mark#Summary_table))

## Install

```
$ yarn add @shelf/quotation-marks-regex
```

## Usage

```js
const regex = require('@shelf/quotation-marks-regex');

const input = `"hello" 'hello' ,hello‘ «hello» ”hello” “hello“ ’hello’ ‚hello‛ „hello„ ‹hello›`;

// strip all quotation marks
const output = input.replace(new RegExp(regex, 'g'), '');
// => hello hello hello hello hello hello hello hello hello hello hello
```


## Publish

```sh
$ git checkout master
$ yarn version
$ yarn publish
$ git push origin master --tags
```


## License

MIT © [Shelf](https://shelf.io)
