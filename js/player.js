class Player {
    constructor(ctx, posX, posY, width, height, speed) {
        this.ctx = ctx
        this.playerPos = { x: posX = 100, y: posY = 580 }
        this.playerSize = { w: width = 120, h: height = 120 }
        this.speed = speed
        this.gameSize = undefined
        this.playerInstance = undefined



        // this.playerPos.y = this.gameSize.h - this.playerSize.h
        // this.playerPos.y0 = this.player.y
        // this.jumpHeight = 12
        // CONFIGURACIÓN SALTO
        // this.shouldJump = false
        // this.jumpCounter = 0
        // this.jumpUp = true

        // ANIMACIÓN ROTACIÓN PLAYER
        // this.spin = 0
        // GRADOS ROTACIÓN 
        // this.spinIncrement = 90 / 32


    }


    drawPlayer() {
        this.ctx.fillStyle = 'red'
        this.ctx.fillRect(this.playerPos.x, this.playerPos.y, this.playerSize.w, this.playerSize.h, this.speed)

        if (this.shouldJump) this.counterRotation()

    }

    // jump() {
    //     if (this.shouldJump) {
    //         this.jumpCounter++
    //         if (this.jumpCounter < 15) {
    //             //GO UP
    //             this.playerPos.y -= this.jumpHeight
    //         } else if (this.jumpCounter > 14 && this.jumpCounter < 19) {
    //             this.playerPos.y += 0
    //         } else if (this.jumpCounter < 33) {
    //             // COME BACK DOWN
    //             this.playerPos.y += this.jumpHeight
    //         }
    //         this.rotation()
    //         //END THE CYCLE
    //         if (this.jumpCounter >= 32) {
    //             //RESET SPIN FOR ANOTHER JUMP
    //             this.counterRotation()
    //             this.spin = 0
    //             this.shouldJump = false

    //         }

    //     }

    // }



    rotation() {
        let offsetXPosition = this.playerPos.x + (this.playerSize / 2)
        let offsetYPosition = this.playerPos.y + (this.playerSize / 2)

        this.translate(offsetXPosition, offsetYPosition)
        this.rotate(this.spin * Math.PI / 180)
        this.rotate(this.spinIncrement * Math.PI / 180)
        this.translate(-offsetXPosition, -offsetYPosition)
        // 
        this.psin += this.spinIncrement

    }

    counterRotation() {
        let offsetXPosition = this.playerPos.x + (this.playerSize / 2)
        let offsetYPosition = this.playerPos.y + (this.playerSize / 2)

        this.translate(offsetXPosition, offsetYPosition)
        this.rotate(-this.spin * Math.PI / 180)
        this.translate(-offsetXPosition, -offsetYPosition)


    }


}

let animationId = null
function animate() {
    animationId = requetsAnimationFrame(animate)
    ctx.clearRect(0, 0, canvas.width, canvas.height)


    player.draw()



    // addEventListener("keydown", e => {
    //     if (e.code === "Space") {
    //         if (!player.shouldJump) {
    //             jumpSFX.play()
    //             player.jumpCounter = 0
    //             player.shouldJump = true
    //             canScore = true
    //         }
    //     }
    // })
}




