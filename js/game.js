const Game = {
    name: 'Bricky Bricky',
    description: 'Videogame',
    version: '1.0.0',
    canvasNode: undefined,
    ctx: undefined,
    gameSize: undefined,
    platform: [],
    randomPlatform: [],
    bigPlatform: [],
    obstacle: [],
    frameIndex: 0,

    init() {
        this.canvas = document.getElementById("canvas")
        this.ctx = this.canvas.getContext("2d")

        this.setDimensions()
        this.setListener()
        this.createObstacle()
        this.createPlatform()
        this.createBigPlatform()
        this.randomPlatformY()
        this.createPlayer()
        this.start()

    },

    // jump() {
    //     if (this.player.shouldJump) {
    //         this.frameIndex++
    //         if (this.frameIndex < 15) {
    //             //GO UP
    //             this.playerPos.y -= this.player.jumpHeight
    //         } else if (this.frameIndex > 14 && this.frameIndex < 19) {
    //             this.player.playerPos.y += 0
    //         } else if (this.frameIndex < 33) {
    //             // COME BACK DOWN
    //             this.player.playerPos.y += this.player.jumpHeight
    //         }
    //         this.rotation()
    //         //END THE CYCLE
    //         if (this.frameIndex >= 32) {
    //             //RESET SPIN FOR ANOTHER JUMP
    //             this.player.counterRotation()
    //             this.player.spin = 0
    //             this.player.shouldJump = false

    //         }

    //     }

    // },

    jump() {
        this.player.playerPos.y -= 10

    },

    setListener() {
        document.addEventListener('keydown', event => {
            const { key } = event
            key === ' ' ? this.jump() : null
        })
    },



    setDimensions() {
        this.gameSize = { w: 1200, h: 700 },
            this.canvas.setAttribute('width', this.gameSize.w)
        this.canvas.setAttribute('height', this.gameSize.h)
    },

    createPlatform() {

        this.platform.push(new Platform(this.ctx, 1200, 200, 200, 50, 3))



    },

    createPlayer() {
        this.player = new Player(this.ctx, this.gameSize.w, this.gameSize.h, 100, 100, 3)
        this.jump()

    },

    createBigPlatform() {
        this.bigPlatform.push(new BigPlatform(this.ctx, 1800, 0, 200, 50, 3))

    },

    createObstacle() {
        this.obstacle.push(new Obstacle(this.ctx, 100, 100, 300, 100, 3))

    },

    randomPlatformY() {
        let randomPlatformY = Math.floor(Math.random() * this.gameSize.w)
        this.platform.push(new Platform(this.ctx, this.gameSize, this.gameSize.w + 200, randomPlatformY, 200, 50, 3))
    },

    drawPlayer() {
        this.player.drawPlayer()

    },

    drawAll() {
        this.drawSquare()
        this.platform.forEach(elm => elm.drawPlatform())
        this.bigPlatform.forEach(elm => elm.drawBigPlatform())
        this.obstacle.forEach(elm => elm.drawObstacle())


        this.bigPlatform.forEach(elm => elm.move())
        this.platform.forEach(elm => elm.move())
        this.obstacle.forEach(elm => elm.move())
        //this.player.forEach(elm => elm.move())
    },


    drawSquare() {
        this.ctx.lineWidth = 2
        this.ctx.strokeRect(0, 0, this.gameSize.w, this.gameSize.h)

    },

    start() {
        setInterval(() => {
            this.frameIndex % 200 === 0 ? this.createPlatform() : null
            this.frameIndex % 200 === 0 ? this.createBigPlatform() : null
            this.frameIndex % 200 === 0 ? this.createObstacle() : null


            this.clearAll()
            this.drawPlayer()
            this.drawAll()
            this.frameIndex > 1000 ? this.frameIndex === 0 : this.frameIndex++
        }, 30)

    },

    clearAll() {
        this.ctx.clearRect(0, 0, this.gameSize.w, this.gameSize.h)
    }


}
