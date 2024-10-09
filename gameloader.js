class GameLoader {
  constructor() {
    this.isoLoader = new ISOLoader();
    this.xexLoader = new XEXLoader();
  }

  loadGame(game) {
    try {
      if (game.type === 'iso') {
        this.isoLoader.load(game.file);
      } else if (game.type === 'xex') {
        this.xexLoader.load(game.file);
      }
    } catch (error) {
      console.error('GameLoader Error:', error);
    }
  }

  saveGame(game) {
    try {
      // Implement game saving logic
    } catch (error) {
      console.error('GameLoader Save Error:', error);
    }
  }
}

export default GameLoader;
