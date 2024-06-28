alert("hello");
let button = document.getElementById("#menu");
let menuSection = document.querySelector(".site-navigation ul");
button.addEventListener("click", function () {
    menuSection.classList.toggle("show-menu");
});