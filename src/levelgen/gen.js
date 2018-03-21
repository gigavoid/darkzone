import Level from './level.js'

export const generate = mapSize => {
  let level = new Level()

  for (let x = 0; x < mapSize; x++) {
    level.tiles[x] = []
    for (let y = 0; y < mapSize / 2; y++) {
      let tile = {
        passable: false
      }

      if (
        x !== 0 &&
        y !== 0 &&
        x !== mapSize - 1 &&
        y !== mapSize / 2 - 1 &&
        (Math.round(Math.random() / 1.5) - 1) * -1 === 1
      ) {
        tile.passable = true
      }

      level.tiles[x][y] = tile

      if (
        y !== 0 &&
        level.start.x === 0 &&
        level.start.y === 0 &&
        !tile.passable &&
        level.tiles[x][y - 1].passable
      ) {
        level.start.x = x
        level.start.y = y - 1
      }
    }
  }

  return level
}
