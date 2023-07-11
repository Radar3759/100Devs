//---Easy
//create a function that subtracts two numbers and alerts the difference
function subTwoNums(num1, num2) {
    let total = num1 - num2
    alert(total)
    // alert(num1 - num2)
}
subTwoNums(12, 2)
//create a function that divides three numbers and console logs the quotient
function divThreeNums(num1, num2, num3) {
    let quotient = num1 / num2 / num3
    console.log(quotient)
}
divThreeNums(100, 10, 2)
//create a function that multiplys three numbers and returns the product
function multThreeNums(num1, num2, num3) {
    let product = num1 * num2 * num3
    return product
}
console.log(multThreeNums(10, 100, 2))
//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number
function threeNums(num1, num2, num3) {
    let remainder = (num1 + num2) % num3
    return remainder
}
console.log(threeNums(100, 2, 3))

//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number
function hardNums(num1, num2, num3, num4) {
    let product1 = num1 * num2
       
        if (product1 > 100) {
            console.log(product1 + (num3 + num4))
        } else if (product1 < 100) {
            console.log(product1 - (num3 - num4))
        } else if (product1 == 100) {
            alert((num1 * num2 * num3))
        }
    
}
(hardNums(10, 10, 2, 1))