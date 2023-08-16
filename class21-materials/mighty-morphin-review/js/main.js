// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
let holiday = "banana bread";
holiday = "Arbor Day"
upperHoliday = holiday.toUpperCase()

console.log(upperHoliday)
//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
let someWords = "This is the way"
alert(someWords.substring(12))
alert(someWords.slice(-3))
// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
function fiveNums(n1, n2, n3, n4, n5) {
    let total = 100 - n1 - n2 - n3 - n4 - n5
    let absoluteTotal = Math.abs(total)
    alert(absoluteTotal)
}
fiveNums(1, 5, 10, 7, 3)
// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
function threeNums(n1, n2, n3) {
    let max = Math.max(n1, n2, n3)
    let min = Math.min(n1, n2, n3)
    console.log(min)
    console.log(max)
    console.log(`The lowest number is ${min} and the highest number is ${max}.`)
}
threeNums(20, 1, 130)

// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.
// let heads = 0
// let tails = 0

function headsTails() {
//    randoms returns a value between 0 and 1

    let x = Math.floor(Math.random() * 2);
// alt way
// let result = Math.random()
//  if(result < .5)
    if(x === 0 ){
        
        return "heads"
    } else {
       
        return "tails"
    }
}
console.log(headsTails())

//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.
function numHeadsTails(num) {
      
    for(let i = 1; i <= num; i++) {
        let result = headsTails()
        console.log(result)
        
    }
}
numHeadsTails(3)