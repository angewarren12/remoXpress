// Script simple pour le menu mobile
document.addEventListener('DOMContentLoaded', function() {
    // Sélectionner les éléments du menu mobile
    const menuButton = document.querySelector('#mobile-menu-btn, #mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    // Vérifier si les éléments existent
    if (menuButton && mobileMenu) {
        console.log('Menu mobile trouvé');
        
        // Ajouter un gestionnaire d'événements au bouton
        menuButton.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Bouton menu cliqué');
            
            // Basculer la classe 'hidden' pour afficher/masquer le menu
            mobileMenu.classList.toggle('hidden');
            
            // Changer l'icône du bouton
            const icon = menuButton.querySelector('i');
            if (icon) {
                if (mobileMenu.classList.contains('hidden')) {
                    icon.className = 'fas fa-bars text-2xl';
                } else {
                    icon.className = 'fas fa-times text-2xl';
                }
            }
        });
    } else {
        console.error('Menu mobile non trouvé');
    }
});
