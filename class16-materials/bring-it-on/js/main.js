// *Variables*
// Create a variable and console log the value
let toast = 300;
console.log(toast)
// Create a variable, add 10 to it, and alert the value
let pB = 12;
let addTen = pB + 10;
alert(addTen);
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function sub4(n1, n2, n3, n4) {
    alert(n1 - n2 - n3 - n4);
}
sub4(100, 20, 30, 40)
// Create a function that divides one number by another and returns the remainder
function divOne(n1, n2) {
    return( n1 % n2)
}
console.log(divOne(10, 3))
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function jumanji(n1, n2) {
    let sum = n1 + n2
        if (sum > 50) {
            alert('Jumanji')
        }
    }
jumanji(40, 20)
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function zebra(n1, n2, n3) {
    let product = n1 * n2 * n3 % 3
    if (product === 0) {
        alert('Zebra')
    }
} 
zebra(3, 3, 3)
//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function word(word, n1) {

    let num = n1
    for(let i = 1; i <= n1; i++) {
        console.log(word)
    }
        
}
word('orange', 5)