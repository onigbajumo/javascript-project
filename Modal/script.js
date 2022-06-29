const close = document.querySelector('.close')
const button = document.querySelector('.test')
const  modal = document.querySelector('.modal')





function closeModal(){
    
    modal.style.display = 'none'
}


function openModal(){
    modal.style.display = 'block'
}

close.addEventListener('click', closeModal)
modal.addEventListener('click', closeModal)
button.addEventListener('click', openModal)