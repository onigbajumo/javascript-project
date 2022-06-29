const color = document.querySelector('.color')
const colorGenerator = document.querySelector('.generate')



function randomColor(){
    const randomColor = Math.random().toString(16).substring(2, 8)
    color.innerHTML = "#" + randomColor 
    document.body.style.backgroundColor = "#" + randomColor 
}

colorGenerator.addEventListener('click', randomColor);

// randomeColor()