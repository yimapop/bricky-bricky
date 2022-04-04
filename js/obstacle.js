class Obstacle {
    constructor(ctx, gameSize, posX, posY, width, height, speed) {
        this.ctx = ctx
        this.gameSize = gameSize
        this.obstaclePos = {x: posX = 1300, y: posY = 600}
        this.obstacleSize = {w: width = 100, h: height = 100}
        this.speed = speed
        this.obstacleInstance = undefined



    }


    drawObstacle() {
        this.ctx.fillRect(this.obstaclePos.x, this.obstaclePos.y, this.obstacleSize.w, this.obstacleSize.h, this.speed)
        this.move()

        }

    move() {
        this.obstaclePos.x -= this.speed
    }

}