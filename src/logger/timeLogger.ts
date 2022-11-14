const moment = require("moment");
const chalk = require("chalk");

const logDate = (color: string = "#FFFFFF") => {
  const date = `${moment().format("DD-MM-YYYY")}`;

  const Color = chalk.hex(`${color}`);
  console.log(Color(date));
};
const logTime = (color: string = "#FFFFFF") => {
  const Color = chalk.hex(`${color}`);
  const date = `${moment().format("hh:mm:ss")}`;
  console.log(Color(date));
};

const logTaD = (color: string = "#FFFFFF") => {
  const Color = chalk.hex(`${color}`);
  const date = `${moment().format("DD-MM-YYYY hh:mm:ss")}`;
  console.log(Color(date));
};

const logDateAsync = (color: string = "#FFFFFF") => {
  const Color = chalk.hex(`${color}`);
  const date = Color(`${moment().format("DD-MM-YYYY")}`);
};

const logTimeAsync = (color: string = "#FFFFFF") => {
  const Color = chalk.hex(`${color}`);
  const date = Color(`${moment().format("hh:mm:ss")}`);

  return date;
};

const logTaDAsync = (color: string = "#FFFFFF") => {
  const Color = chalk.hex(`${color}`);
  const date = Color(`${moment().format("DD-MM-YYYY hh:mm:ss")}`);

  return date;
};

export { logDate, logTime, logTaD, logTaDAsync, logTimeAsync, logDateAsync };
