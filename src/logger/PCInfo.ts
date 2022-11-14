const os = require("node:os");
const chalk = require("chalk");

class logPCInfo {
  methods: any;
  constructor() {
    this.methods = [
      "getPCCPUInfo",
      "getPCArch",
      "getPCFreeMemory",
      "getPCHostName",
      "getPCPlatform",
      "getPCRelease",
      "getPCUptime",
      "getPCUserInfo",
      "getPCOSInfo",
    ];
  }
  async getCPUInfo(color: string = "#FFFFFF") {
    const Color = chalk.hex(`${color}`);

    console.log(Color(os.cpus()));
  }
  async getPCArch(color: string = "#FFFFFF") {
    const Color = chalk.hex(`${color}`);

    console.log(Color(os.arch()));
  }
  async getPCFreeMemory(color: string = "#FFFFFF") {
    const Color = chalk.hex(`${color}`);
    console.log(Color(os.freemem()));
  }
  async getPCHostName(color: string = "#FFFFFF") {
    const Color = chalk.hex(`${color}`);
    console.log(Color(os.hostname()));
  }
  async getPCPlatform(color: string = "#FFFFFF") {
    const Color = chalk.hex(`${color}`);
    console.log(Color(os.platform()));
  }
  async getPCRelease(color: string = "#FFFFFF") {
    const Color = chalk.hex(`${color}`);
    console.log(Color(os.release()));
  }
  async getPCUptime(color: string = "#FFFFFF") {
    const Color = chalk.hex(`${color}`);
    console.log(Color(os.uptime()));
  }
  async getPCUSerInfo(color: string = "#FFFFFF") {
    const Color = chalk.hex(`${color}`);
    console.log(Color(os.userInfo()));
  }
  async getPCOSInfo(color: string = "#FFFFFF") {
    const Color = chalk.hex(`${color}`);
    console.log(Color(os.type()));
  }
}

export { logPCInfo };
