/**
 * let
 * element.getAttribute()
 * element.setAttribute()
 * ++ operator
 * operateur ternaire
 */

// 1. Recuperer toutes les vignettes
const vignettes = document.querySelectorAll(".small");
// 2. Recuperer la grande image
const fullImg = document.getElementById("full");
// 3. Recuperer le bouton ajouter
const btnAdd = document.querySelector(".btn-add");
// 4. Message panier
const panierMsg = document.querySelector(".panier-msg");
// 5. Compteur panier
let panier = 0;
// 6. Click sur une vignette
vignettes.forEach(vignette => {
    vignette.addEventListener("click", () => {
        // changer l image principale
        fullImg.src = vignette.src;
        // inverser l image
        fullImg.classList.toggle("inverted");
    });
});
// 7. Click sur ajouter au panier
btnAdd.addEventListener("click", () => {
    panier++;
    panierMsg.textContent = "Produit ajoute : " + panier;
});