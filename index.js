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

/**
 * ? asteroids design
 */

class Player {
    constructor (position, velocity) {
        this.position = this.position   // {x: 0, y: 0}
        this.velocity = this.velocity
    }

    // draw (){
    //     c.fillStyle = '#f8fafc'
    //     c.fillRect( this.position.x, this.position.y, 100,100)
    // }
    draw() {
    c.fillStyle = '#f8fafc';
    c.fillRect(this.position.x, this.position.y, 100, 100);
}

}

// const player = new Player ( { {x: 0, y: 0},  {x: 0, y: 0} } )

const player = new Player({ 
    position: {x: 200, y: 100}, 
    velocity: {x: 0, y: 0},
 });

 player.draw()

console.log(player)