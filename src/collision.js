import { ball } from "./elements.js"
import { brickColumCount } from "./bricks.js"
import { brickRowCount } from "./bricks.js"
import { brickWidth } from "./bricks.js"
import { brickHeight } from "./bricks.js"
import { bricks } from "./bricks.js"


export function collisionDetection(){
    let score = 0
    for (let c = 0; c < brickColumCount; c++){
        for (let r = 0; r < brickRowCount; r++){
            let b = bricks[c][r]
            if (b.status == 1){
                if (ball.x >= b.x && ball.x <= b.x + brickWidth && ball.y >= b.y && ball.y <= b.y + brickHeight) {
                    ball.dy *= -1
                    b.status = 0
                    score++
                }
            }
        }
    }
}
