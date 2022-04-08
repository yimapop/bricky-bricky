class BigPlatform {
    constructor(ctx, posX, posY, width, height, speed) {
        this.ctx = ctx
        this.bigPlatformPos = { x: posX, y: posY }
        this.bigPlatformSize = { w: width, h: height }

        this.speed = speed
        this.biglatformInstance = undefined

    }

    drawBigPlatform() {

        this.ctx.lineWidth = 8
        this.ctx.strokeStyle = 'blue'
        this.ctx.strokeRect(this.bigPlatformPos.x, this.bigPlatformPos.y, this.bigPlatformSize.w, this.bigPlatformSize.h)
        this.move()
    }


    move() {
        this.bigPlatformPos.x -= this.speed
    }

}