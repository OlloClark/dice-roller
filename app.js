const btn = document.querySelector("#btn")
const output = document.querySelector("#output")
btn.addEventListener("click", diceRoll)


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
