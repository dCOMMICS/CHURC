console.log("Starting")

const canvas = document.querySelector('canvas')
const c = canvas.getContext("2d")
console.log(canvas)

canvas.width = window.innerWidth
canvas.height = window.innerHeight

console.log(c)
/**
 *  ? change  color
 */
c.fillStyle = '#450a0a'
c.fillRect(0,0,canvas.width,canvas.height)