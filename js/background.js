class Background {
    constructor(ctx, backgroudW, backgroundH, imgSource) {
        this.ctx = ctx
        this.backgroundW = backgroudW
        this.backgroundH = backgroundH

        this.posX = 0
        this.posY = 0

        this.speed = 1
        this.image = new Image()
        this.image.src = imgSource
    }

    draw() {
        this.ctx.drawImage(this.image, this.posX, this.posY, this.backgroundW, this.backgroundH)
        this.ctx.drawImage(this.image, this.posX + this.backgroundW, this.posY, this.backgroundW, this.backgroundH)
        this.move()
    }

    move() {
        if (this.posX <= -this.width) {
            this.posX = 0
        }
        this.posX -= this.speed
    }
}