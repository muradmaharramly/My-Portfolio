document.addEventListener("DOMContentLoaded", function() {
    // Add smooth scroll to navbar links
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            const elementPosition = targetSection.getBoundingClientRect().top + window.pageYOffset;
            window.scroll({
                top: elementPosition - 70,
                behavior: "smooth"
            });
            toggleMenu(); // Close the navbar if open
        });
    });

    // Toggle burger menu
    const toggleButton = document.querySelector('.toggle-button');
    toggleButton.addEventListener('click', toggleMenu);

    function toggleMenu() {
        const navbarLinks = document.querySelector('.navbar-links');
        navbarLinks.classList.toggle('active');
        toggleButton.classList.toggle('active');
    }

    // Job title animation
    const jobTitle = document.getElementById('job-title');
    const titles = [" University student.", " Digital Marketer.", " Enthusiastic Frontend Dev."];
    let titleIndex = 0;

    function typeTitle() {
        let title = titles[titleIndex];
        let charIndex = 0;

        function typeChar() {
            if (charIndex < title.length) {
                jobTitle.textContent += title.charAt(charIndex);
                charIndex++;
                setTimeout(typeChar, 100);
            } else {
                setTimeout(() => {
                    jobTitle.textContent = '';
                    titleIndex = (titleIndex + 1) % titles.length;
                    typeTitle();
                }, 1000);
            }
        }

        typeChar();
    }

    typeTitle();

    // Highlight active section link in navbar
    const sections = document.querySelectorAll('section');
    const options = {
        threshold: 0.6
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').substring(1) === entry.target.id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Show or hide the back-to-top button
    window.addEventListener('scroll', function() {
        const backToTopButton = document.querySelector('.back-to-top');
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    // Smooth scroll to the top with 20px offset
    document.querySelector('.back-to-top').addEventListener('click', function(e) {
        e.preventDefault();
        const homeSection = document.querySelector('#home');
        const elementPosition = homeSection.getBoundingClientRect().top + window.pageYOffset;
        window.scroll({
            top: elementPosition - 50,
            behavior: 'smooth'
        });
    });


    // Progress bar animation
    const progresses = document.querySelectorAll('.progress');

    progresses.forEach(progress => {
        const width = progress.style.width;
        progress.style.width = '0';
        setTimeout(() => {
            progress.style.width = width;
        }, 500);
    });
});
