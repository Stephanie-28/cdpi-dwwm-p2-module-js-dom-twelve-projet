// //1. Je recupere tout les switchs
// const switchElem = document.querySelectorAll(".switch");
// const cielElem = document.querySelector("i");
// //2. Je recupere tout les elements html de ma page
// const tout_le_reste = document.querySelectorAll("*");
// //3. Je parcours tout les switchs
// switchs.forEach((switchElem) => {
//   switchElem.addEventListener("click", () => {
//     // toggle darkmode sur tout
//     tout_le_reste.forEach((tout) => {
//       tout.classList.toggle("darkmode");
//     });

//     cielElem.forEach(function (cielElem) {
//       if (cielElem.classList.contains("fa-sun")) {
//         cielElem.classList.remove("fa-sun");
//         cielElem.classList.add("fa-moon");
//       } else {
//         cielElem.classList.remove("fa-moon");
//         cielElem.classList.add("fa-sun");
//       }
//     });
//   });
// });

//1. Je récupère tous les switchs
const switchs = document.querySelectorAll(".switch");
//2. Je récupère toutes les icônes soleil/lune
const ciels = document.querySelectorAll("i");
//3. Je récupère tout le reste
const tout_le_reste = document.querySelectorAll("*");

//4. Je parcours tous les switchs
switchs.forEach((sw) => {
  sw.addEventListener("click", () => {
    // toggle darkmode sur tout
    tout_le_reste.forEach((tout) => {
      tout.classList.toggle("darkmode");
    });

    // changer toutes les icônes
    ciels.forEach((ciel) => {
      if (ciel.classList.contains("fa-sun")) {
        ciel.classList.remove("fa-sun");
        ciel.classList.add("fa-moon");
      } else {
        ciel.classList.remove("fa-moon");
        ciel.classList.add("fa-sun");
      }
    });
  });
});

