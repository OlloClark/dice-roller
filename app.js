const btn = document.querySelector("#btn")
const output = document.querySelector("#output")
const sizeSelect = document.querySelector("#sizeSelect")
const yesAdvantage = document.getElementById("yesAdvantage")

btn.addEventListener("click", diceRoll)
sizeSelect.addEventListener("change", offerAdvantage)


function offerAdvantage() {
  const diceSize = parseInt(document.getElementById("sizeSelect").value);
  diceSize === 20
    ? document.getElementById("advantageCheck").style.visibility = "visible"
    : document.getElementById("advantageCheck").style.visibility = "hidden"

}

offerAdvantage()

function diceRoll() {
  const diceSize = parseInt(document.getElementById("sizeSelect").value)
  const quantitySelect = parseInt(document.getElementById("quantitySelect").value)
  const modifier = parseInt(document.getElementById("modifier").value)
  const result = (Math.floor(Math.random() * diceSize * quantitySelect) + 1);
  const modifiedResult = result + modifier;

    console.log(result)
    if (yesAdvantage.checked) {
      output.innerText = "rolling with adv!"
    } else if (result === 1 && diceSize === 20) {
      output.innerText = "NAT 1!"
    } else if (result === 20 && diceSize === 20) {
      output.innerText = "NAT 20!"
    } else if (modifier >= 0) {
      output.innerText = `${(result)} + ${(modifier)} = ${(modifiedResult)}.`
    } else {
      output.innerText = `${(result)} - ${(Math.abs(modifier))} = ${(modifiedResult)}.`
    }
}


yesAdvantage.addEventListener("change", isChecked)

function isChecked() {
  yesAdvantage.checked ? console.log("checked") : console.log("unchecked");
}
