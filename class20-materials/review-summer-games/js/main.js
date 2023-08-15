//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 
arr = [3, 5, 10, 2, 1]

function multiplyArr(arr) {
    let total  = 1

    for (let i = 0; i < arr.length; i++) {
        total = total * arr[i]
    }
        alert(total)
    }

multiplyArr(arr)
// alternate solution from Leon
// arr.forEach( num => total += num)