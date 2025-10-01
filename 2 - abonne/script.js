/*
Nouvelles compétences:
 - Font awesome
 - type Boolean
 - if else
 - HTMLElement.classList
    - toggle Inverse l'etat de la classe : present ou pas
    * add
    * remove
    * replace
*/

// 1. Je recupere l'icone smiley
const triste_sourire = document.querySelector(".fa-face-meh");
// 2. Je recupere le bouton ABONNER
const reste_ici = document.querySelector(".btn-sub");
// 3. Je défini une variable binaire qui exprime l'etat abonné ou non de l'utilisateur

// 4. J'ecoute le clique sur l'icone smiley
triste_sourire.addEventListener("click", function () {
    triste_sourire.classList.toggle("fa-face-smile-wink"); 
    triste_sourire.classList.toggle("fa-face-meh"); 
    triste_sourire.classList.toggle("happy"); 
});

// 5. J'ecoute l'evenemment click sur le bouton ABONNEZ
reste_ici.addEventListener("click", function () {
    reste_ici.classList.toggle("abonne"); 
  if (reste_ici.textContent === "Abonnez-vous") {
    reste_ici.textContent = "Abonné";
  } else {
    reste_ici.textContent = "Abonnez-vous";
  }
});