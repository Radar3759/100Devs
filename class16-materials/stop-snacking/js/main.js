//Create a function that grabs the number of snacks from the input and tells you to stop that many times


document.querySelector('#help').addEventListener('click', stopSnacking)

function stopSnacking() {
    let numSnacks = Number(document.querySelector('input').value)
    console.log(numSnacks)
    document.querySelector('#stops').innerText = ""
    for(let i = 1; i <= numSnacks ; i++) {
        document.querySelector('#stops').innerText += "\n Stop!"
    }
}

console.log(stopSnacking())