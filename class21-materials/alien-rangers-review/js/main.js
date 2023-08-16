//Arrays

//Create and array of tv shows. Loop through and print each show to the console
let tvShows = ["Manimal", "Maude", "The Simpsons", "Green Acres", "The Bachelor"]

tvShows.forEach( i => console.log(i))

//Create and array of numbers
//Return a new array of numbers that includes every even number from the previous Arrays
arrayOfNums = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// evenNums is a f(x) takes param arr, filter method on arr
let evenNums = arr => arr.filter( n => n % 2 === 0 )
console.log(evenNums(arrayOfNums))

//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number
arrayForHighLow = [ 10, 20, 30, 40, 50, 60]

function numHighLow(arr) {
    let sorted = arr.sort((a,b) => a-b)
    alert(sorted [1] + sorted[sorted.length -2])

}

numHighLow(arrayForHighLow)