// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  hamburger.classList.toggle('active');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    hamburger.classList.remove('active');
  });
});

// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > 100) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  
  lastScroll = currentScroll;
});

// Intersection Observer for Animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe sections
const sections = document.querySelectorAll('.game-card, .team-member, .stat');
sections.forEach(section => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(30px)';
  section.style.transition = 'all 0.6s ease';
  observer.observe(section);
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offsetTop = target.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// Newsletter Form Handler
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = newsletterForm.querySelector('input').value;
    if (email) {
      alert('Thank you for subscribing!');
      newsletterForm.reset();
    }
  });
}

// Parallax Effect for Hero
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const heroContent = document.querySelector('.hero-content');
  if (heroContent) {
    heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
    heroContent.style.opacity = 1 - scrolled / 700;
  }
});

// Game Cards Click Handler
const gameCards = document.querySelectorAll('.game-card');
gameCards.forEach(card => {
  card.addEventListener('click', () => {
    // Add your game detail navigation logic here
    console.log('Game card clicked');
  });
});

// NEW: Watch Trailer Button Handler
const gameButton = document.querySelector('.game-button');
if (gameButton) {
  gameButton.addEventListener('click', () => {
    // Scroll to trailer section
    const trailerSection = document.querySelector('.trailer-section');
    if (trailerSection) {
      const offsetTop = trailerSection.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
}

// NEW: Steam Button Click Handler
const steamButtons = document.querySelectorAll('.steam-button');
steamButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    // The link will work normally, but you can add analytics here
    console.log('Steam wishlist button clicked');
    // Example: Track with analytics
    // gtag('event', 'click', { 'event_category': 'Steam', 'event_label': 'Wishlist Button' });
  });
});

// Cursor Glow Effect (Optional Enhancement)
document.addEventListener('mousemove', (e) => {
  const glow = document.createElement('div');
  glow.className = 'cursor-glow';
  glow.style.left = e.pageX + 'px';
  glow.style.top = e.pageY + 'px';
  document.body.appendChild(glow);
  
  setTimeout(() => {
    glow.remove();
  }, 1000);
});

// Add stats counter animation
const animateStats = () => {
  const stats = document.querySelectorAll('.stat-number');
  
  stats.forEach(stat => {
    const target = stat.textContent;
    const isNumber = !isNaN(parseInt(target));
    
    if (isNumber) {
      const number = parseInt(target);
      const duration = 2000;
      const increment = number / (duration / 16);
      let current = 0;
      
      const updateNumber = () => {
        current += increment;
        if (current < number) {
          stat.textContent = Math.floor(current) + '+';
          requestAnimationFrame(updateNumber);
        } else {
          stat.textContent = target;
        }
      };
      
      updateNumber();
    }
  });
};

// Trigger stats animation when in view
const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateStats();
      statsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

const statsSection = document.querySelector('.about-stats');
if (statsSection) {
  statsObserver.observe(statsSection);
}