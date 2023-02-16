const btn = document.querySelector("#btn")
const output = document.querySelector("#output")

btn.addEventListener("click", diceRoll)

function diceRoll() {
  // let dice = document.getElementById("mySelect").value;
  let diceSize = parseInt(document.getElementById("mySelect").value)
  const result = (Math.floor(Math.random() * diceSize) + 1);
    console.log(result)
    if (result === 1 && diceSize === 20) {
      output.innerText = "You rolled a NAT 1!"
    } else if (result === 20 && diceSize === 20) {
      output.innerText = "You rolled a NAT 20!"
    } else {
      output.innerText = `You rolled a ${(result)}`
    }
}
