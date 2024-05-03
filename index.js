const btnNav = document.querySelector(".icon-menu");
const menuNav = document.querySelector(".nav__menu-tablet-phone");
const opacity = document.querySelector(".menu-opacity ");

const run = (() => {
    btnNav.onclick = onClickMenu;
    opacity.onclick = onClickOpacity;
    copytNav();
})();

function onClickMenu(e) {
    console.log(123);
    opacity.style.opacity = 1;
    opacity.style.visibility = "visible";
    menuNav.style.transform = "translateX(0)";
}
function onClickOpacity(e) {
    opacity.style.opacity = 0;
    opacity.style.visibility = "hidden";
    menuNav.style.transform = "translateX(-100%)";
}
function copytNav() {
    const pcNav = document.querySelector("#pc-nav");
    const mobileNav = document.querySelector("#mobile-nav");
    mobileNav.innerHTML = pcNav.innerHTML;
}
