//Example fetch using pokemonapi.co
// document.querySelector('button').addEventListener('click', getFetch)

// function getFetch(){
  // const choice = document.querySelector('input').value
  // const url = 'https://www.google.com/search?q=van+gogh+paintings'+ choice

  fetch('https://www.google.com/api/json/v1/1/search?q=van+gogh+paintings')
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
// }