// script.js (Adicionar ao seu código existente)

document.addEventListener('DOMContentLoaded', () => {
    // Código anterior de carregamento de cardápio (se estiver usando)

    // Ações para o Modal (Opção 2)
    const modal = document.getElementById("cardapioModal");
    const btn = document.querySelector(".btn-primary"); // O botão "VER CARDÁPIO"
    const span = document.getElementsByClassName("close-btn")[0];

    // Quando o usuário clica no botão, abre o modal
    btn.onclick = function(e) {
        e.preventDefault(); // Evita que o link tente navegar
        modal.style.display = "block";
    }

    // Quando o usuário clica no (x), fecha o modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // Quando o usuário clica fora do modal, fecha
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});