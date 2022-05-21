let score = 0
let gameLevelUp = true
export function levelUp() {
    if (score % 18 == 0 && score != 0){
        if (ball.y > canvas.height / 2){
            generateBricks()
        }

        if (gameLevelUp) {
            if (ball.dy > 0){
                ball.dy +=1
                gameLevelUp = false
            } else if ( ball.dy < 0) {
                ball.dy -= 1
                gameLevelUp = false
            }
        }
        if (score % 18 != 0){
            gameLevelUp = true
        }
    }
}
