document.querySelector('#check').addEventListener('click', check)


function check() {

  let day = document.querySelector('#day').value.toLowerCase()
 
    //Conditionals go here
  if (day === "saturday" || day ==="sunday" ) {
    document.querySelector('#placeToSee').innerText = "The Weekend!"
  } else if (day === "tuesday" || day === "thursday") {
    document.querySelector('#placeToSee').innerText = "Class day"
  } else if (day === "monday" || day === "wednesday" || day === "Friday") {
    document.querySelector('#placeToSee').innerText = "Boring day"
   } else {
    document.querySelector('#placeToSee').innerText = "Whoops, that's not a day of the week."
  }
}

