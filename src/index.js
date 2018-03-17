import * as PIXI from 'pixi.js'

const keysDown = {}

window.addEventListener('keydown', e => {
  keysDown[e.keyCode] = true
})

window.addEventListener('keyup', e => {
  delete keysDown[e.keyCode]
})

let app = new PIXI.Application({
  width: document.body.clientWidth,
  height: document.body.clientHeight,
  antialiasing: true,
  transparent: false,
  resolution: 1
})

document.body.appendChild(app.view)

const mapSize = 100

let tiles = []

let player = {
  x: 1,
  y: 1,
  lastx: 1,
  lasty: 1
}

app.stage.interactive = true

// Setting up resize
window.onresize = event => {
  app.renderer.resize(document.body.clientWidth, document.body.clientHeight)
}

// Generating map
for (let x = 0; x < mapSize; x++) {
  tiles[x] = []
  for (let y = 0; y < mapSize / 2; y++) {
    let tile = {
      passable: false,
      gfx: new PIXI.Graphics()
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

    if (player.x === x && player.y === y) {
      tile.gfx.beginFill(0x0000ff, 1)
      tile.gfx.drawRect(x * 10, y * 10, 10, 10)
    } else if (tile.passable) {
      tile.gfx.beginFill(0x00ff00, 1)
      tile.gfx.drawRect(x * 10, y * 10, 10, 10)
    } else {
      tile.gfx.beginFill(0xff0000, 1)
      tile.gfx.drawRect(x * 10, y * 10, 10, 10)
    }

    tiles[x][y] = tile
    app.stage.addChild(tile.gfx)
  }
}

app.ticker.add(delta => loop(delta))

function loop(delta) {
  if (keysDown[37]) {
    tryMove(player, 'left')
  }

  if (keysDown[38]) {
    tryMove(player, 'up')
  }

  if (keysDown[39]) {
    tryMove(player, 'right')
  }

  if (keysDown[40]) {
    tryMove(player, 'down')
  }

  // Draw tiles
  if (player.x !== player.lastx && player.y !== player.lasty) {
    let pTile = tiles[player.x][player.y]
    let lTile = tiles[player.lastx][player.lasty]

    if (lTile.passable) {
      lTile.gfx.beginFill(0x00ff00, 1)
      lTile.gfx.drawRect(player.lastx * 10, player.lasty * 10, 10, 10)
    } else {
      lTile.gfx.beginFill(0xff0000, 1)
      lTile.gfx.drawRect(player.lastx * 10, player.lasty * 10, 10, 10)
    }

    pTile.gfx.beginFill(0x0000ff, 1)
    pTile.gfx.drawRect(player.x * 10, player.y * 10, 10, 10)
  }
}

function tryMove(player, direction) {
  switch (direction) {
    case 'up':
      if (tiles[player.x][player.y - 1].passable) {
        player.lasty = player.y
        player.y--
      }
      break
    case 'down':
      if (tiles[player.x][player.y + 1].passable) {
        player.lasty = player.y
        player.y++
      }
      break
    case 'left':
      if (tiles[player.x - 1][player.y].passable) {
        player.lastx = player.x
        player.x--
      }
      break
    case 'right':
      if (tiles[player.x + 1][player.y].passable) {
        player.lastx = player.x
        player.x++
      }
      break
    default:
      break
  }
}
