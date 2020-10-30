// Criando uma variável para "pegar" todos os inputs
const inputs = document.querySelectorAll('.input');

// Função para adicionar o label dinâmico nos inputs
function focusFunc() {
    let parent = this.parentNode.parentNode;
    parent.classList.add('focus');
}

// Função para recolher o label dinâmico quando houver um clique do mouse fora do form
function blurFunc() {
    let parent = this.parentNode.parentNode;
    if (this.value == "") {
        parent.classList.remove('focus');
    }
}

// Função para adicionar os eventos
inputs.forEach(input => {
    input.addEventListener('focus', focusFunc);
    input.addEventListener('blur', blurFunc);
});

// Pegando o modal
var modal = document.getElementById("modal-terms");

// Pegando o botão que dispara o modal
var btn = document.getElementById("action-modal");

// Pegando o elemento <span> que fecha o modal
var span = document.getElementsByClassName("close")[0];

// Quando o usuário clicar no botão, o modal será exibido 
btn.onclick = function () {
    modal.style.display = "block";
}

// Quando o usuário clicar no <span> (x), o modal será fechado
span.onclick = function () {
    modal.style.display = "none";
}

// Quando o usuário clicar em qualquer lugar fora do modal, ele será fechado
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}