const result = document.querySelector('.result')
const check = document.querySelector('.check')
const word = document.querySelector('.text-input')




function vowelCounter(){
    // let count = 0;
    let wordVowel = word.value.toLowerCase();
    

    // for ( let i = 0; i < wordVowel.lenght; i++) {
    //    let  wordCounter = wordVowel[i];
    //    if (wordCounter.match(/(["a,e,i,o,u"])/)) {
    //     count = count + 1;
    //    }
    // }

    const count = wordVowel.match(/[aeiou]/gi).length;


    result.innerHTML = count


}

check.addEventListener('click', vowelCounter)







