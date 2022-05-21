import { paddle } from './elements.js'

document.addEventListener('keydown', keyDownHandler)
document.addEventListener('keyup', keyUpHandler)

let rightPressed= false
let leftPressed= false


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

export function movePaddle() {
    if (rightPressed) {
        paddle.x += 7;
        if (paddle.x + paddle.width > canvas.width){
            paddle.x = canvas.width - paddle.width
        }
    } else if (leftPressed){
        paddle.x -= 7
        if (paddle.x < 0){
            paddle.x = 0
        }
    }
}
