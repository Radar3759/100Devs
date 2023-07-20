//Get a dog photo from the dog.ceo api and place the photo in the DOM

// go to this url (fetch)
fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => res.json()) // parse response as JSON
 //bring back data (response) 
    .then(data => {
        console.log(data.message)
//use the data 
        document.querySelector('img').src = data.message
      })
    .catch(err => {
        console.log(`error ${err}`)
      });


