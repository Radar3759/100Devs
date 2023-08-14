//Create an array of movie titles. Loop through the array and each element to the h2.
let arr = ['Star Wars IV: A New Hope', 'Star Wars V: The Empire Strikes Back', 'Star Wars VI: Return of the Jedi']

for(let i = 0; i < arr.length; i++) {
    document.querySelector('h2').innerText += arr[i]
}
//Create an array of numbers. Loop through the array and three to each number and replace the old number.
let numArr = [12, 34, 5, 988, 10, 14, 356];


numArr.forEach((element) => console.log(element + 3));

// second way
numArr.forEach((item, index) => {
    numArr[index] = item + 3
})
console.log(numArr)
//Find the average of all the numbers from question three

// start counting at zero
let sum = 0
// iterate through each element, add them
numArr.forEach((item) => {
    sum += item;
})
console.log(sum)
// average the total with rounding 
avgNum = Math.round(sum / numArr.length)
console.log(avgNum)

// for (let i = 0; i < numArr; i++) {
//     sum += numArr[i];
//     console.log(sum)
   
// }
