
// boton de start igual que en el coche


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

    init() {
        this.canvas = document.getElementById("canvas")
        this.ctx = this.canvas.getContext("2d")
        this.imageGameOver = new Image()
        this.imageGameOver.src = './js/image/game_over.png'
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
        this.gameSize = { w: 1400, h: 800 },
            this.canvas.setAttribute('width', this.gameSize.w)
        this.canvas.setAttribute('height', this.gameSize.h)
    },

    createPlatform() {
        this.platform.push(new Platform(this.ctx, 1500, 500, 200, 50, 5))
        this.platform.push(new Platform(this.ctx, 2000, 300, 200, 50, 5))



        // const platformHeight = Math.random() * this.gameSize.h * 0.35 + this.gameSize.h * 0.25
        // this.platform.push(new Platform(this.ctx, Math.random() * this.gameSize.h * .75 * ((this.gameSize.h - platformHeight / this.gameSize.h) + (this.gameSize.h * 0.085), 0, platformHeight, this.gameSize.h)))
        // console.log(platformHeight)


        // let randomPlatform = Math.floor(Math.random() * this.gameSize.w - 175)
        // this.platform.push(new Platform(this.ctx, 500 , randomPlatform, 200, 50, 3))


    },

    createPlayer() {
        //this.ctx.lineWidth = 100
        this.player = new Player(this.ctx, 100, 1000, 120, 120)


    },

    createBigPlatform() {
        // let randomPlatform = Math.floor(Math.random() * this.gameSize.w)

        this.bigPlatform.push(new BigPlatform(this.ctx, 1500, 0, 150, 200, 3))
        this.bigPlatform.push(new BigPlatform(this.ctx, 2000, 600, 150, 200, 3))
    },

    createObstacle() {
        this.obstacle.push(new Obstacle(this.ctx, 1300, 700, 100, 100, 3))

    },

    drawPlayer() {
        this.player.drawPlayer()

    },

    drawAll() {
        this.sound.play()
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
            this.platformCollision()
            // console.log('what happens', this.platformCollision())

            this.frameIndex++
        }, 30)

        this.sound = new Audio("./js/sound.mp3/tsunami2.mp3")
        sound.play()


    },


    reset() {
        this.background = new Background(this.ctx, this.gameSize.w, this.gameSize.h, "./js/image/city.jpeg")
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




    //     // if (this.player.playerPos.y + this.player.playerSize.h >= this.platform.platformPos.y) {
    //     // } this.player.playerPos.y = this.platform.platformPos.y + this.player.playerSize.



    // (x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight)

    bigCollision() {


        this.bigPlatform.forEach(bigplat => {
            if (this.player.playerPos.x < bigplat.bigPlatformPos.x + bigplat.bigPlatformSize.w &&
                this.player.playerPos.x + this.player.playerSize.w > bigplat.bigPlatformPos.x &&
                this.player.playerPos.y < bigplat.bigPlatformPos.y + bigplat.bigPlatformSize.h &&
                this.player.playerSize.h + this.player.playerPos.y > bigplat.bigPlatformPos.y) {

                this.gameOver()
                console.log('COLISIOOOON')
            }


        })

    },


    drawEnd() {

        this.ctx.drawImage(this.imageGameOver, 0, 0)
        // this.gameOver = new GameOver(this.ctx, this.gameSize.w, this.gameSize.h, "./js/image/game_over.jpg")
        // this.ctx.fillStyle = 'yellow'
        // this.ctx.font = '150px arial'
        // this.ctx.fillText(`GAME OVER`, this.gameSize.w / 2 - 450, this.gameSize.w / 2 - 300)


    },

    gameOver() {
        // cambiar el background o la imagen para q no sea el juego
        clearInterval(this.interval)
        this.drawEnd()
        this.sound.pause()

    },





}
