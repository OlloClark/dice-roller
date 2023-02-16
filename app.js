const d4 = 4
const d6 = 6
// const d8 = 8
// const d10 = 10
// const d12 = 12
// const d20 = 20
const btn = document.querySelector("#btn")
const output = document.querySelector("#output")

// let diceSelector = document.getElementById("mySelect");
// let option = diceSelector.options[diceSelector.selectedIndex].value;
// console.log(option)

function returnDice() {
  let dice = document.getElementById("mySelect").value;
  console.log(`${dice} selected`)
}


btn.addEventListener("click", diceRoll)

function diceRoll() {
    // console.log("clicked");
    const result = (Math.floor(Math.random() * 20) + 1);
    console.log(result)
    if (result === 1) {
      output.innerText = "You rolled a NAT 1!"
    } else if (result === 20) {
      output.innerText = "You rolled a NAT 20!"
    } else {
      output.innerText = `You rolled a ${(result)}`
    }
    
}

// console.log(`You rolled a ${diceRoll(d12)}!`)
