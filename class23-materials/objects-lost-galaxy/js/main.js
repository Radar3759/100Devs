//Create a dog object that has four properties and three methods
let dog = {}

dog.color = color
dog.size = medium
dog.breed = breed
dog.treat = treat
dog.bark= function() {
    console.log(`${bark} ${bark} ${bark}`)
}

dog.ball = function() {
    console.log("Toss me the ball!")
}

dog.jump = function() {
    console.log("JUMMMMPP!")
}


function MakeDog(dogColor,dogSize,dogBreed,dogTreat) {

this.color = dogColor
this.size = dogSize
this.breed = dogBreed
this.treet = dogTreat
this.bark = function() {
    console.log(`${bark} ${bark} ${bark}`)
}

this.ball = function() {
    console.log("Toss me the ball!")
}
this.jump = function() {
    console.log("JUMMMMPP!")
}
}