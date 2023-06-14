//Write your pseduo code first! 
// get a temp
document.querySelector('#yell').addEventListener('click', convert)

function convert() {

    let temp = document.querySelector('#cel').value
    //convert
    temp = temp * 9/5 + 32
    // return the temp
    document.querySelector('#placeToYell').innerText = temp

}
    

