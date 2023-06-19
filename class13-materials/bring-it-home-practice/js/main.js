// *Variables*
document.querySelector('#create').addEventListener('click', create)
document.querySelector('#alertVal').addEventListener('click', variableTen)
document.querySelector('#jumanjiMath').addEventListener('click',jumanji)
document.querySelector('#subtractFour').addEventListener('click', subtract)
document.querySelector('#divTwo').addEventListener('click', divide)
document.querySelector('#divThree').addEventListener('click', zebra)
// Create a variable and console log the value

function create() {
    let answer = 3
    console.log(answer);
}

// Create a variable, add 10 to it, and alert the value
function variableTen() {
    let cheese = 12
    varTen = cheese + 10;
    console.log(varTen)
    alert(`${varTen}`)
}

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subtract() {
    const sub1 = document.querySelector('#sub1').value
    const sub2 = document.querySelector('#sub2').value
    const sub3 = document.querySelector('#sub3').value
    const sub4 = document.querySelector ('#sub4').value

    let totalSub = sub1 - sub2 - sub3 - sub4
    // console.log(totalSub)
    alert(`${totalSub}`)

}
// Create a function that divides one number by another and returns the remainder

function divide() {
    const div1 = document.querySelector('#div1').value
    const div2 = document.querySelector('#div2').value

    let remainderNum = div1 / div2
    document.querySelector('#seeAns').innerText = `${remainderNum}`
}

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function jumanji() {
    const num1 = document.querySelector('#num1').value 
    const num2 = document.querySelector('#num2').value 

    let totalNum = num1 + num2

   if (totalNum > 50) {
    alert('Jumanji!!')
   } else {
    alert('Less than 50')
   }
    
}

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function zebra() {
    const div1= document.querySelector('#three1').value
    const div2 = document.querySelector('#three2').value
    const div3 = document.querySelector('#three3').value
    
    let total = div1 * div2 * div3 % 3

    if(total === 0) {
        alert('Zebra!')
    } else {
        alert('Not Zebra!')
    }

}
