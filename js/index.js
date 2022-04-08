
const portada = document.querySelector('.portada')
const canvas = document.querySelector('#canvas')

portada.addEventListener('click', () => {
    portada.classList.add('hidden')
    canvas.classList.remove('hidden')
    Game.init()
})


