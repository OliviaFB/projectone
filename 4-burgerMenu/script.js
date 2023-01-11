// au clic sur l'icone,
// la div modal descend jusqu'en bas de l'ecran
// et l'icone se modifie en croix
// au clic suivant,
// la div modal remonte jusqu'en haut de l'ecran
// et l'icone reprend sa forme d'origine (menu burger)

// Selectionne, Stock, Soumets

const icone = document.querySelector(".navbar-mobile i");
console.log(icone);

const modal = document.querySelector(".modal");
console.log(modal);

icone.addEventListener("click", (event) => {
  modal.classList.toggle("change-modal");
});
