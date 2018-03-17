const keysDown = {}

window.addEventListener('keydown', e => {
  keysDown[e.keyCode] = true
})

window.addEventListener('keyup', e => {
  delete keysDown[e.keyCode]
})
