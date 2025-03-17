// Initialisation de AOS (Animation On Scroll)
document.addEventListener('DOMContentLoaded', function() {
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: false,
    mirror: true,
    anchorPlacement: 'top-bottom'
  });

  // Navigation mobile
  const mobileMenuBtn = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
      
      // Change icon based on menu state
      const icon = mobileMenuBtn.querySelector('i');
      if (mobileMenu.classList.contains('hidden')) {
          icon.classList.remove('fa-times');
          icon.classList.add('fa-bars');
      } else {
          icon.classList.remove('fa-bars');
          icon.classList.add('fa-times');
      }
    });
  }

  // Animation du téléphone sur la page d'accueil
  const phoneElement = document.querySelector('.phone-animation');
  if (phoneElement) {
    window.addEventListener('scroll', function() {
      const scrollPosition = window.scrollY;
      const maxRotation = 10;
      const maxMovement = 20;
      
      // Calculer la rotation et le mouvement basés sur le défilement
      const rotation = Math.min(scrollPosition / 100, maxRotation);
      const movement = Math.min(scrollPosition / 50, maxMovement);
      
      phoneElement.style.transform = `translateY(${movement}px) rotate(${rotation}deg)`;
    });
  }

  // Animation de l'écran d'application dans la section "Découvrez RemoXpress"
  const appScreen = document.querySelector('.app-screen-animation');
  if (appScreen) {
    // Animation flottante
    const floatAnimation = () => {
      let floatUp = true;
      let position = 0;
      const maxFloat = 15;
      const speed = 0.3;

      function animateFloat() {
        if (floatUp) {
          position += speed;
          if (position >= maxFloat) {
            floatUp = false;
          }
        } else {
          position -= speed;
          if (position <= 0) {
            floatUp = true;
          }
        }
        
        appScreen.style.transform = `translateY(${position}px)`;
        requestAnimationFrame(animateFloat);
      }
      
      animateFloat();
    };
    
    floatAnimation();
    
    // Animation au survol
    appScreen.addEventListener('mouseenter', function() {
      appScreen.style.transform = 'scale(1.05) translateY(0)';
      appScreen.style.boxShadow = '0 25px 50px -12px rgba(0, 200, 83, 0.25)';
      appScreen.style.transition = 'all 0.5s ease-in-out';
    });
    
    appScreen.addEventListener('mouseleave', function() {
      appScreen.style.transform = 'scale(1) translateY(0)';
      appScreen.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1)';
      appScreen.style.transition = 'all 0.5s ease-in-out';
    });
  }

  // Compteur de statistiques
  const counters = document.querySelectorAll('.counter');
  if (counters.length > 0) {
    const counterObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          const target = parseInt(counter.getAttribute('data-target'));
          const duration = 2000; // ms
          const step = Math.ceil(target / (duration / 16));
          let current = 0;
          
          const updateCounter = () => {
            current += step;
            if (current >= target) {
              counter.textContent = target.toLocaleString();
              observer.unobserve(counter);
            } else {
              counter.textContent = current.toLocaleString();
              requestAnimationFrame(updateCounter);
            }
          };
          
          updateCounter();
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(counter => {
      counterObserver.observe(counter);
    });
  }

  // Animation des fonctionnalités
  const features = document.querySelectorAll('.feature-item');
  if (features.length > 0) {
    features.forEach((feature, index) => {
      feature.setAttribute('data-aos', 'fade-up');
      feature.setAttribute('data-aos-delay', (index * 100).toString());
      
      feature.addEventListener('mouseenter', function() {
        this.classList.add('feature-hover');
      });
      
      feature.addEventListener('mouseleave', function() {
        this.classList.remove('feature-hover');
      });
    });
  }

  // Smooth scroll pour les liens d'ancrage
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId !== '#') {
        document.querySelector(targetId).scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // Animation des barres de progression dans la section "En Côte d'Ivoire"
  function animateProblemProgressBars() {
    const progressBars = document.querySelectorAll('.problem-progress');
    
    progressBars.forEach((bar, index) => {
      // Définir des largeurs différentes pour chaque barre
      const widths = ['75%', '85%', '65%'];
      const delay = 300 * (index + 1);
      
      setTimeout(() => {
        bar.style.transition = 'width 1.5s ease-in-out';
        bar.style.width = widths[index];
      }, delay);
    });
  }

  // Animation des éléments de liste dans la section "Avantages pour Tous"
  function animateStaggeredListItems() {
    const listItems = document.querySelectorAll('.stagger-list-item');
    
    // Observer pour animer les éléments lorsqu'ils sont visibles
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    listItems.forEach(item => {
      observer.observe(item);
    });
  }

  // Animation des barres de progression
  animateProblemProgressBars();
  
  // Animation des éléments de liste
  animateStaggeredListItems();
  
  // Effet 3D avancé pour les cartes
  const cards = document.querySelectorAll('.card-3d');
  
  cards.forEach(card => {
    card.addEventListener('mousemove', function(e) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const xPercent = (x / rect.width - 0.5) * 10;
      const yPercent = (y / rect.height - 0.5) * 10;
      
      card.style.transform = `perspective(1000px) rotateY(${xPercent}deg) rotateX(${-yPercent}deg) scale3d(1.02, 1.02, 1.02)`;
      
      // Effet de lumière dynamique
      const icon = card.querySelector('.problem-icon');
      if (icon) {
        const shine = `radial-gradient(circle at ${x}px ${y}px, rgba(0, 200, 83, 0.4) 0%, rgba(0, 200, 83, 0.1) 40%, transparent 60%)`;
        icon.style.background = shine;
      }
    });
    
    card.addEventListener('mouseleave', function() {
      card.style.transform = 'perspective(1000px) rotateY(0) rotateX(0) scale3d(1, 1, 1)';
      
      // Réinitialiser l'effet de lumière
      const icon = card.querySelector('.problem-icon');
      if (icon) {
        icon.style.background = '';
      }
    });
  });

  // Animation pour la page Services
  function initServiceAnimations() {
    // Animation des icônes de service
    const serviceIcons = document.querySelectorAll('.service-icon');
    serviceIcons.forEach((icon, index) => {
      icon.classList.add('pulse-icon');
      icon.style.animationDelay = `${index * 0.2}s`;
    });

    // Observer pour les éléments de service
    const serviceObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeInUp');
          entry.target.style.opacity = 1;
          serviceObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    // Observer les éléments de service
    const serviceElements = document.querySelectorAll('.service-feature-item');
    serviceElements.forEach((element, index) => {
      element.style.opacity = 0;
      element.style.animationDelay = `${index * 0.15}s`;
      serviceObserver.observe(element);
    });

    // Effet 3D subtil sur les images de service
    const serviceImages = document.querySelectorAll('.service-image-container');
    serviceImages.forEach(image => {
      image.addEventListener('mousemove', function(e) {
        const rect = image.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const xPercent = (x / rect.width - 0.5) * 5; // Effet plus subtil
        const yPercent = (y / rect.height - 0.5) * 5;
        
        image.style.transform = `perspective(1000px) rotateY(${xPercent}deg) rotateX(${-yPercent}deg) translateY(-5px)`;
      });
      
      image.addEventListener('mouseleave', function() {
        image.style.transform = 'perspective(1000px) rotateY(0) rotateX(0) translateY(0)';
      });
    });
  }

  // Initialiser les animations si on est sur la page Services
  if (document.querySelector('.service-feature-item')) {
    initServiceAnimations();
  }

  // Gestion du formulaire de contact
  function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Récupérer les valeurs du formulaire
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Simuler l'envoi du formulaire (à remplacer par votre logique d'envoi réelle)
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.innerHTML;
        
        // Changer le texte du bouton pendant l'envoi
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Envoi en cours...';
        submitButton.disabled = true;
        
        // Simuler un délai d'envoi (à remplacer par votre appel API réel)
        setTimeout(() => {
          // Réinitialiser le formulaire
          contactForm.reset();
          
          // Afficher un message de succès
          const successMessage = document.createElement('div');
          successMessage.className = 'bg-green-100 text-remo-green p-4 rounded-lg mt-4 flex items-center';
          successMessage.innerHTML = '<i class="fas fa-check-circle mr-2"></i> Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.';
          
          // Insérer le message après le formulaire
          contactForm.parentNode.insertBefore(successMessage, contactForm.nextSibling);
          
          // Restaurer le bouton
          submitButton.innerHTML = originalText;
          submitButton.disabled = false;
          
          // Supprimer le message après 5 secondes
          setTimeout(() => {
            successMessage.remove();
          }, 5000);
        }, 1500);
      });
    }
  }

  // Initialiser le formulaire de contact si on est sur la page Contact
  initContactForm();

  // Header scroll effect
  const header = document.getElementById('header');
  const navLinks = document.querySelectorAll('.nav-link');

  // Add scroll effect to header
  window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
          header.classList.add('bg-white', 'shadow-md');
          header.classList.remove('bg-transparent');
      } else {
          if (window.location.pathname.includes('index.html') || window.location.pathname === '/' || window.location.pathname.endsWith('/')) {
              header.classList.remove('bg-white', 'shadow-md');
              header.classList.add('bg-transparent');
          }
      }
  });

  // Add hover effect to nav links
  navLinks.forEach(link => {
      link.addEventListener('mouseenter', () => {
          if (!link.classList.contains('active')) {
              link.querySelector('span').classList.remove('w-0');
              link.querySelector('span').classList.add('w-full');
          }
      });
      
      link.addEventListener('mouseleave', () => {
          if (!link.classList.contains('active')) {
              link.querySelector('span').classList.remove('w-full');
              link.querySelector('span').classList.add('w-0');
          }
      });
  });
});
