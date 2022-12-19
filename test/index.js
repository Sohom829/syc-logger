const {
  basicColors,
  renderLines,
  logTime,
  logDate,
  logTaD,
  logPCInfo,
  logTaDAsync,
  renderLinesAsync,
  renderDoubledLines,
  renderTripleLinesAsync,
  renderTripleLines,
  renderDoubledLinesAsync,
  renderDots,
  logEmoji,
} = require("../dist/index");

const logColor = (message) => {
  console.log(basicColors.seaGreen(message));
};
renderDots(40);

logEmoji("Working");

const PCInfo = new logPCInfo();

PCInfo.getCPUInfo();
PCInfo.getPCUSerInfo();

console.log(renderDoubledLinesAsync(20));
console.log(renderTripleLinesAsync(10));
renderDoubledLines(20);
renderTripleLines(20);

console.log(renderLinesAsync(40, "#808000"));
logColor("Hi");
logTaD("#808000");
console.log(logTaDAsync("#808000"));
renderLines(40, `#808000`);
