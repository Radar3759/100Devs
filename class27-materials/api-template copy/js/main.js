
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  
  const choice = document.querySelector('input').value.toLowerCase() 
  const choice2 = document.querySelector('input').value.toUpperCase() 
  const url = `https://api.artic.edu/api/v1/artworks/search?q=${choice}`
   

  fetch(url)
    
      
      .then(res => res.json())
      .then(data => {
        // console.log(data.data[0].title)
        // console.log(data.data)
        //console.log every title in the search
        data.data.forEach(el => {
          console.log(el.title)
        
        
        const li = document.createElement('li')
        // add text to li
        li.textContent = el.title
       // append li to the ul
        document.querySelector('ul').appendChild(li)
         })
        document.querySelector('h1').innerText = `Art by ${choice2}`
        
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}