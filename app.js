const btn = document.querySelector("#btn")
const output = document.querySelector("#output")



btn.addEventListener("click", diceRoll)

function diceRoll() {
  // let dice = document.getElementById("mySelect").value;
  const diceSize = parseInt(document.getElementById("sizeSelect").value)
  const quantitySelect = parseInt(document.getElementById("quantitySelect").value)
  const result = (Math.floor(Math.random() * diceSize * quantitySelect) + 1);
    console.log(result)
    if (result === 1 && diceSize === 20) {
      output.innerText = "You rolled a NAT 1!"
    } else if (result === 20 && diceSize === 20) {
      output.innerText = "You rolled a NAT 20!"
    } else {
      output.innerText = `You rolled a ${(result)}`
    }
}
