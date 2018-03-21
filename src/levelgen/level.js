export default class Level {
  constructor() {
    this.tiles = []
    this.start = { x: 0, y: 0 }
  }

  isTilePassable(x, y) {
    return this.tiles[x][y].passable
  }
}
