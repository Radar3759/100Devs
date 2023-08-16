//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)

arr1 = [2, 5, 10, 15]

function evenNumsLoop(arr) {
    let newArr = []

    for (let i = 0; i <= arr.length; i++) {
        if ( i % 2 === 0) {
            console.log(i)
            newArr.push(i)
        } 
    }   
    return newArr
}


console.log(evenNumsLoop(arr1))

function evenNums(arr) {
    let newArr = []

    arr.forEach ( n => {
        if( n % 2 === 0) {
            // console.log(n)
            newArr.push(n)
        }
    })
    return newArr
}
   
console.log(evenNums(arr1))