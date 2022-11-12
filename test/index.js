const {
  basicColors,
  renderLines,
  logTime,
  logDate,
  logTaD,
} = require("../dist/index");

const logColor = (message) => {
  console.log(basicColors.bgCoral(message));
};

renderLines(40, `#808000`);
logColor("Hi");
logTaD("#808000");
renderLines(40, `#808000`);
