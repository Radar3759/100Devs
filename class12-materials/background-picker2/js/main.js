document.getElementById('purple').onclick = partyPurple
document.getElementById('green').onclick = partyGreen
document.getElementById('blue').onclick = partyBlue


function partyPurple() {
  document.querySelector('body').style.background = "url('img/goldengate.jpg')"

  document.querySelector('body').style.backgroundPosition = 'center'
  // document.querySelector('body').style.backgroundRepeat = 'no-repeat'
  // document.querySelector('body').style.backgroundSize = 'cover'
}

function partyGreen() {
  document.querySelector('body').style.background = "url('img/Mac.jpg')"

}

function partyBlue() {
  document.querySelector('body').style.background = "url('img/MetallicaBridge.jpg')"

}
