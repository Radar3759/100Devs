//Create a Tony Hawk Pro Skater constructor that makes fighting game characters with 4 properties and 3 methods
function MakeSkater(skaterName, skaterBoardColor,skaterStunt,skaterHelmet,skaterPads) {
    this.name = skaterName
    this.color = skaterBoardColor
    this.stunt = skaterStunt
    this.helmet = skaterHelmet
    this.pads = skaterPads
    this.fall = function() {
        alert("Whoooaaa")
    }
    this.momYell = function() {
        alert("Supposed to be doing homework!!")
    }
    this.win = function() {
        console.log("Woot!")
    }
}

let sk8trBoi = new MakeSkater("Bob", "Flames", "Sugar Run", "Green", "yes")