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
        this.createObstacle()
        this.createPlatform()
        this.createBigPlatform()
        this.randomPlatformY()
        this.createPlayer()
        this.start()

    },

    setDimensions() {
        this.gameSize = { w: 1200, h: 700 },
            this.canvas.setAttribute('width', this.gameSize.w)
        this.canvas.setAttribute('height', this.gameSize.h)
    },

    createPlatform() {
        if (this.frameIndex % 200 === 0) {
            this.platform.push(new Platform(this.ctx, this.gameSize, this.gameSize.w + 200, this.gameSize.h - 70, 200, 50, 3))
        }


    },

    createPlayer() {
        this.player = new Player(this.ctx, this.gameSize, this.gameSize.w, this.gameSize.h, 100, 100, 3)


    },

    createBigPlatform() {
        if (this.frameIndex % 200 === 0) {
            this.bigPlatform.push(new BigPlatform(this.ctx, this.gameSize, this.gameSize.w + 200, this.gameSize.h - 70, 200, 50, 3))
        }

    },

    createObstacle() {

        if (this.frameIndex % 200 === 0) {
            this.obstacle.push(new Obstacle(this.ctx, this.gameSize, this.gameSize.w, this.gameSize.h, 300, 100, 3))
        }

    },



    randomPlatformY() {
        let randomPlatformY = Math.floor(Math.random() * this.gameSize.w)
        this.platform.push(new Platform(this.ctx, this.gameSize, this.gameSize.w + 200, randomPlatformY, 200, 50, 3))


    },



    drawAll() {
        this.drawSquare()
        this.platform.forEach(elm => elm.drawPlatform())
        this.bigPlatform.forEach(elm => elm.drawBigPlatform())
        this.obstacle.forEach(elm => elm.drawObstacle())
        this.player.drawPlayer()



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
            this.clearAll()
            this.drawAll()
            console.log(this.platform)
            this.frameIndex > 1000 ? this.frameIndex === 0 : this.frameIndex++
        }, 30)

    },

    clearAll() {
        this.ctx.clearRect(0, 0, this.gameSize.w, this.gameSize.h)
    }


}
