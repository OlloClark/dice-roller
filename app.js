const d4 = 4
const d6 = 6
// const d8 = 8
// const d10 = 10
// const d12 = 12
// const d20 = 20
const btn = document.querySelector("#btn")
btn.addEventListener("click", diceRoll)

function diceRoll() {
  // btn.addEventListener("click", function(){
    console.log("clicked")
    console.log(Math.floor(Math.random() * 20) + 1)
    // return(Math.floor(Math.random() * die) + 1)
  // })
  
}

// console.log(`You rolled a ${diceRoll(d12)}!`)
