const hamburguer = document.querySelector("#hamburguer")
const navmenu = document.querySelector("#nav-links")

function showContent(navID) {
        var navs = document.querySelectorAll('section > div');
        navs.forEach(function (element) {
            element.style.display = 'none';
        });

        var navAtual = document.getElementById(navID);
        navAtual.style.display = 'block';
    }

document.querySelector('nav a[href="#about"]').addEventListener('click', function () {
        showContent('about-section');
    });

document.querySelector('nav a[href="#formation"]').addEventListener('click', function () {
    showContent('formation-section');
});

document.querySelector('nav a[href="#portfolio"]').addEventListener('click', function () {
    showContent('portfolio-section');
});

document.querySelector('nav a[href="#contact"]').addEventListener('click', function () {
    showContent('contact-section');
});

hamburguer.addEventListener("click", () => {
  hamburguer.classList.toggle("active")
  navmenu.classList.toggle("active")
})