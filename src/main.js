import { paddle } from "./elements.js";
import { ball } from "./elements.js";
import { drawBricks } from "./bricks.js";
import { generateBricks } from "./bricks.js";
import { levelUp } from "./levelUp.js";
import { collisionDetection } from "./collision.js";
import { movePaddle } from "./move.js";
const scoreDisplay = document.querySelector('.high-score')
const canvas = document.getElementById('canvas');
const reset = document.querySelector('.reset')

canvas.height = 500;
canvas.width = 600;
export const ctx = canvas.getContext('2d')

export let speed = 6
export let score = 0;


let highScore = parseInt(localStorage.getItem('highScore'))
if (isNaN(highScore)){
    highScore = 0
}

scoreDisplay.innerHTML = `High Score: ${highScore}`

reset.addEventListener('click', ()=> {
    localStorage.setItem('highScore', '0')
    score = 0
    scoreDisplay.innerHTML = `High Score: 0`
})


function drawScore(){
    ctx.font = '16px Arial';
    ctx.fillStyle = '#230c33';
    ctx.fillText('Score: '+ score, 8, 20) 

}

function play(){
    // console.log(ball)
    ctx.clearRect(0,0,canvas.width, canvas.height)
    ball.draw()
    paddle.draw()
    drawBricks()
    levelUp()
    movePaddle()
    collisionDetection()
    drawScore()

    ball.x += ball.dx
    ball.y += ball.dy

    if (ball.x + ball.radius > canvas.width || ball.x - ball.radius < 0) {
        ball.dx *= -1
    }
    if (ball.y + ball.radius > canvas.height || ball.y -ball.radius < 0) {
        ball.dy *= -1
    }

    if (ball.y + ball.radius > canvas.height){
        if (score > parseInt(localStorage.getItem('highScore'))){
            localStorage.setItem('highScore', score.toString())
            scoreDisplay.innerHtml = `High Score: ${score}`
        }
        score = 0
        generateBricks()
        ball.dx = speed
        ball.dy = -speed + 1
    }

    if (ball.x >= paddle.x && ball.x <= paddle.x + paddle.width && ball.y + ball.radius >= canvas.height - paddle.height){
        ball.dy *= -1
    }
    requestAnimationFrame(play)
}


generateBricks()
play()