// Criando constantes do menu hamburger e do menu de links
const hamburguer = document.querySelector("#hamburguer")
const navmenu = document.querySelector("#nav-links")

// Função para mostrar conteúdo do link
function showContent(navID) {
        // Armazenando todos os links que não estão sendo exibidos
        var navs = document.querySelectorAll('section > div');
        navs.forEach(function (element) {
            element.style.display = 'none';
        });
        
        // Exibindo o link atual selecionado
        var navAtual = document.getElementById(navID);
        navAtual.style.display = 'block';
    }

// Definindo a função por clique para cada link
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

// Criando um evento de clique para o menu hamburger
hamburguer.addEventListener("click", () => {
  hamburguer.classList.toggle("active")
  navmenu.classList.toggle("active")
})
