let smiley = document.querySelector("i");
console.log(smiley);

smiley.addEventListener("click", (event) => {
  smiley.classList.toggle("fa-smile-wink");
  smiley.classList.toggle("happy");
});

let button = document.querySelector(".btn");
console.log(button);

// 1. Le bouton change de texte et de couleur

// si le texte du bouton est bien Subscribed
// alors le texte du bouton devient subscribe
// sinon le texte n'est pas subscribed
// le texte du bouton devient subscribed

button.addEventListener("click", (event) => {
  if (button.innerHTML === "Subscribe!") {
    button.innerHTML = "Subscribed";
  } else {
    button.innerHTML = "Subscribe!";
  }

  button.classList.toggle("abonne");
});
