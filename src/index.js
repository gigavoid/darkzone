import * as PIXI from 'pixi.js'
import * as LevelGen from './levelgen/gen.js'
import * as Matter from 'matter-js'

import impassTex from './assets/impass.png'
import passTex from './assets/pass.png'
import playerTex from './assets/player.png'

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

let engine = Matter.Engine.create()
let world = engine.world

document.body.appendChild(app.view)

const mapSize = 100

let level

let player = {}

app.stop()

PIXI.loader.load(onAssetsLoaded)

app.stage.interactive = true

function onAssetsLoaded(loader, res) {
  player.sprite = PIXI.Sprite.fromImage(playerTex)
  player.sprite.x = 10
  player.sprite.y = 10

  level = LevelGen.generate(mapSize)

  assignSprites(level.tiles)
  assignHitboxes(level.tiles)

  player.rigidBody = Matter.Bodies.rectangle(10, 10, 10, 10)
  Matter.World.add(world, player.rigidBody)

  app.stage.addChild(player.sprite)
  app.start()
}

function assignSprites(tiles) {
  for (let x = 0; x < tiles.length; x++) {
    for (let y = 0; y < tiles[x].length; y++) {
      let tile = tiles[x][y]

      if (tile.passable) {
        tile.sprite = PIXI.Sprite.fromImage(passTex)
      } else {
        tile.sprite = PIXI.Sprite.fromImage(impassTex)
      }

      tile.sprite.x = x * 10
      tile.sprite.y = y * 10

      app.stage.addChild(tile.sprite)
    }
  }
}

function assignHitboxes(tiles) {
  let bodies = []

  for (let x = 0; x < tiles.length; x++) {
    for (let y = 0; y < tiles[x].length; y++) {
      let tile = tiles[x][y]

      if (!tile.passable) {
        let rect = Matter.Bodies.rectangle(x * 10, y * 10, 10, 10, {
          isStatic: true
        })

        tile.rect = rect

        bodies.push(rect)
      }
    }
  }

  Matter.World.add(world, bodies)
}

app.ticker.add(delta => loop(delta))

function loop(delta) {
  if (keysDown[37] || keysDown[65]) {
    tryMove(player, 'left', delta)
  }

  if (keysDown[38] || keysDown[87]) {
    tryMove(player, 'up', delta)
  }

  if (keysDown[39] || keysDown[68]) {
    tryMove(player, 'right', delta)
  }

  if (keysDown[40] || keysDown[83]) {
    tryMove(player, 'down', delta)
  }

  if (keysDown[32] || keysDown[96]) {
    tryMove(player, 'down', delta)
  }

  Matter.Engine.update(engine, delta * 1000 / 60)

  player.sprite.x = player.rigidBody.position.x
  player.sprite.y = player.rigidBody.position.y
}

function tryMove(player, direction, delta) {
  switch (direction) {
    case 'up':
      Matter.Body.setVelocity(player.rigidBody, { y: -2, x: 0 })
      break
    case 'down':
      break
    case 'left':
      Matter.Body.translate(player.rigidBody, { x: -delta, y: 0 })
      break
    case 'right':
      Matter.Body.translate(player.rigidBody, { x: delta, y: 0 })
      break
    default:
      break
  }
}

window.onresize = event => {
  app.renderer.resize(document.body.clientWidth, document.body.clientHeight)
}
