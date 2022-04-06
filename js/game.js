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
    background: undefined,

    init() {
        this.canvas = document.getElementById("canvas")
        this.ctx = this.canvas.getContext("2d")

        this.setDimensions()
        this.setListener()
        this.reset()
        this.createPlayer()
        this.start()

    },

    setListener() {
        document.addEventListener('keydown', event => {
            const { key } = event
            key === ' ' ? this.player.jump() : null
        })
    },


    setDimensions() {
        this.gameSize = { w: 1400, h: 700 },
            this.canvas.setAttribute('width', this.gameSize.w)
        this.canvas.setAttribute('height', this.gameSize.h)
    },

    createPlatform() {
        this.platform.push(new Platform(this.ctx, 1500, 500, 200, 50, 3))


        // const platformHeight = Math.random() * this.gameSize.h * 0.35 + this.gameSize.h * 0.25
        // this.platform.push(new Platform(this.ctx, Math.random() * this.gameSize.h * .75 * ((this.gameSize.h - platformHeight / this.gameSize.h) + (this.gameSize.h * 0.085), 0, platformHeight, this.gameSize.h)))
        // console.log(platformHeight)


        // let randomPlatform = Math.floor(Math.random() * this.gameSize.w - 175)
        // this.platform.push(new Platform(this.ctx, 500 , randomPlatform, 200, 50, 3))


    },

    createPlayer() {
        this.player = new Player(this.ctx, 100, 500, 120, 120, 1)


    },

    createBigPlatform() {
        // let randomPlatform = Math.floor(Math.random() * this.gameSize.w)

        this.bigPlatform.push(new BigPlatform(this.ctx, 1500, 0, 150, 200, 3))
        this.bigPlatform.push(new BigPlatform(this.ctx, 2000, 500, 150, 200, 3))
    },

    createObstacle() {
        this.obstacle.push(new Obstacle(this.ctx, 1300, 600, 100, 100, 3))

    },

    drawPlayer() {
        this.player.drawPlayer()

    },

    drawAll() {
        this.background.draw()
        this.drawSquare()
        this.platform.forEach(elm => elm.drawPlatform())
        this.bigPlatform.forEach(elm => elm.drawBigPlatform())
        this.obstacle.forEach(elm => elm.drawObstacle())

        this.bigPlatform.forEach(elm => elm.move())
        this.platform.forEach(elm => elm.move())
        this.obstacle.forEach(elm => elm.move())

    },


    drawSquare() {
        this.ctx.lineWidth = 2
        this.ctx.strokeRect(0, 0, this.gameSize.w, this.gameSize.h)

    },

    start() {

        this.interval = setInterval(() => {
            this.frameIndex % 230 === 0 ? this.createPlatform() : null
            this.frameIndex % 220 === 0 ? this.createBigPlatform() : null
            this.frameIndex % 200 === 0 ? this.createObstacle() : null

            this.clearAll()
            this.drawAll()
            this.drawPlayer()
            this.obstacleCollision()
            this.bigCollision()
            //this.platformCollision()
            // console.log('what happens', this.platformCollision())
            this.frameIndex++
        }, 30)

    },

    reset() {
        this.background = new Background(this.ctx, this.gameSize.w, this.gameSize.h, "./js/image/background.jpeg")
    },

    clearAll() {
        this.ctx.clearRect(0, 0, this.gameSize.w, this.gameSize.h)
    },


    obstacleCollision() {


        this.obstacle.forEach(obs => {
            if (this.player.playerPos.x < obs.obstaclePos.x + obs.obstacleSize.w &&
                this.player.playerPos.x + this.player.playerSize.w > obs.obstaclePos.x &&
                this.player.playerPos.y < obs.obstaclePos.y + obs.obstacleSize.h &&
                this.player.playerSize.h + this.player.playerPos.y > obs.obstaclePos.y) {

                this.gameOver()
            }
        })

    },

    // platformCollision() {


    //     if (this.player.playerPos.x < this.platformPos.x + this.platformSize.w &&
    //         this.player.playerPos.x + this.player.playerSize.w > this.platformPos.x &&
    //         this.player.playerPos.y < this.platformPos.y + this.platformSize.h &&
    //         this.player.playerSize.h + this.player.playerPos.y > this.platformPos.y) {
    //         this.player.speed = 0
    //     }


    //     // if (this.player.playerPos.y + this.player.playerSize.h >= this.platform.platformPos.y) {
    //     // } this.player.playerPos.y = this.platform.platformPos.y + this.player.playerSize.h
    // },


    // (x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight)

    bigCollision() {

        // if (this.player.playerPos.x < this.platformPos.x + this.platformSize.w &&
        //     this.player.playerPos.x + this.player.playerSize.w > this.platformPos.x &&
        //     this.player.playerPos.y < this.platformPos.y + this.platformSize.h &&
        //     this.player.playerSize.h + this.player.playerPos.y > this.platformPos.y) {
        //     this.player.speed = 0
        // }

        this.bigPlatform.forEach(bigplat => {
            if (this.player.playerPos.x < bigplat.bigPlatformPos.x + bigplat.bigPlatformSize.w &&
                this.player.playerPos.x + this.player.playerSize.w > bigplat.bigPlatformPos.x &&
                this.player.playerPos.y < bigplat.bigPlatformPos.y + bigplat.bigPlatformSize.h &&
                this.player.playerSize.h + this.player.playerPos.y > bigplat.bigPlatformPos.y) {

                this.gameOver()
                console.log('COLISIOOOON')
            }



            //if (this.player.playerPos.y + this.player.playerSize.h >= this.platform.platformPos.y) {
            //} this.player.playerPos.y = this.platform.platformPos.y + this.player.playerSize.h


        })

    },



    // if(rect1.x < rect2.x + rect2.width &&
    //     rect1.x + rect1.width > rect2.x &&
    //     rect1.y < rect2.y + rect2.height &&
    //     rect1.height + rect1.y > rect2.y)

    gameOver() {
        clearInterval(this.interval)

    }




}
