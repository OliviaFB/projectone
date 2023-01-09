let bouton = document.querySelector(".btn-success");
console.log(bouton);

let cookies = document.querySelector(".cookies");
console.log(cookies);

bouton.addEventListener("click", function () {
  // console.log("le bouton est clique !");
  cookies.style.opacity = "0";
});
