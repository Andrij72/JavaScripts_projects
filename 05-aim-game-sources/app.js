const startBtn= document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('#time-list')
const timel =document.querySelector('#time' )
const board = document.querySelector('#board')
const colors = ['#0bad3c', '#fcce04', '#ec1dec', '#51e158', '#96d7eb', '#dad868', '##ec9523', '#da2020', '#181aac']

let score = 0
let time = 0

startBtn.addEventListener('click', (event) => {
event.preventDefault()
screens[0].classList.add('up')
})

timeList.addEventListener('click', event => {
if (event.target.classList.contains('time-btn')) {
time = parseInt(event.target.getAttribute('data-time'))
screens[1].classList.add('up')
startGame()
}
})

board.addEventListener('click', event => {
    if (event.target.classList.contains('circle')) {
       score++
       event.target.remove()
       createRandomCircle() 
    }
})

function startGame() {
    setInterval(decreaseTime, 1000)
    createRandomCircle()
    setTime(time)
    timel.innerHTML = `00:${time}`
}

function decreaseTime() {
    if (time === 0) {
        finishGame()
    }else {
        let current = --time
        if ( current < 10) {
            current = `0${current}` 
        } 
           setTime(current)
    }   
}

function setTime(value) {
    timel.innerHTML = `00:${value}`
}

function finishGame() {
board.innerHTML = `<h1>Счет: <span class="primary">${score}</span></h1>`
timel.parentNode.classList.add('hide')
}

function createRandomCircle() {
    const circle = document.createElement('div')
    const size = getRandomNumber(10, 60)
    const clr = getRandomColor() 
    const {width, height} = board.getBoundingClientRect()
    const x = getRandomNumber(0,width - size)
    const y = getRandomNumber(0, height - size)

    circle.classList.add('circle')
    circle.style.width = `${size}px`
    circle.style.height = `${size}px` 
    circle.style.background= `linear-gradient(90deg, ${clr} 0%, ${clr} 47%, ${clr} 100%)` 
    circle.style.top = `${y}px`
    circle.style.left = `${x}px`
    
    board.append(circle)
}

function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
 }  
