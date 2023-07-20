//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('button').addEventListener('click', getDrink)

function getDrink() {
    let drink = document.querySelector('input').value

    
    fetch(`https://thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
        .then(res => res.json()) // parse response as JSON
    //bring back data (response) 
        .then(data => {
            console.log(data.drinks[0])
            document.querySelector('h2').innerText = data.drinks[0].strDrink
            document.querySelector('img').src = data.drinks[0].strDrinkThumb
            document.querySelector('h3').innerText = data.drinks[0].strInstructions
            document.querySelector('.ing1').innerText = data.drinks[0].strIngredient1
            document.querySelector('.ing2').innerText = data.drinks[0].strIngredient2
            document.querySelector('.ing3').innerText = data.drinks[0].strIngredient3
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}