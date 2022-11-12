# Syc-Logger

Advanced logger for your console

## Installation

### NPM

```sh
npm i syc-logger@latest
```

### YARN

```sh
yarn add syc-logger@latest
```

## Features

- Hex Color Support
- Unique Colors
- Line Logger
- Time Logger

## Documentation

Welcome to the documentation of **syc-logger**

Let's start with introduction

### Introduction

#### What is Syc-Logger?

**Syc-Logger** is an advaced logger for any terminal

#### Why Syc-Logger?

**Syc-Logger** is advanced than any other loggers. It is updated. It can log lines, date, time with any hex color.

### Requirements

- JavaScript Knowledge
- NodeJS 17.x
- A Code editor

### How get unique colors?

There is a method to get Unique colors. And it is `basicColors`

Here is an example to use `basicColors` method

```js
const { basicColors } = require("syc-logger");

console.log(basicColors.coral("Syc-Logger is very easy!"));
```

It also has background color support

```js
const { basicColors } = require("syc-logger");

console.log(basicColors.bgCoral("Syc-Logger is very easy!"));
```

Or you can also make a function

```js
const logColor = (message) => {
  console.log(basicColors.hotPink(message));
};

logColor("Hi");
```

#### Colors

- coral
- aliceBlue
- olive
- hotPink
- fireBrick
- cadetBlue
- bgCoral
- bgAliceBlue
- bgOlive
- bgHotPink
- bgFireBrick
- bgCadetBlue

### How to log date or time?

Most of you want to log the current date or time. Luckily there is 2 methods for you. One is `logDate` and another one is `logTime`

the `logDate` function is used to log the current day-month-year.

Using this method is quite simple

```js
const { logDate } = require("syc-logger");

logDate(); // It will log the current day-year-month
```

You can also use color here

```js
const { logDate } = require("syc-logger");

logDate("#808000"); // It will log the current day-year-month with olive color
```

Same goes to `logTime`

```js
const { logDate } = require("syc-logger");

logDate(); // It will log the current day-year-month
```

You can use color here too

```js
const { logTime } = require("syc-logger");

logTime("#808000"); // It will log the current day-year-month with olive color
```

### How to render lines?

You guys may wanna render lines. We have a method for it.

```js
const { renderLines } = require("syc-logger");

renderLines(20, "#808000");
```

**NOTE: The maximum amount of `renderLines` is 40. You cannot add more than 40**

## LICENSE

[MIT](https://github.com/Sohom829/syc-logger/blob/main/LICENSE)
