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
        // this.randomPlatformY()
        this.createPlayer()
        this.start()
        this.collisions()

    },



    setListener() {
        document.addEventListener('keydown', event => {
            const { key } = event
            key === ' ' ? this.player.jump() : null
        })
    },



    setDimensions() {
        this.gameSize = { w: 1300, h: 700 },
            this.canvas.setAttribute('width', this.gameSize.w)
        this.canvas.setAttribute('height', this.gameSize.h)
    },

    createPlatform() {
        let randomPlatformY = Math.floor(Math.random() * this.gameSize.w - 200)
        this.platform.push(new Platform(this.ctx, 1200, randomPlatformY + 300, 200, 50, 3))



    },

    createPlayer() {
        this.player = new Player(this.ctx, 100, 500, 120, 120)
        // this.player.jump()
        //this.player.jumpReturn()

    },

    createBigPlatform() {
        //let randomPlatformY = Math.floor(Math.random() * this.gameSize.w - 200)

        this.bigPlatform.push(new BigPlatform(this.ctx, 1800, 0, 150, 350, 3))

    },

    createObstacle() {
        this.obstacle.push(new Obstacle(this.ctx, 1300, 600, 100, 100, 3))

    },

    // randomPlatformY() {
    //     cc
    //     this.platform.push(new Platform(this.ctx, this.platformPos.x, randomPlatformY, 200, 50, 3))
    // },

    drawPlayer() {
        this.player.drawPlayer()

    },

    drawAll() {
        this.drawSquare()
        this.platform.forEach(elm => elm.drawPlatform())
        this.bigPlatform.forEach(elm => elm.drawBigPlatform())
        this.obstacle.forEach(elm => elm.drawObstacle())
        // this.randomPlatform.forEach(elm => elm.randomPlatformY())



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
        this.interval = setInterval(() => {
            this.frameIndex % 120 === 0 ? this.createPlatform() : null
            this.frameIndex % 220 === 0 ? this.createBigPlatform() : null
            this.frameIndex % 200 === 0 ? this.createObstacle() : null

            this.clearAll()
            this.drawPlayer()
            this.drawAll()
            this.collisions()
            this.bigCollision()

            this.frameIndex++
        }, 30)

    },

    clearAll() {
        this.ctx.clearRect(0, 0, this.gameSize.w, this.gameSize.h)
    },




    collisions() {
        //console.log(this.obstacle)
        // console.log(this.player)

        // let obstacleFound = false

        // console.log(this.bigPlatform)

        this.obstacle.forEach(obs => {
            if (this.player.playerPos.x < obs.obstaclePos.x + obs.obstacleSize.w &&
                this.player.playerPos.x + this.player.playerSize.w > obs.obstaclePos.x &&
                this.player.playerPos.y < obs.obstaclePos.y + obs.obstacleSize.h &&
                this.player.playerSize.h + this.player.playerPos.y > obs.obstaclePos.y) {

                this.gameOver()

                //obstacleFound = true
            }
        })

        //return obstacleFound

    },

    bigCollision() {
        //console.log(this.bigPlatform)

        //let obstacleFound = false


        this.bigPlatform.forEach(bigplat => {
            if (this.player.playerPos.x < bigplat.bigPlatformPos.x + bigplat.bigPlatformSize.w &&
                this.player.playerPos.x + this.player.playerSize.w > bigplat.bigPlatformPos.x &&
                this.player.playerPos.y < bigplat.bigPlatformPos.y + bigplat.bigPlatformSize.h &&
                this.player.playerSize.h + this.player.playerPos.y > bigplat.bigPlatformPos.y) {

                // obstacleFound = true
                this.gameOver()
                console.log('COLISIOOOON')
            }
        })
        //return obstacleFound


    },

    // if(rect1.x < rect2.x + rect2.width &&
    //     rect1.x + rect1.width > rect2.x &&
    //     rect1.y < rect2.y + rect2.height &&
    //     rect1.height + rect1.y > rect2.y)

    gameOver() {
        clearInterval(this.interval)

    }




}
