class Platform {
    constructor(ctx, posX, posY, width, height, speed) {
        this.ctx = ctx
        this.platformPos = { x: posX, y: posY }
        this.platformSize = { w: width, h: height }
        this.speed = speed
        this.platformInstance = undefined



    }


    drawPlatform() {
        this.ctx.fillStyle = 'black'
        this.ctx.fillRect(this.platformPos.x, this.platformPos.y, this.platformSize.w, this.platformSize.h)

        this.move()
    }

    move() {
        this.platformPos.x -= this.speed

    }

}