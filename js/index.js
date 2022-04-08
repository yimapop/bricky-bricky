
const portada = document.querySelector('.portada')
const canvas = document.querySelector('#canvas')
const playAgain = document.querySelector('this.image.game_over_2.png')

portada.addEventListener('click', () => {
    portada.classList.add('hidden')
    canvas.classList.remove('hidden')
    Game.init()
})

// playAgain.addEventListener('click', () => {


// })


