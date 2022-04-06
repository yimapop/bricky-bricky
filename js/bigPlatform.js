class BigPlatform {
    constructor(ctx, posX, posY, width, height, speed) {
        this.ctx = ctx
        this.bigPlatformPos = { x: posX, y: posY }
        this.bigPlatformSize = { w: width, h: height }

        this.speed = speed
        this.biglatformInstance = undefined

        //this.init()


    }

    // init() {
    //     this.bigPlatformInstance = new Image()
    //     this.bigPlatformInstance.src = './js/image/brick_1.png'
    // }

    drawBigPlatform() {

        this.ctx.lineWidth = 8
        this.ctx.fillStyle = 'blue'
        this.ctx.strokeRect(this.bigPlatformPos.x, this.bigPlatformPos.y, this.bigPlatformSize.w, this.bigPlatformSize.h)
        //this.ctx.strokeRect(this.bigPlatformPos.x + 1300, this.bigPlatformPos.y - 400, this.bigPlatformSize.w, this.bigPlatformSize.h + 400)
        // this.ctx.drawImage(this.bigPlatformInstance, this.bigPlatformPos.x, this.bigPlatformPos.y, this.bigPlatformSize.w, this.bigPlatformSize.h + 0)
        this.move()
    }


    move() {
        this.bigPlatformPos.x -= this.speed
        //  (this.obstaclePos.x <= this.gameSize) 
        //     this.obstacleInstance


    }

}