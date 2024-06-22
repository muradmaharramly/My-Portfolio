(function() {
    document.addEventListener('DOMContentLoaded', () => {
      const themeToggleButton = document.getElementById('theme-toggle');
      const themeIcon = document.getElementById('theme-icon');
      const themeStylesheet = document.getElementById('theme-stylesheet');
  
      // Set the default theme to dark
      let currentTheme = 'dark';
  
      // Retrieve the theme from localStorage
      const savedTheme = localStorage.getItem('theme');
      
      // Use the theme from localStorage if available
      if (savedTheme) {
        currentTheme = savedTheme;
      }
  
      // Set the stylesheet and icon according to the current theme
      if (currentTheme === 'dark') {
        themeStylesheet.setAttribute('href', 'styledark.css');
        themeIcon.textContent = '🌙';
      } else {
        themeStylesheet.setAttribute('href', 'stylelight.css');
        themeIcon.textContent = '☀️';
      }
  
      themeToggleButton.addEventListener('click', () => {
        themeIcon.classList.add('fade-out');
        setTimeout(() => {
          if (themeStylesheet.getAttribute('href') === 'stylelight.css') {
            themeStylesheet.setAttribute('href', 'styledark.css');
            themeIcon.textContent = '🌙';
            localStorage.setItem('theme', 'dark');
          } else {
            themeStylesheet.setAttribute('href', 'stylelight.css');
            themeIcon.textContent = '☀️';
            localStorage.setItem('theme', 'light');
          }
          themeIcon.classList.remove('fade-out');
          themeIcon.classList.add('fade-in');
        }, 500); // Should match the animation duration
      });
    });
  })();
  