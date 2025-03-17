// Initialisation de l'animation de particules
document.addEventListener('DOMContentLoaded', function() {
  // Vérifier si l'élément particles-js existe
  if (document.getElementById('particles-js')) {
    // Charger la configuration des particules
    const config = typeof particlesConfig !== 'undefined' ? particlesConfig : {};
    
    // Initialiser particles.js
    try {
      particlesJS('particles-js', config);
      console.log('Animation de particules initialisée avec succès');
    } catch (error) {
      console.error('Erreur lors de l\'initialisation de l\'animation de particules:', error);
    }
  }
});
