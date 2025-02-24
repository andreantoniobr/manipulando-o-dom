// Selecionando elementos
const texto = document.getElementById("texto");
const btnTrocarTexto = document.getElementById("btnTrocarTexto");
const btnMudarCor = document.getElementById("btnMudarCor");
const btnToggle = document.getElementById("btnToggle");
const btnAdicionar = document.getElementById("btnAdicionar");
const container = document.getElementById("container");

// Alterar o texto do parágrafo
btnTrocarTexto.addEventListener("click", () => {
    texto.textContent = "O texto foi modificado!";
});

// Mudar a cor do parágrafo
btnMudarCor.addEventListener("click", () => {
    texto.classList.toggle("destacado"); // Adiciona ou remove a classe
});

// Esconder/Mostrar o texto
btnToggle.addEventListener("click", () => {
    texto.classList.toggle("oculto");
});

// Adicionar um novo elemento dinamicamente
btnAdicionar.addEventListener("click", () => {
    let novoParagrafo = document.createElement("p");
    novoParagrafo.textContent = "Novo elemento adicionado!";
    container.appendChild(novoParagrafo);
});
