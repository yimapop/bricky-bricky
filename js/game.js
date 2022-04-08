
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
    sound: undefined,
    player: undefined,

    playerScore: 0,

    successJump: false,
    playerJump: false,

    init() {
        this.canvas = document.getElementById("canvas")
        this.ctx = this.canvas.getContext("2d")
        this.imageGameOver = new Image()
        this.imageGameOver.src = './js/image/game_over_2.png'
        this.initialGame = new Image()
        this.initialGame.src = './js/image/initial_game_2.png'
        this.setDimensions()
        this.createPlayer()
        this.setListener()
        this.reset()
        this.start()


    },

    setListener() {
        document.addEventListener('keydown', event => {
            const { key } = event
            if (key === ' ') {
                this.player.jump()
                this.playerJump = true

            }
        })
    },


    setDimensions() {
        this.gameSize = { w: 1400, h: 800 },
            this.canvas.setAttribute('width', this.gameSize.w)
        this.canvas.setAttribute('height', this.gameSize.h)
    },

    createPlatform() {
        // this.platform.push(new Platform(this.ctx, 0, 750, 1400, 50, 0))
        this.platform.push(new Platform(this.ctx, 2500, 400, 150, 10, 5.5))
        this.platform.push(new Platform(this.ctx, 2000, 360, 200, 10, 6))
        this.platform.push(new Platform(this.ctx, 1000, 200, 150, 10, 6.5))
        this.platform.push(new Platform(this.ctx, 900, 100, 150, 10, 7))
        this.platform.push(new Platform(this.ctx, 2000, 550, 350, 10, 7.5))


    },

    createPlayer() {
        this.player = new Player(this.ctx, 100, 1000, 140, 80, 50, this.gameSize.w, this.gameSize.h)


    },

    createBigPlatform() {

        this.bigPlatform.push(new BigPlatform(this.ctx, 1500, -10, 150, 200, 4.5))
        this.bigPlatform.push(new BigPlatform(this.ctx, 1400, -10, 150, 200, 5.5))
        this.bigPlatform.push(new BigPlatform(this.ctx, 2000, 600, 150, 200, 4.5))
        this.bigPlatform.push(new BigPlatform(this.ctx, 1000, 500, 100, 100, 5))
        this.bigPlatform.push(new BigPlatform(this.ctx, 1000, 500, 200, 100, 5))
        this.bigPlatform.push(new BigPlatform(this.ctx, 900, 500, 200, 100, 5.5))
        this.bigPlatform.push(new BigPlatform(this.ctx, 800, 500, 50, 50, 5.5))
    },

    createObstacle() {
        this.obstacle.push(new Obstacle(this.ctx, 4000, 0, 200, 80, 3))
        this.obstacle.push(new Obstacle(this.ctx, 4000, 0, 200, 80, 3.5))
        this.obstacle.push(new Obstacle(this.ctx, 900, 700, 100, 100, 3.8))
        this.obstacle.push(new Obstacle(this.ctx, 1300, 580, 300, 100, 4))
        this.obstacle.push(new Obstacle(this.ctx, 1200, 580, 300, 100, 4.5))
        this.obstacle.push(new Obstacle(this.ctx, 1000, 400, 50, 50, 5.5))
        this.obstacle.push(new Obstacle(this.ctx, 1000, 400, 90, 50, 5.5))
        this.obstacle.push(new Obstacle(this.ctx, 2000, 700, 90, 50, 5.5))

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
        this.ctx.strokeStyle = 'black'
        this.ctx.strokeRect(0, 0, this.gameSize.w, this.gameSize.h)

    },

    start() {

        this.frameIndex = 0

        this.interval = setInterval(() => {
            this.frameIndex % 230 === 0 ? this.createPlatform() : null
            this.frameIndex % 220 === 0 ? this.createBigPlatform() : null
            this.frameIndex % 200 === 0 ? this.createObstacle() : null
            this.clearAll()
            this.drawAll()
            this.drawPlayer()
            this.obstacleCollision()
            this.bigCollision()
            this.platformCollision()
            this.borderCollision()
            this.drawScore(this.frameIndex)

            this.frameIndex++

        }, 23)

        this.sound = new Audio("./js/sound.mp3/y1.mp3")
        this.sound.play()

    },

    drawScore(counter) {
        this.ctx.font = '50px Menlo'
        this.ctx.fillStyle = 'white'
        this.ctx.fillText("SCORE", 1140, 70)
        this.ctx.font = '50px Menlo'
        this.ctx.fillStyle = 'white'
        this.ctx.fillText(Math.floor(counter / 30), 1330, 70)
    },


    borderCollision() {
        if (0 > this.player.playerPos.y) {
            this.player.playerPos.y = 3
        }
    },


    reset() {
        this.background = new Background(this.ctx, this.gameSize.w, this.gameSize.h, "./js/image/city_neon.jpg")
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
            } else {
                this.successJump = true

            }
        })

    },

    platformCollision() {

        this.platform.forEach(elem => {
            if (this.player.playerPos.x < elem.platformPos.x + elem.platformSize.w &&
                this.player.playerPos.x + this.player.playerSize.w > elem.platformPos.x &&
                this.player.playerPos.y < elem.platformPos.y + elem.platformSize.h &&
                this.player.playerSize.h + this.player.playerPos.y > elem.platformPos.y) {
                this.player.speed = 0
            }
        })
    },


    bigCollision() {


        this.bigPlatform.forEach(bigplat => {
            if (this.player.playerPos.x < bigplat.bigPlatformPos.x + bigplat.bigPlatformSize.w &&
                this.player.playerPos.x + this.player.playerSize.w > bigplat.bigPlatformPos.x &&
                this.player.playerPos.y < bigplat.bigPlatformPos.y + bigplat.bigPlatformSize.h &&
                this.player.playerSize.h + this.player.playerPos.y > bigplat.bigPlatformPos.y) {

                this.gameOver()

            } else {
                this.successJump = true

            }


        })

    },


    drawEnd() {

        this.ctx.drawImage(this.imageGameOver, 0, 0)

    },

    gameOver() {
        clearInterval(this.interval)
        this.drawEnd()
        this.sound.pause()

    },


}
