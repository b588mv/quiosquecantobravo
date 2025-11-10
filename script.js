document.addEventListener('DOMContentLoaded', () => {
    
    const phoneModal = document.getElementById("phoneModal");
    const closeBtn = document.getElementsByClassName("close-btn-phone")[0];
    
    const openBtns = [
        document.getElementById("openPhoneModal"),        
        document.getElementById("openPhoneModalNav")      
    ].filter(btn => btn != null); 

    if (phoneModal) {
        // Abrir o velho barreiro
        openBtns.forEach(btn => {
            btn.onclick = function(e) {
                e.preventDefault(); 
                phoneModal.style.display = "block";
            }
        });

        // Fechar com xizinho
        if (closeBtn) {
            closeBtn.onclick = function() {
                phoneModal.style.display = "none";
            }
        }

        // Fechar clicando fora do seu joca
        window.onclick = function(event) {
            if (event.target == phoneModal) {
                phoneModal.style.display = "none";
            }
        }
    }


    const btnPratos = document.getElementById('btn-pratos');
    const btnDrinks = document.getElementById('btn-drinks');
    const contentPratos = document.getElementById('content-pratos');
    const contentDrinks = document.getElementById('content-drinks');

    function switchTab(targetTab) {
        if (!btnPratos || !btnDrinks || !contentPratos || !contentDrinks) return;
        
        btnPratos.classList.remove('active');
        btnDrinks.classList.remove('active');
        
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

    if (btnPratos) {
        btnPratos.addEventListener('click', () => switchTab('pratos'));
    }
    
    if (btnDrinks) {
        btnDrinks.addEventListener('click', () => switchTab('drinks'));
    }

    switchTab('pratos');

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            
            if (this.id === 'openPhoneModalNav' || this.id === 'openPhoneModal') {
                return; 
            }
            
            e.preventDefault();

            const targetId = this.getAttribute('href');
            
            if (targetId === '#') {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            } else {
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                     const headerOffset = 75; 
                     const elementPosition = targetElement.getBoundingClientRect().top;
                     const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                     window.scrollTo({
                         top: offsetPosition,
                         behavior: 'smooth'
                     });
                }
            }
        });
    });
});