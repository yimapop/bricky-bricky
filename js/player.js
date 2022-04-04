class Player {
    constructor(ctx, gameSize, posX, posY, width, height, speed) {
        this.ctx = ctx
        this.playerPos = { x: posX, y: posY }
        this.playerSize = { w: width = 150, h: height = 150 }
        this.speed = speed
        this.gameSize = gameSize
        this.playerInstance = undefined

        // this.init()


    }


    drawPlayer() {
        this.ctx.fillRect(this.playerPos.x, this.playerPos.y, this.playerSize.w, this.playerSize.h, this.speed)
        this.move()

    }

    move() {
        //this.obstaclePos.x += this.speed

    }

}