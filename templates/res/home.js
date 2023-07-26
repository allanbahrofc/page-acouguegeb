const grid = document.querySelector('.grid')
const list = document.getElementsByClassName('category-item')

for (let i = 0; i < list.length; i++) {
    const element = list[i];
    element.addEventListener('click', ()=>{
        element.classList.toggle('selected')
        setTimeout(()=>{
            element.classList.remove('selected')
        }, 4000)
    })
    
    
}