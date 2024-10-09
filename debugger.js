import { ISOLoader } from 'iso-loader';
import { XEXLoader } from 'xex-loader';

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
    // Implement game saving logic
  }
}

export default GameLoader;
