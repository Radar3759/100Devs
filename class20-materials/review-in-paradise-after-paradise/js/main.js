// Create a function that takes in an array. If the first number, is less than the last number, alert "Hi". If the first number is greater than the last number, alert "Bye". If they are equal, alert "We close in an hour".

// first < last
// arr = [ 1, 3, 56, 985, 34, 6]

// first > last
// arr = [ 6, 3, 56, 985, 24, 1]

// first === last
arr = [6, 3, 56, 985, 24, 6]


function numberCompare(arr) {
let firstNum = arr[0]
let lastNum = arr[arr.length -1]
// console.log(firstNum)
// console.log(lastNum)

if (firstNum < lastNum) {
    alert("Hi") 
} else if (firstNum > lastNum) {
    alert("Bye")
} else if (firstNum === lastNum) {
    alert("We close in an hour")
}
}

numberCompare(arr)