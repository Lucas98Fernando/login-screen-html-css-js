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

// Get the modal
var modal = document.getElementById("modal-terms");

// Get the button that opens the modal
var btn = document.getElementById("action-modal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}