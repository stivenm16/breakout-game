const canvas = document.getElementById('canvas');
canvas.height = 500;
canvas.width = 600;
const ctx = canvas.getContext('2d')

let rightPressed= false;
let leftPressed= false;
document.addEventListener('keydown', keyDownHandler)
document.addEventListener('keyup', keyUpHandler)

function keyDownHandler(e) {
    if (e.key == 'Right' || e.key == 'ArrowRight') {
        rightPressed = true
    } else if (e.key == 'Left' || e.key == 'ArrowLeft'){
        leftPressed = true;
    }
}
function keyUpHandler(e) {
    if (e.key == 'Right' || e.key == 'ArrowRight') {
        rightPressed = false
    } else if (e.key == 'Left' || e.key == 'ArrowLeft'){
        leftPressed = false;
    }
}

function movePaddle() {
    if (rightPressed) {
        paddle.x += 7;
        if (paddle.x + paddle.width > canvas.width){
            paddle.x = canvas.width - paddle.width
        }
    } else if (leftPressed){
        paddle.x -= 7;
        if (paddle.x < 0){
            paddle.x = 0
        }
    }
}

let speed = 3
let ball= {
    x: canvas.width /2,
    y: canvas.height - 50,
    dx: speed,
    dy: -speed + 1,
    radius: 7,
    draw: function(){
        ctx.beginPath()
        ctx.fillStyle = '#230c33';
        ctx.arc(this.x, this.y, this.radius,0,Math.PI * 2, true)
        ctx.closePath()
        ctx.fill()
    }
}

let paddle = {
    height: 18,
    width: 76,
    x: canvas.width / 2 - 76 /2,
    draw: function() {
        ctx.beginPath()
        ctx.rect(this.x,canvas.height - this.height, this.width, this.height)
        ctx.fillStyle = '#230c33';
        ctx.closePath();
        ctx.fill()
    }
}

function play(){
    ctx.clearRect(0,0,canvas.width, canvas.height)
    ball.draw()
    paddle.draw()
    movePaddle()

    ball.x += ball.dx
    ball.y += ball.dy

    if (ball.x + ball.radius > canvas.width || ball.x - ball.radius < 0) {
        ball.dx *= -1
    }
    if (ball.y + ball.radius > canvas.height || ball.y -ball.radius < 0) {
        ball.dy *= -1
    }

    if (ball.x >= paddle.x && ball.x <= paddle.x + paddle.width && ball.y + ball.radius >= canvas.height - paddle.height){
        ball.dy *= -1
    }
    requestAnimationFrame(play)
}


let brickRowCount = 3;
let brickColumCount = 5;

let brickWidth = 70;
let brickHeight = 20;
let brickPadding = 20;
let brickOffSetTop = 30;
let brickOffSetLeft = 35;

let bricks = []

function generateBricks(){
    for (let c = 0; c <=brickColumCount; c++){
        bricks[c] = []
        for (let r = 0; r <= brickRowCount; r++){
            bricks[c][r] = {x:0, y:0, status: 1}
        }
    }
        
}

function drawBricks(){
    for (let c = 0; c < brickColumCount; c++){
        for (let r = 0; r <= brickRowCount; r++){
            if (bricks[c][r].status === 1){
                let brickX = c * (brickWidth + brickPadding) + brickOffSetLeft;
                let brickY = r * (brickHeight + brickPadding) + brickOffSetTop
                bricks[c][r] = brickX
                bricks[c][r].y = brickY
                ctx.beginPath()
                ctx.rect(brickX,brickY, brickWidth, brickHeight)
                ctx.fillStyle = '#230c33'
                ctx.fill()
                ctx.closePath;
            }
        }
    }
}
function p() {
    
}
play()