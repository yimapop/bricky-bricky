class Obstacle {
    constructor(ctx, posX, posY, width, height, speed) {
        this.ctx = ctx
        this.obstaclePos = {
            x: posX,
            y: posY,
        }
        this.obstacleSize = {
            w: width,
            h: height,
        }
        this.speed = speed
        this.obstacleInstance = undefined

    }


    drawObstacle() {
        this.ctx.fillStyle = 'black'
        this.ctx.fillRect(this.obstaclePos.x, this.obstaclePos.y, this.obstacleSize.w, this.obstacleSize.h)
        this.move()

    }

    move() {
        this.obstaclePos.x -= this.speed
    }

}