const menu = document.querySelector("#mobilemenu")
const menuLinks = document.querySelector(".navbar__menu")
url = "https://api.ipify.org/?format=json";
function ip() {
    fetch(url).then(res => results.json()).then(result => {console.log(result)}));
}

menu.addEventListener("click", function() {
    menu.classList.toggle("is-active");
    menuLinks.classList.toggle("active");
})
