class Platform {
    constructor(ctx, gameSize, posX, posY, width, height, speed) {
        this.ctx = ctx
        this.platformPos = { x: posX, y: posY }
        this.platformSize = { w: width, h: height }
        this.speed = speed
        this.gameSize = gameSize
        this.platformInstance = undefined



    }


    drawPlatform() {
        // this.ctx.fillRect(this.platformPos.x, this.platformPos.y, this.platformSize.w, this.platformSize.h, this.speed)
        this.ctx.fillRect(this.platformPos.x + 700, this.platformPos.y - 100, this.platformSize.w, this.platformSize.h, this.speed)
        // this.ctx.fillRect(this.platformPos.x + 950, this.platformPos.y - 300, this.platformSize.w, this.platformSize.h, this.speed)

        this.move()
    }

    move() {
        this.platformPos.x -= this.speed

    }

}