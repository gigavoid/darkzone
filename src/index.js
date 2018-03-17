import * as PIXI from 'pixi.js'

import pixieSpine from './assets/Pixie.js'

import bgTile from './assets/iP4_BGtile.jpg'
import ground from './assets/iP4_ground.png'

console.log(pixieSpine)

var app = new PIXI.Application()
document.body.appendChild(app.view)

app.stop()

// load spine data
PIXI.loader.add('pixie', pixieSpine).load(onAssetsLoaded)

var postition = 0
var background
var background2
var foreground
var foreground2

app.stage.interactive = true

function onAssetsLoaded(loader, res) {
  background = PIXI.Sprite.fromImage(bgTile)
  background2 = PIXI.Sprite.fromImage(bgTile)

  foreground = PIXI.Sprite.fromImage(ground)
  foreground2 = PIXI.Sprite.fromImage(ground)
  foreground.y = foreground2.y = 640 - foreground2.height

  app.stage.addChild(background, background2, foreground, foreground2)

  var pixie = new PIXI.spine.Spine(res.pixie.spineData)

  var scale = 0.3

  pixie.x = 1024 / 3
  pixie.y = 500

  pixie.scale.x = pixie.scale.y = scale

  app.stage.addChild(pixie)

  pixie.stateData.setMix('running', 'jump', 0.2)
  pixie.stateData.setMix('jump', 'running', 0.4)

  pixie.state.setAnimation(0, 'running', true)

  app.stage.on('pointerdown', onTouchStart)

  function onTouchStart() {
    pixie.state.setAnimation(0, 'jump', false)
    pixie.state.addAnimation(0, 'running', true, 0)
  }

  app.start()
}

app.ticker.add(function() {
  postition += 10

  background.x = -(postition * 0.6)
  background.x %= 1286 * 2
  if (background.x < 0) {
    background.x += 1286 * 2
  }
  background.x -= 1286

  background2.x = -(postition * 0.6) + 1286
  background2.x %= 1286 * 2
  if (background2.x < 0) {
    background2.x += 1286 * 2
  }
  background2.x -= 1286

  foreground.x = -postition
  foreground.x %= 1286 * 2
  if (foreground.x < 0) {
    foreground.x += 1286 * 2
  }
  foreground.x -= 1286

  foreground2.x = -postition + 1286
  foreground2.x %= 1286 * 2
  if (foreground2.x < 0) {
    foreground2.x += 1286 * 2
  }
  foreground2.x -= 1286
})

document.querySelector('#app').innerHTML = Date.now()
