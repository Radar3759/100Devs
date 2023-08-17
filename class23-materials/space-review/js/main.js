//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
numArr = [ 10, 20, 30]
let sum = 0;
numArr.forEach(num => {
    sum += num;
})

alert(sum)
// alt solution with reduce
// acc accumulation, c current val, call them anything
// alert (nums.reduce((acc, c) => acc + c, 0))

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
numsToSquare = [ 2, 4, 6, 9, 10]

function numSquared(arr) {
    newArr = []
    arr.forEach((num) => newArr.push(num**2))
    return newArr
}

console.log(numSquared(numsToSquare))


//Create a function that takes string
//Print the reverse of that string to the console

function reverseString(str) {
    console.log(str.split('').reverse().join(''))
}
(reverseString("island"))
// arrow fx version
let reverseSTring = str => console.log(str.split('').reverse().join(''))
//Create a function that takes in a string
//Alert if the string is a palindrome or not
function palindromeStr(str) {
    reverse = str.split('').reverse().join('')

    if(str === reverse) {
        alert("Palindrome!")
    } else {
        alert("Not Palindrome!")
    }
}
palindromeStr("radar")
palindromeStr('pickle')