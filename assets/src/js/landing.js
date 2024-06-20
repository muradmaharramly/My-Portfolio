// landing.js
document.addEventListener('DOMContentLoaded', () => {
    const homeSection = document.getElementById('home');
    const sections = document.querySelectorAll('.section');
  
    // Home animation after refresh
    homeSection.classList.add('visible');
  
    // Other sections animation
    const observerOptions = {
      threshold: 0.1
    };
  
    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    };
  
    const observer = new IntersectionObserver(observerCallback, observerOptions);
  
    sections.forEach(section => {
      if (section !== homeSection) {
        observer.observe(section);
      }
    });
  });
  