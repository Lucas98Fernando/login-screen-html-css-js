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