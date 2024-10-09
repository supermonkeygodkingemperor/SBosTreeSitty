class ConsoleOutput {
  constructor() {
    this.logs = [];
  }

  log(message) {
    this.logs.push(message);
  }

  getLogs() {
    return this.logs;
  }
}

export default ConsoleOutput;
