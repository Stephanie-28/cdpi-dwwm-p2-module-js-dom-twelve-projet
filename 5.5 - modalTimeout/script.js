
// 1. Je recupere la section à partir de laquelle je veux faire apparaite la modale
const section1 = document.querySelector(".one");

// 2. Je recupere la modale
const modal = document.querySelector(".modal");

// 3. Je recupere le bouton quitter de la modale
const modalQuit = document.querySelector(".modal-quit");

// 4. La modale apparait 1s après le chargement de la page
setTimeout(() => {
  modal.style.display = "flex";
}, 3000);

// 5. Quand on clique sur la croix, on ferme la modale
modalQuit.addEventListener("click", () => {
  modal.style.display = "none";
});