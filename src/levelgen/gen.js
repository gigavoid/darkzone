import Level from './level.js'
import * as Chunks from './chunks.js'

export const generate = mapSize => {
  let chunks = Chunks.getChunks()

  let level = new Level()
  let totalWeight = chunks.reduce((accu, curr) => accu + curr.weight, 0)
  let base = mapSize / 4

  let currWidth = 0
  let done = false

  while (!done) {
    let limit = Math.random() * totalWeight

    let currWeight = 0
    let chunk = chunks.find(c => {
      currWeight += c.weight
      return currWeight >= limit
    })

    if (mapSize - 2 < currWidth + chunk.width) {
      for (let x = currWidth; x < mapSize; x++) {
        level.tiles[x] = []
        for (let y = 0; y < mapSize / 2; y++) {
          level.tiles[x][y] = {
            passable: false
          }
        }
      }
      done = true
      break
    }

    let chunkStartX = currWidth

    for (let x = currWidth; x < chunkStartX + chunk.width; x++) {
      level.tiles[x] = []
      let chunkStartY = base - chunk.height + chunk.floorLevel
      for (let y = 0; y < mapSize / 2; y++) {
        let tile = {
          passable: false
        }

        if (x !== 0 && y !== 0 && x !== mapSize - 1 && y !== mapSize / 2 - 1) {
          if (y < chunkStartY) {
            tile.passable = true
          } else if (y <= chunkStartY + chunk.height) {
            tile.passable =
              chunk.tiles[x - chunkStartX][y - chunkStartY] === 'p'
          }
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
      currWidth++
    }
  }

  return level
}
