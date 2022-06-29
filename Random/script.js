const count = document.querySelector('.number')
const randomNumber = document.querySelector('.generate')

function generateNumber(){
    const newNumber = Math.floor(Math.random() * 100) 
    count.innerHTML = newNumber
    
}

randomNumber.addEventListener('click', generateNumber)

generateNumber()