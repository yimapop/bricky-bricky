class Player {
    constructor(ctx, posX, posY, width, height, speed) {
        this.ctx = ctx
        this.playerPos = { x: posX, y: posY }
        this.playerSize = { w: width, h: height }

        this.speed = speed
        this.gameSize = this.gameSize
        //this.playerInstance = undefined
        this.floor = 680
        this.gravity = 0.4



        // this.playerPos.y = this.gameSize.h - this.playerSize.h
        // this.playerPos.y0 = this.player.y
        // this.jumpHeight = 12
        // CONFIGURACIÓN SALTO
        // this.shouldJump = false
        // this.jumpCounter = 0
        // this.jumpUp = true

        // ANIMACIÓN ROTACIÓN PLAYER
        this.spin = 0
        // GRADOS ROTACIÓN 
        // this.spinIncrement = 90 / 32


    }


    drawPlayer() {
        this.ctx.fillStyle = 'red'
        this.ctx.fillRect(this.playerPos.x, this.playerPos.y, this.playerSize.w, this.playerSize.h)
        this.move()

        // if (this.shouldJump) this.counterRotation()

    }

    jump() {
        this.playerPos.y -= 90
        this.speed -= 9
        if (this.playerPos.y = this.gameSize.h)
            this.speed = 0

    }

    move() {
        if (this.playerPos.y < this.floor) {
            this.playerPos.y += this.speed
            this.speed += this.gravity
        // } else if (this.gameSize.x < this.playerPos.y) {
        //     this.speed = 0
        }   else  {
            this.playerPos.y = this.floor
            this.speed = 1
        }

    }

}



    // rotation() {
    //     let offsetXPosition = this.playerPos.x + (this.playerSize / 2)
    //     let offsetYPosition = this.playerPos.y + (this.playerSize / 2)

    //     this.translate(offsetXPosition, offsetYPosition)
    //     this.rotate(this.spin * Math.PI / 180)
    //     this.rotate(this.spinIncrement * Math.PI / 180)
    //     this.translate(-offsetXPosition, -offsetYPosition)
    //     //
    //     this.psin += this.spinIncrement

    // }

    // counterRotation() {
    //     let offsetXPosition = this.playerPos.x + (this.playerSize / 2)
    //     let offsetYPosition = this.playerPos.y + (this.playerSize / 2)

    //     this.translate(offsetXPosition, offsetYPosition)
    //     this.rotate(-this.spin * Math.PI / 180)
    //     this.translate(-offsetXPosition, -offsetYPosition)


    // }




// let animationId = null
// function animate() {
//     animationId = requetsAnimationFrame(animate)
//     ctx.clearRect(0, 0, canvas.width, canvas.height)

