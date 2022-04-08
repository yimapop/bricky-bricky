class Player {
    constructor(ctx, posX, posY, width, height, speed, gameSizeW, gameSizeH) {
        this.ctx = ctx
        this.playerPos = { x: posX, y: posY }
        this.playerSize = { w: width, h: height }
        this.gameSize = { w: gameSizeW, h: gameSizeH }
        this.imageInstance = new Image()
        this.imageInstance.src = './js/image/ufo.png'

        this.speed = speed

        this.floor = 500
        this.gravity = 0.4

    }

    drawPlayer() {


        this.ctx.drawImage(this.imageInstance, this.playerPos.x, this.playerPos.y, this.playerSize.w, this.playerSize.h)
        this.move()

    }

    jump() {
        this.playerPos.y -= 110
        this.speed -= 9

    }


    move() {
        if (this.playerPos.y < this.floor) {
            this.playerPos.y += this.speed
            this.speed += this.gravity
        } else {
            this.playerPos.y = this.floor
            this.speed = 1
        }

    }

}
