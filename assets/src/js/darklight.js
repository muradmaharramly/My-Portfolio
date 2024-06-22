(function() {
    document.addEventListener('DOMContentLoaded', () => {
      const themeToggleButton = document.getElementById('theme-toggle');
      const themeIcon = document.getElementById('theme-icon');
      const themeStylesheet = document.getElementById('theme-stylesheet');
  
      // Sayfa yüklendiğinde mevcut temayı localStorage'dan al
      const currentTheme = localStorage.getItem('theme') || 'light';
  
      // Mevcut temaya göre stil dosyasını ve ikonu ayarla
      if (currentTheme === 'dark') {
        themeStylesheet.setAttribute('href', 'styledark.css');
        themeIcon.textContent = '🌙';
      } else {
        themeStylesheet.setAttribute('href', 'stylelight.css');
        themeIcon.textContent = '☀️';
      }
  
      themeToggleButton.addEventListener('click', () => {
        if (themeStylesheet.getAttribute('href') === 'stylelight.css') {
          themeStylesheet.setAttribute('href', 'styledark.css');
          themeIcon.textContent = '🌙';
          localStorage.setItem('theme', 'dark');
        } else {
          themeStylesheet.setAttribute('href', 'stylelight.css');
          themeIcon.textContent = '☀️';
          localStorage.setItem('theme', 'light');
        }
      });
    });
  })();
  