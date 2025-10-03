/**
 * firstChild
 * lastChild
 * childNodes
 * nextSibiling MAIS preferez nextElementSibiling pour eviter de selectionner les passages à la ligne
 * previousSibiling MAIS preferez previousElementSibiling  pour eviter de selectionner les passages à la ligne
 * 
 */

// 1. Je recupere toutes les questions
const questions = document.querySelectorAll(".question");

// 2. Je parcours toutes les questions
questions.forEach((question) => {
    // 3. Lors du click sur la question
    question.addEventListener("click", () => {
    // 3 bis. Je récupère la réponse juste après
    const reponse = question.nextElementSibling;
    // 4. J'ouvre/ferme la réponse
    reponse.classList.toggle("show-reponse");
    // 5. Je recupere la reponse correspondante et le chevron correspondante
    // 5 bis. Je fais tourner le chevron
    const chevron = question.querySelector(".btn-arrow");
    chevron.classList.toggle("rotate");
  });
});