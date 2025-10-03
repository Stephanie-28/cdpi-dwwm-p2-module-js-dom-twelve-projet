/**
 * document.createElement()
 * element.classList.add()
 * element.innerHTML
 * elemParent.appendChild(elemEnfant)
 * element.remove()
 * setTimeout()
 */

// 1. Je recupere le bouton
const btn = document.querySelector("button");
// 2. Je recupere le conteneur de toasts
const ctnToasts = document.querySelector(".container-toasts");

btn.addEventListener("click", () => {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = "Fichier enregistré !";

  ctnToasts.appendChild(toast);

  // disparaît après 3s
  setTimeout(() => {
    toast.remove();
  }, 3000);
});