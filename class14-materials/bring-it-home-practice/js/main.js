// *Variables*
// Create a variable and console log the value
let sandwichType = "Peanut Butter & Jelly"
console.log(sandwichType);
// Create a variable, add 10 to it, and alert the value
let num1 = 20;
let addTen = num1 + 10;
alert(addTen);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subtractFourNums(num1, num2, num3, num4) {
    difference = num1 - num2 - num3 - num4;
    alert(difference);
}
subtractFourNums(20,2,3,1)
// Create a function that divides one number by another and returns the remainder
function divideTwoNums(num1, num2) {
    remainder = num1 / num2;
    return remainder;
}
divideTwoNums(20,2)
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function jumanji(num1, num2) {
    totalSum = num1 + num2

    if (totalSum > 50) {
        alert('Jumanji!')
    } else {
        alert('not Jumanji')
    }
}
jumanji(35,45) 
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multiplyThreeNums(num1, num2, num3) {
    total= num1 * num2 * num3;
    if (total % 3 === 0) {
        alert('ZEBRA')
    } else {
        alert('not zebra')
    }
}
multiplyThreeNums(10,3,3)