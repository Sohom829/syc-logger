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
      "getPCCPUInfoAsync",
      "getPCArchAsync",
      "getPCFreeMemoryAsync",
      "getPCHostNameAsync",
      "getPCPlatformAsync",
      "getPCReleaseAsync",
      "getPCUptimeAsync",
      "getPCUserInfoAsync",
      "getPCOSInfoAsync",
    ];
  }
  async getCPUInfo(color: string = "#FFFFFF") {
    const Color = chalk.hex(`${color}`);

    console.log(Color(JSON.stringify(os.cpus())));
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
    console.log(Color(JSON.stringify(os.userInfo())));
  }
  async getPCOSInfo(color: string = "#FFFFFF") {
    const Color = chalk.hex(`${color}`);
    console.log(Color(os.type()));
  }
  async getCPUInfoAsync(color: string = "#FFFFFF") {
    const Color = chalk.hex(`${color}`);

    return Color(JSON.stringify(os.cpus()));
  }
  async getPCArchAsync(color: string = "#FFFFFF") {
    const Color = chalk.hex(`${color}`);

    return Color(os.arch());
  }
  async getPCFreeMemoryAsync(color: string = "#FFFFFF") {
    const Color = chalk.hex(`${color}`);
    return Color(os.freemem());
  }
  async getPCHostNameAsync(color: string = "#FFFFFF") {
    const Color = chalk.hex(`${color}`);
    return Color(os.hostname());
  }
  async getPCPlatformAsync(color: string = "#FFFFFF") {
    const Color = chalk.hex(`${color}`);
    return Color(os.platform());
  }
  async getPCReleaseAsync(color: string = "#FFFFFF") {
    const Color = chalk.hex(`${color}`);
    return Color(os.release());
  }
  async getPCUptimeAsync(color: string = "#FFFFFF") {
    const Color = chalk.hex(`${color}`);
    return Color(os.uptime());
  }
  async getPCUSerInfoAsync(color: string = "#FFFFFF") {
    const Color = chalk.hex(`${color}`);
    return Color(JSON.stringify(os.userInfo()));
  }
  async getPCOSInfoAsync(color: string = "#FFFFFF") {
    const Color = chalk.hex(`${color}`);
    return Color(os.type());
  }
}

export { logPCInfo };
