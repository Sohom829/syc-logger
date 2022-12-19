const chalk = require("chalk");

const logEmoji = (
  message: any,
  style: number = 1,
  color: string = "#FFFFFF",
  emoji: string = "✅"
) => {
  const Color = chalk.hex(`${color}`);
  if (style === 1) {
    console.log(emoji + Color("  》" + message));
  } else if (style === 2) {
    console.log(emoji + Color("  〕" + message));
  } else if (style === 3) {
    console.log(emoji + Color("  〙" + message));
  } else if (style === 4) {
    console.log(emoji + Color("  ﹞ " + message));
  } else if (style === 5) {
    console.log(emoji + Color(" > " + message));
  } else if (style === 6) {
    console.log(emoji + Color(" ⟭ " + message));
  } else {
    throw new TypeError(`Syc-Logger doesn\'t have ${style}th style`);
  }
};

const logEmojiAsync = (
  message: any,
  style: number = 1,
  color: string = "#FFFFFF",
  emoji: string = "✅"
) => {
  const Color = chalk.hex(`${color}`);
  if (style === 1) {
    return emoji + Color("  》" + message);
  } else if (style === 2) {
    return emoji + Color("  〕" + message);
  } else if (style === 3) {
    return emoji + Color("  〙" + message);
  } else if (style === 4) {
    return emoji + Color("  ﹞ " + message);
  } else if (style === 5) {
    return emoji + Color(" > " + message);
  } else if (style === 6) {
    return emoji + Color(" ⟭ " + message);
  } else {
    throw new TypeError(`Syc-Logger doesn\'t have ${style}th style`);
  }
};

export { logEmoji, logEmojiAsync };
