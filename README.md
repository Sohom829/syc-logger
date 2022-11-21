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

- Emoji logger
- Hex Color Support
- Unique Colors
- Line Logger
- Time Logger
- Line Logger
- Async Functions Logger
- PC Info Logger

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
const { logTime } = require("syc-logger");

logTime(); // It will log the current hour-minute-second
```

You can use color here too

```js
const { logTime } = require("syc-logger");

logTime("#808000"); // It will log the current hour-minute-second with olive color
```

### How to log both Time and Date together?

Now you want to log the **Time** and **Date** together.

There is actually two ways one is using a function and other one is using Asyc Functions. We'll learn both of it.

#### Using the Built-In Fuction

So, let's start with the built-in fuction. In our moudle we have a method called `logTaD` with will log the time and date

```js
const { logTaD } = require("syc-logger"); // Importing logTaD from syc-logger

logTaD(); // Color also can be used here.
```

#### Using the Async Functions

If you don't want to apply built-in options, don't worry we have another one. We have to use two methods for this one is `logTimeAsync()` and another one is `logDateAsync()`

The code is so simple

```js
const { logTimeAsync, logDateAsync, basicColors } = require("syc-logger");

const logTimeAndDateTogether = logTimeAsync() + logDateAsync(); // adding 2 fuctions in a variable

console.log(basicColors.olive(logTimeAndDateTogether)); // Now it will log time and date together
```

### How to render lines?

You guys may wanna render lines. We have a method for it.

```js
const { renderLines } = require("syc-logger");

renderLines(20, "#808000");
```

**NOTE: The maximum amount of `renderLines` is 40. You cannot add more than 40**

The limit is only 40 but you can use doubled renderLines instead.

```js
const { renderDoubledLines } = require("syc-logger");

renderDoubledLines(20); // You can use color here as well
```

But if your console is like a huge TV then you can use `renderTripleLines`

```js
const { renderTripleLines } = require("syc-logger");

renderTripleLines(20); // You can use color here as well as the last one
```

### Async fuctions

Now, you want a function that don't log a anything but do what it does.

I know that sound's confusing but you will get it used. It is so easy...

```js
const { logTaDAsync } = require("syc-logger"); // Importing the module

const TimeAndDate = logTaDAsync(); // It will not log anything
```

So, in this code we used `logTaDAsync()` as a veriable and it will return nothing but if you do

```js
const { logTaDAsync } = require("syc-logger");

const TimeAndDate = logTaDAsync();

console.log(TimeAndDate); // Now it will return the current Time and date
```

Now we've logged the varibale that we'd declared in earlier code.

#### List of Async Funtions

- logTimeAsync(color?: string | undefined)
- logDateAsync(color?: string | undefined)
- logTaDAsync(color?: string | undefined)
- renderLinesAsync(amount: number, color?: string | undefined)
- logPCInfo(): Constructor

### How to use PCInfo constructor

```js
const { logPCInfo } = require("syc-logger");

const PCInfo = new logPCInfo();

PCInfo.getPCCPUInfo(); // It will log CPU Info
```

You can use Async Function here as well

```js
const { logPCInfo } = require("syc-logger");

const PCInfo = new logPCInfo();

const CPUInfo = PCInfo.getPCCPUInfoAsync(); // It will get the CPU Info

console.log(CPUInfo); // It will log the CPU Info
```

If you want know all about CPU kindly read this [documentation](https://www.w3schools.com/nodejs/ref_os.asp)

#### Changes

- cpus(): getPCCPUInfo() / getPCCPUInfoAsync
- arch(): getPCArch() / getPCArch()
- uptime(): getPCUptime() / getPCUptimeAsync()

### How to log Emojis?

If you want to log a message with Emoji. You can try our `logEmoji`
and `logEmojiAsync` function

#### Option

```ts
logEmoji(message: any, style: number, color: string, emoji: string)
```

Example:
```js
const { logEmoji } = require("syc-logger");

logEmoji("Message!"); // Default Emoji "✅"

```

I'm not talking about async because you already know what it does

## LICENSE

[MIT](https://github.com/Sohom829/syc-logger/blob/main/LICENSE)
