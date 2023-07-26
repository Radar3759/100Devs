//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://www.dnd5eapi.co/api/spells/${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        // console.log(data.subclasses[0].name)
        // console.log(data.subclasses[1].name)

        data.subclasses.forEach(el => {
          console.log(el.name)
          // make an li
          const li = document.createElement('li')
          // add text to li
          li.textContent = el.name
          // append li to the ul
          document.querySelector('ul').appendChild(li)
        })
          document.querySelector('h2').    innerText = data.name
          console.log(data.name)
        // document.querySelector('img').src = data.choice[0].url
        document.querySelector('ol').innerText = data.classes[0].name
        console.log(data.classes[0].name)

      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

