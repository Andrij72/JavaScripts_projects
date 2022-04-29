const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const sidebar = document.querySelector('.sidebar')
const container = document.querySelector('.container')
const mainSlide = document.querySelector('.main-slide')
const slidesCount = mainSlide.querySelectorAll('div').length
let actionSlideIndex = 0

sidebar.style.top = `-${(slidesCount-1)*100}vh`

upBtn.addEventListener('click', () =>{
    changeSlide('up')
})

downBtn.addEventListener('click', () =>{
    changeSlide('down')
})

function changeSlide(diraction) {
if(diraction === 'up') {
    actionSlideIndex++;
    if (actionSlideIndex === slidesCount) {
        actionSlideIndex = 0
    }
} else if (diraction === 'down') {
    actionSlideIndex--
    if (actionSlideIndex < 0) {
        actionSlideIndex = slidesCount-1
    }
}

const height = container.clientHeight

mainSlide.style.transform = `translateY(-${actionSlideIndex * height}px)`

sidebar.style.transform = `translateY(${actionSlideIndex * height}px)`
}
