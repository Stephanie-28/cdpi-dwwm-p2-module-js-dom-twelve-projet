/**
 * Template string `${}`
 * innerHTML ou template
 * += operator
 */

// 1. Je recupere le conteneur de publications
const postsContainer = document.querySelector(".posts");
// 2. Base de donnees factice
const posts = [
    {
        titre: "SEO, les bonnes pratiques",
        hashtag: "#SEO",
        link: "#",
        extrait: "Mollit ut mollit esse exercitation nisi ut labore velit anim pariatur sit deserunt anim."
    },
    {
        titre: "Bien, les bonnes pratiques",
        hashtag: "#JS",
        link: "#",
        extrait: "Mollit ut mollit esse exercitation nisi ut labore velit anim pariatur sit deserunt anim."
    },
    {
        titre: "Content, les bonnes pratiques",
        hashtag: "#PHP",
        link: "#",
        extrait: "Mollit ut mollit esse exercitation nisi ut labore velit anim pariatur sit deserunt anim."
    }
];
// 3. Je parcours la bdd
posts.forEach(function(post) {
    const article = document.createElement("article");
    article.classList.add("post");
    article.innerHTML = `
        <h2 class="post-titre">
            <a href="${post.link}">${post.titre}</a>
        </h2>
        <p class="post-extrait">${post.extrait}</p>
        <span class="post-hashtag">${post.hashtag}</span>
    `;
    postsContainer.appendChild(article);
});