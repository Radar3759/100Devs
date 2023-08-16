//Create a stopwatch object that has four properties and three methods
let stopwatch = {}

stopwatch.hours = 24
stopwatch.size = 'medium'
stopwatch.color = "green"
stopwatch.shape = "square"

stopwatch.tellColor = function() {
    console.log(`The color of the stopwatch is ${stopwatch.color}`)
}

stopwatch.stop = function () {
    console.log('Stop')
}

stopwatch.alarm = function() {
    alert("Alarmmmmm!!!")
}