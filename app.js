const btn = document.querySelector("#btn")
const output = document.querySelector("#output")
const sizeSelect = document.querySelector("#sizeSelect")
btn.addEventListener("click", diceRoll)
sizeSelect.addEventListener("change", offerAdvantage)


function offerAdvantage() {
  const diceSize = parseInt(document.getElementById("sizeSelect").value)
  if (diceSize === 20) {
    document.getElementById("advantage").innerText = "roll with advantage?"
  }
}

offerAdvantage()


function diceRoll() {
  const diceSize = parseInt(document.getElementById("sizeSelect").value)
  const quantitySelect = parseInt(document.getElementById("quantitySelect").value)
  const modifier = parseInt(document.getElementById("modifier").value)
  const result = (Math.floor(Math.random() * diceSize * quantitySelect) + 1);
  const modifiedResult = result + modifier;
    console.log(result)
    if (result === 1 && diceSize === 20) {
      output.innerText = "NAT 1!"
    } else if (result === 20 && diceSize === 20) {
      output.innerText = "NAT 20!"
    } else if (modifier >= 0){
      output.innerText = `${(result)} + ${(modifier)} = ${(modifiedResult)}.`
    } else {
      output.innerText = `${(result)} - ${(Math.abs(modifier))} = ${(modifiedResult)}.`
    }
}
