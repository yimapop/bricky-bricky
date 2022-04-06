class Platform {
    constructor(ctx, posX, posY, width, height, speed) {
        this.ctx = ctx
        this.platformPos = { x: posX, y: posY }
        this.platformSize = { w: width, h: height }

        this.speed = speed
        this.platformInstance = undefined

        //this.init()

    }


    // init() {
    //     this.platformInstance = new Image()
    //     this.platformInstance = './js/image/brick_1.png'
    // }

    drawPlatform() {

        // this.ctx.shadowColor = "rgb(" + r + "," + g + "," + b + ")";
        this.ctx.shadowBlur = 10;
        // this.ctx.strokeStyle = "rgba(" + r + "," + g + "," + b + ",0.2)";
        this.ctx.strokeStyle = 'white'
        //this.ctx.drawImage(this.platformInstance, this.platformInstance.x, this.platformInstance.y, this.platformInstance.w, this.platformInstance.h + 0)
        this.ctx.strokeRect(this.platformPos.x, this.platformPos.y, this.platformSize.w, this.platformSize.h)

        this.move()
    }

    move() {
        this.platformPos.x -= this.speed

    }

}