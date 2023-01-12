const modal = document.querySelector(".modal-container");
console.log(modal);

const button = document.querySelector(".btn-success");
console.log(button);

const code = document.querySelector(".code");
console.log(code);

const icone = document.querySelector(".fa-times");
console.log(icone);

window.addEventListener("scroll", displayModal);

function displayModal() {
  console.log("definelement detecte!");

  let hauteur = document.documentElement.scrollTop;
  console.log(hauteur, "nombre de pixels depuis le haut de la page");

  if (hauteur > 400) {
    console.log("affichage de la modal!");
    modal.style.display = "flex";
  }
}

button.addEventListener("click", (event) => {
  code.style.display = "block";
  button.style.display = "none";
});

icone.addEventListener("click", (event) => {
  modal.style.display = "none";
  window.removeEventListener("scroll", displayModal);
});
