const d4 = 4
const d6 = 6
const d8 = 8
const d10 = 10
const d12 = 12


function diceRoll(die) {
  return(Math.floor(Math.random() * die) + 1)
}

console.log(diceRoll(d12))