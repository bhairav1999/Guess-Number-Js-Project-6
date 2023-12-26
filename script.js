// 'use strict';
//  document.querySelector(".message")
//  console.log(`Bhairav`, document.querySelector(".message").textContent)
//  console.log(`Bhairav`, document.querySelector(".message").innerHTML)
//  document.querySelector(".message").textContent ="✨ Correct Number"


//  document.querySelector(".number").textContent=19;
//  document.querySelector(".score").textContent =25;

//  document.querySelector(".guess").value = 475;


//  console.log(document.querySelector(".guess").value =474)

// ----------------------------------code Start---------------------------------------> 



const secrateNumber = Math.floor(Math.random() * 20 + 1)
document.querySelector(".number").textContent = secrateNumber;
let score = 20;


document.querySelector(".check").addEventListener("click", function () {
    const guess = document.querySelector(".guess").value;


    const guessStringConvertToNumber = Number(guess)
    console.log(guessStringConvertToNumber)




    if (!guess) {
        document.querySelector(".message").textContent = "😈 No Number";
    } else if (guessStringConvertToNumber === secrateNumber) {
        document.querySelector(".message").textContent = "😎 Correct Number";
        score++;
        console.log(`Bhairav`, score);
        document.querySelector(".score").textContent = score;
    } else if (guessStringConvertToNumber > secrateNumber) {
        document.querySelector(".message").textContent = " ❌ To High Number"
        score--;
        console.log(`Bhairav`, score);
        document.querySelector(".score").textContent = score;
    } else if (guessStringConvertToNumber < secrateNumber) {
        document.querySelector(".message").textContent = "❌ To Low Number"
        score--;
        console.log(`Bhairav`, score);
        document.querySelector(".score").textContent = score;
    }
})