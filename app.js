const menu = document.querySelector("#mobilemenu")
const menuLinks = document.querySelector(".navbar__menu")
fetch("https://api.ipify.org/?format=json");
    .then(results => results.json());
    .then(console.log);

menu.addEventListener("click", function() {
    menu.classList.toggle("is-active");
    menuLinks.classList.toggle("active");
})
