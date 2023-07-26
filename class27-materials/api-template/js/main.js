//Example fetch using api.artic.edu
// document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  // const choice = document.querySelector('input').value.toLowerCase() 
  // choice here is the same as template literal
const url = 'https://raw.githubusercontent.com/serpapi/code-challenge/master/files/van-gogh-paintings.html'

// 'https://pokeapi.co/api/v2/pokemon/'+choice

  fetch(url)
      .then(res => {
        return res.json()
       }) // parse response as JSON
      .then(data => {
        console.log(data)
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

