const {
  basicColors,
  renderLines,
  logTime,
  logDate,
  logTaD,
  logPCInfo,
  logTaDAsync,
  renderLinesAsync,
} = require("../dist/index");

const logColor = (message) => {
  console.log(basicColors.seaGreen(message));
};

const PCInfo = new logPCInfo();

PCInfo.getPCUSerInfo();

console.log(renderLinesAsync(40, "#808000"));
logColor("Hi");
logTaD("#808000");
console.log(logTaDAsync("#808000"));
renderLines(40, `#808000`);
