class EmulationControls {
  constructor() {
    this.paused = false;
    this.speed = 1;
  }

  pause() {
    this.paused = true;
  }

  resume() {
    this.paused = false;
  }

  adjustSpeed(speed) {
    this.speed = speed;
  }
}

export default EmulationControls;
