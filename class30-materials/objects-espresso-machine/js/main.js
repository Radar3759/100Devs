//Create an espresso machine constructor that makes machines with 4 properties and 3 methods]
//No parens after EspressoMachine because it's a constructor, not a constructor f(x)
class EspressoMachine {
    constructor(color, make, model, price) {
        this.color = color
        this.make = make
        this.model = model
        this.price = price
    }
    turnOn(){
        console.log("Hi, I'm on now.")
    }
    steam(){
        console.log("Steeeeammmmmyyyy")
    }
    brew() {
        console.log("Brewwwwinggg!")
    }
}

let gaggia = new EspressoMachine('red', 'Gaggia', 'Classic Pro', 400)