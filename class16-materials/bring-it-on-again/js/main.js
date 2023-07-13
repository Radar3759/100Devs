// *Variables*
// Declare a variable, assign it a value, and alert the value
let fruit = 15;
alert(fruit);
// Create a variable, divide it by 10, and console log the value
let veg = 250;
let divide = veg / 10
console.log(divide)
// *Functions*
// Create a function that multiplys 3 numbers and alerts the product
function multThreeNums(n1, n2, n3) {
    alert(n1 * n2 * n3)
}
multThreeNums(3, 10, 2)
// Create a function that takes in 4 numbers. Add the first two numbers and subtract the next two. Console log the result
function addTwoSubTwo (n1, n2, n3, n4) {
    console.log(n1 + n2 - n3 - n4 )
}
addTwoSubTwo(2, 3, 2, 3)
// *Conditionals*
// Create a function that takes in 3 numbers. Starting with 100 add the first number, subtract the second, and divide the third. If the value is greater then 25, console log "WE HAVE A WINNNA"
function threeNums(n1, n2, n3) {
    let result = (100 + n1 - n2) / n3
    if (result > 25) {
        console.log('WE HAVE A WINNNA')
    }
}
threeNums(70, 20, 3)
// Create a function that takes in a day of the week. If it is a weekend alert, "weekend" and if not alert "week day". Handle capitilization and if the user does not enter a day of the week alert "Try again!"
function dayOfWeek(anyday) {
    let day = anyday.toLowerCase();
    console.log(day)
    if (day === 'saturday'|| day==='sunday') {
        alert('weekend')
    } else if (day === 'monday' || day==='tuesday'|| day==='wednesday'|| day==='thursday'|| day==='friday') {
        alert('week day')
    } else {
        alert('Try again!')
    }
}
dayOfWeek('Moon')
//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number or greater, but count by 3
function threeNumsCountByThree(n1){
    for (let i = 1; i <= n1; i +=3) {
        console.log(i)
    }
}
threeNumsCountByThree(33)