// script.js (Código revisado para funcionar com múltiplos botões)

const phoneModalForced = document.getElementById("phoneModal");
if (phoneModalForced) {
    phoneModalForced.style.display = "none";
}

document.addEventListener('DOMContentLoaded', () => {
    
    const phoneModal = document.getElementById("phoneModal");
    const closeBtn = document.getElementsByClassName("close-btn-phone")[0];
    
    // Botões que abrirão o modal: o ícone/telefone do header E o link 'Contato' da nav bar
    const openBtns = [
        document.getElementById("openPhoneModal"),        // O ícone/número fixo do topo
        document.getElementById("openPhoneModalNav")      // O link 'Contato' da navegação
    ].filter(btn => btn != null); // Filtra os nulos caso algum não exista no HTML

    // 1. Abrir modal
    openBtns.forEach(btn => {
        btn.onclick = function(e) {
            e.preventDefault(); 
            phoneModal.style.display = "block";
        }
    });

    // 2. Fechar com o X
    if (closeBtn) {
        closeBtn.onclick = function() {
            phoneModal.style.display = "none";
        }
    }

    // 3. Fechar clicando fora
    window.onclick = function(event) {
        if (event.target == phoneModal) {
            phoneModal.style.display = "none";
        }
    }
});