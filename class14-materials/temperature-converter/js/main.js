//Write your pseduo code first! 
document.querySelector('#yell').addEventListener('click', tempC)
//  get a starting temp
function tempC() {
   // convert it to a different temp scale
   const temp = document.querySelector('#cel').value
   let tempConvert = temp * 9/5 + 32
   // console.log('Hello World')

     // return/output the converted temp
   document.querySelector('#yellTemp').innerText = `${tempConvert}`

}
   
 
    

