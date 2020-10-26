const imgBx = document.querySelector('#imgBx')
const images = imgBx.querySelectorAll('img')

const contentBx = document.querySelector('#contentBx')
const contentBxItems = contentBx.querySelectorAll('div')

const nextBtn = document.querySelector('#next')
const prevBtn = document.querySelector('#prev')

let counter = 0

const sliderChanger = (direction) => {
  if (direction === 'next') {
    if (counter === images.length - 1) {
      images[images.length - 1].classList.toggle('active')
      images[0].classList.toggle('active')
      contentBxItems[contentBxItems.length - 1].classList.toggle('active')
      contentBxItems[0].classList.toggle('active')
      counter = 0
    } else {
      images[counter].classList.toggle('active')
      images[counter + 1].classList.toggle('active')
      contentBxItems[counter].classList.toggle('active')
      contentBxItems[counter + 1].classList.toggle('active')
      counter++
    }
  } else if (direction === 'prev') {
    if (counter === 0) {
      images[0].classList.toggle('active')
      images[images.length - 1].classList.toggle('active')
      contentBxItems[0].classList.toggle('active')
      contentBxItems[contentBxItems.length - 1].classList.toggle('active')
      counter = contentBxItems.length - 1
    } else {
      images[counter].classList.toggle('active')
      images[counter - 1].classList.toggle('active')
      contentBxItems[counter].classList.toggle('active')
      contentBxItems[counter - 1].classList.toggle('active')
      counter--
    }
  }
}

nextBtn.onclick = () => sliderChanger('next')
prevBtn.onclick = () => sliderChanger('prev')
