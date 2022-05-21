import { ctx } from './main.js'
export let brickRowCount = 3
export let brickColumCount = 6

export let brickWidth = 70
export let brickHeight = 20
export let brickPadding = 20
export let brickOffSetTop = 30
export let brickOffSetLeft = 35

export let bricks = []

export function generateBricks(){
    for (let c = 0; c < brickColumCount; c++){
        bricks[c] = []
        for (let r = 0; r < brickRowCount; r++){
            bricks[c][r] = {x:0, y:0, status: 1}
        }
    }
        
}

export function drawBricks(){
    for (let c = 0; c < brickColumCount; c++){
        for (let r = 0; r < brickRowCount; r++){
            if (bricks[c][r].status == 1){
                let brickX = c * (brickWidth + brickPadding) + brickOffSetLeft;
                let brickY = r * (brickHeight + brickPadding) + brickOffSetTop;
                bricks[c][r].x = brickX;
                bricks[c][r].y = brickY;
                ctx.beginPath();
                ctx.rect(brickX,brickY, brickWidth, brickHeight);
                ctx.fillStyle = '#230c33';
                ctx.fill();
                ctx.closePath;
            }
        }
    }
}
