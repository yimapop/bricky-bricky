class LargePlatform {
    constructor(ctx, posX, posY, width, height, speed) {
        this.ctx = ctx
        this.largePlatformPos = { x: posX, y: posY }
        this.largePlatformSize = { w: width, h: height }

        this.speed = speed
        this.largePlatformInstance = undefined



    }


    drawPlatform() {
        this.ctx.fillStyle = 'white'
        this.ctx.fillRect(this.largePlatformPos.x, this.largePlatformPos.y, this.largePlatformSize.w, this.largePlatformSize.h)

        this.move()
    }

    move() {
        this.largePlatformPos.x -= this.speed

    }

}