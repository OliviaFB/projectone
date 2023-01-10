// // au clic sur la div switch
// le cercle se deplace
// l'icone se deplace et se transforme
// le div container change de couleur de fond
// le titre change

let switchBox = document.querySelector(".switch");
// console.log(switchBox);

let circle = document.querySelector(".btn");
// console.log(circle);

let icone = document.querySelector(".fas");
// console.log(icone);

let container = document.querySelector(".container");
// console.log(container);

let title = document.querySelector("h1");
// console.log(title);

switchBox.addEventListener("click", (event) => {
  circle.classList.toggle("btn-change");
  icone.classList.toggle("icone-change");
  icone.classList.toggle("fa-sun");
  container.classList.toggle("container-change");
  switchBox.classList.toggle("switch-change");

  if (title.innerHTML === "LIGHT MODE") {
    title.innerHTML = "DARK MODE";
  } else {
    title.innerHTML = "LIGHT MODE";
  }
});
