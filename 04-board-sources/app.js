const board = document.querySelector('#board')
const SUARES_NUMBERS = 900
const colors = ['#0bad3c', '#fcce04', '#ec1dec', '#51e158', '#96d7eb', '#dad868', '##ec9523', '#da2020', '#181aac']

for (let i = 0; i < SUARES_NUMBERS; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseleave', () => removeColor(square))
    
    board.append(square)    
}

function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
   const index = Math.floor(Math.random() * colors.length)
   return colors[index]
} 
