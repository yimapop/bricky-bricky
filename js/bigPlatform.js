class BigPlatform{
    constructor(ctx, gameSize, posX, posY, width, height, speed) {
        this.ctx = ctx

        this.bigPlatformPos = { x: posX, y: posY }
        this.bigPlatformSize = { w: width, h: height }
        this.speed = speed
        this.gameSize = gameSize
        this.biglatformInstance = undefined



    }

    drawBigPlatform() {
        this.ctx.fillRect(this.bigPlatformPos.x + 270, this.bigPlatformPos.y - 700, this.bigPlatformSize.w, this.bigPlatformSize.h + 400, this.speed)
        // this.ctx.fillRect(this.bigPlatformPos.x + 1300, this.bigPlatformPos.y - 300, this.bigPlatformSize.w, this.bigPlatformSize.h + 400, this.speed)
        this.move()
    }


    move() {
        this.bigPlatformPos.x -= this.speed
        //  (this.obstaclePos.x <= this.gameSize) 
        //     this.obstacleInstance


    }

}