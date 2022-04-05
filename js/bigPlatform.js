class BigPlatform {
    constructor(ctx, posX, posY, width, height, speed) {
        this.ctx = ctx

        this.bigPlatformPos = {
            x: posX,
            y: posY
        }
        this.bigPlatformSize = { w: width, h: height }

        this.speed = speed
        this.biglatformInstance = undefined



    }

    drawBigPlatform() {
        this.ctx.fillStyle = 'black'
        this.ctx.fillRect(this.bigPlatformPos.x, this.bigPlatformPos.y, this.bigPlatformSize.w, this.bigPlatformSize.h)
        // this.ctx.fillRect(this.bigPlatformPos.x + 1300, this.bigPlatformPos.y - 400, this.bigPlatformSize.w, this.bigPlatformSize.h + 400)
        this.move()
    }


    move() {
        this.bigPlatformPos.x -= this.speed
        //  (this.obstaclePos.x <= this.gameSize) 
        //     this.obstacleInstance


    }

}