/*
Nouvelles compétences:
- querySelector // Selectionne le premier element seulement mieux que getElementsBy
- HTMLElement.style 
*/

// 1. Je recupere le bouton "Accepter les cookies"
const cookiesBtn_elem = document.querySelector(".cookies-btn");
// 2. Je recupere la banniere de cookies
const cookies_elem = document.querySelector(".cookies");
// 3. J'ecoute l'evenement "click" sur le bouton "Accepter les cookies"
const cookiesClic_elem = document.addEventListener("click", function(event_obj) {
    event_obj.preventDefault();
    cookies_elem.style.display = "none";
});