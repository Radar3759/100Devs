// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let favFood = 3
favFood = "Fries"
alert(favFood)
//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
let secondChar = "toaster"
alert(secondChar[1])

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
function threeNums(n1, n2, n3) {
 let solution = (n1/n2) * n3
 alert(solution)
}
threeNums(10, 20, 5)

// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
function oneNum(num) {
    console.log(Math.cbrt(num))
}
oneNum(100)
// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
function month(month) {
    if (month === "June" || month === "July" || month === "August") {
        alert("Yay")
    } else {
        alert("Boo")
    }

}
month("June")
month("December")
//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.
function skipFive(n1) {
    for (let i = 0 ; i < n1; i++) {
        if (i % 5 != 0) 
        console.log(i)
    }
}

skipFive(36)
