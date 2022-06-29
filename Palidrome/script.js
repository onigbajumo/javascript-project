const result = document.querySelector('.result')
const check = document.querySelector('.check')
// const word = document.querySelector('.text-input').value





function checkPalidrome(){
    const word = document.querySelector('.text-input').value

    let len = word.length
    let start = word.substring(0, Math.floor(len / 2) ).toLowerCase()
    let end = word.substring(len - Math.floor(len / 2)  ).toLowerCase()

    let flip = end.split('').reverse().join('')

    if (start == flip) {
        result.innerHTML = (`${word.toUpperCase()} is a Palindrome`);
    } else {
        result.innerHTML = (`${word.toUpperCase()} is NOT a Palindrome`)
    }

    
    
    
}

check.addEventListener('click', checkPalidrome)






