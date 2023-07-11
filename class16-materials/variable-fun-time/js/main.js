//--- Easy
//create a variable and assign it a number
let apple = 250;
//minus 10 from that number
let orange = apple - 10
//print that number to the console
console.log(orange);
//--- Medium
//create a variable that holds a value from the input
let inputVal = document.querySelector('#danceDanceRevolution').value;
console.log(inputVal);
//add 25 to that number
inputVal = inputVal + 25;
//alert that number
alert(inputVal);
//--- Hard
//create a variable that holds the h1
const holdAychOne = document.querySelector('h1');
//add an event listener to that element that console logs the sum of the two previous variables
holdAychOne.addEventListener('click', sum)

function sum() {
    console.log(orange + Number(inputVal))
}
sum()