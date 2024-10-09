class GameList {
  constructor() {
    this.games = [];
  }

  addGame(game) {
    this.games.push(game);
  }

  removeGame(game) {
    const index = this.games.indexOf(game);
    if (index !== -1) {
      this.games.splice(index, 1);
    }
  }

  getGames() {
    return this.games;
  }
}

export default GameList;
