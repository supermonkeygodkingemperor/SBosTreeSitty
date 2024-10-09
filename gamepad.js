class GamepadIntegration {
  constructor() {
    this.gamepads = [];
  }

  connectGamepad(gamepad) {
    this.gamepads.push(gamepad);
  }

  disconnectGamepad(gamepad) {
    const index = this.gamepads.indexOf(gamepad);
    if (index !== -1) {
      this.gamepads.splice(index, 1);
    }
  }

  getGamepads() {
    return this.gamepads;
  }
}

export default GamepadIntegration;
