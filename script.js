// script.js - Lógica de Modal e Abas (Tabs) para o Menu de Destaque

document.addEventListener('DOMContentLoaded', () => {
    
    const phoneModal = document.getElementById("phoneModal");
    const closeBtn = document.getElementsByClassName("close-btn-phone")[0];
    
    // Botões que abrirão o modal: o ícone/telefone do header E o link 'Contato' da nav bar
    const openBtns = [
        document.getElementById("openPhoneModal"),        // Se houver um ícone/número fixo no topo
        document.getElementById("openPhoneModalNav")      // O link 'Contato' da navegação
    ].filter(btn => btn != null); // Filtra os nulos caso algum não exista no HTML

    // 1. Lógica do Modal de Contato
    if (phoneModal) {
        // Abrir modal
        openBtns.forEach(btn => {
            btn.onclick = function(e) {
                e.preventDefault(); 
                phoneModal.style.display = "block";
            }
        });

        // Fechar com o X
        if (closeBtn) {
            closeBtn.onclick = function() {
                phoneModal.style.display = "none";
            }
        }

        // Fechar clicando fora
        window.onclick = function(event) {
            if (event.target == phoneModal) {
                phoneModal.style.display = "none";
            }
        }
    }


    // -----------------------------------------------------------------
    // LÓGICA: ABAS (TABS) PARA PRATOS E DRINKS
    // -----------------------------------------------------------------
    const btnPratos = document.getElementById('btn-pratos');
    const btnDrinks = document.getElementById('btn-drinks');
    const contentPratos = document.getElementById('content-pratos');
    const contentDrinks = document.getElementById('content-drinks');

    function switchTab(targetTab) {
        // Verifica se os elementos existem antes de tentar manipular as classes
        if (!btnPratos || !btnDrinks || !contentPratos || !contentDrinks) return;
        
        // Remove 'active' de todos os botões e adiciona ao botão clicado
        btnPratos.classList.remove('active');
        btnDrinks.classList.remove('active');
        
        // Esconde todo o conteúdo
        contentPratos.classList.add('hidden');
        contentDrinks.classList.add('hidden');
        
        if (targetTab === 'pratos') {
            btnPratos.classList.add('active');
            contentPratos.classList.remove('hidden');
        } else if (targetTab === 'drinks') {
            btnDrinks.classList.add('active');
            contentDrinks.classList.remove('hidden');
        }
    }

    // Adiciona o evento de clique nos botões
    if (btnPratos) {
        btnPratos.addEventListener('click', () => switchTab('pratos'));
    }
    
    if (btnDrinks) {
        btnDrinks.addEventListener('click', () => switchTab('drinks'));
    }

    // Garante que a aba de Pratos seja exibida por padrão ao carregar a página
    switchTab('pratos');
});