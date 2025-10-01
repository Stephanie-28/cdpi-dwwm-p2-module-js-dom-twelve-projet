/*
Nouvelles compétences:
- forEach
- querySelectorAll
*/

const switchElem = document.querySelector(".switch");
const cielElem = document.querySelector("i");
const tout_le_reste = document.querySelectorAll("*");

switchElem.addEventListener("click", () => {
    tout_le_reste.forEach(tout => {
        tout.classList.toggle("darkmode");
        switchElem.classList.toggle("darkmode");
    });

    if (cielElem.classList.contains("fa-sun")) {
    cielElem.classList.remove("fa-sun");
    cielElem.classList.add("fa-moon");
  } else {
    cielElem.classList.remove("fa-moon");
    cielElem.classList.add("fa-sun");
  }
});