window.addEventListener("scroll", function () {
    let scroll = window.scrollY;
    document.querySelector(".hero").style.backgroundPositionY = scroll * 0.5 + "px";
});

const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.navbar ul');

toggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});