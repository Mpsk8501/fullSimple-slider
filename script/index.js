const imgBx = document.querySelector('#imgBx')
const images = imgBx.querySelectorAll('img')

const contentBx = document.querySelector('#contentBx')
const contentBxItems = contentBx.querySelectorAll('div')

const nextBtn = document.querySelector('#next')
const prevBtn = document.querySelector('#prev')

let counter = 0

const sliderChanger = (direction) => {
  if (direction === 'next') {
    images[counter].classList.toggle('active')
    contentBxItems[counter].classList.toggle('active')
    counter++
    if (counter >= images.length) {
      counter = 0
    }
    images[counter].classList.toggle('active')
    contentBxItems[counter].classList.toggle('active')
  } else if (direction === 'prev') {
    images[counter].classList.toggle('active')
    contentBxItems[counter].classList.toggle('active')
    counter--
    if (counter < 0) {
      counter = images.length - 1
    }
    images[counter].classList.toggle('active')
    contentBxItems[counter].classList.toggle('active')
  }
}

nextBtn.onclick = () => sliderChanger('next')
prevBtn.onclick = () => sliderChanger('prev')
