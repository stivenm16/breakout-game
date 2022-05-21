import { ctx } from './main.js'
let speed = 6
export let ball= {
    x: canvas.width /2,
    y: canvas.height - 50,
    dx: speed,
    dy: -speed + 1,
    radius: 7,
    draw: function(){
        ctx.beginPath()
        ctx.fillStyle = '#230c33'
        ctx.arc(this.x, this.y, this.radius,0,Math.PI * 2, true)
        ctx.closePath()
        ctx.fill()
    }
}

export let paddle = {
    height: 18,
    width: 76,
    x: canvas.width / 2 - 76 /2,
    draw: function() {
        ctx.beginPath()
        ctx.rect(this.x,canvas.height - this.height, this.width, this.height)
        ctx.fillStyle = '#230c33'
        ctx.closePath()
        ctx.fill()
    }
}
