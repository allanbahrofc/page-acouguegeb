const stockBehavior = {}

const sideItemsBehavior = document.getElementsByClassName('side-item')
const contentBehavior = document.querySelector('.content')

window.addEventListener('load',() => {
    contentBehavior.remove()
})

sideItemsBehavior[0].addEventListener('click', () => {
    console.log(sideItemsBehavior[0].textContent = 'a')
})