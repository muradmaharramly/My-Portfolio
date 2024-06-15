// Job Title writer

document.addEventListener('DOMContentLoaded', function() {
    const jobTitle = document.getElementById('job-title');
    const titles = [
        { text: " University student.", color: "title-white" },
        { text: "Digital Marketer.", color: "title-purple" },
        { text: "Enthusiastic Frontend Dev.", color: "title-blue" }
    ];
    let titleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeTitle() {
        const currentTitle = titles[titleIndex];
        jobTitle.className = `job-title ${currentTitle.color}`;
        if (isDeleting) {
            jobTitle.textContent = currentTitle.text.substring(0, charIndex - 1);
            charIndex--;
            if (charIndex === 0) {
                isDeleting = false;
                titleIndex = (titleIndex + 1) % titles.length;
            }
        } else {
            jobTitle.textContent = currentTitle.text.substring(0, charIndex + 1);
            charIndex++;
            if (charIndex === currentTitle.text.length) {
                setTimeout(() => {
                    isDeleting = true;
                }, 1000);
            }
        }

        setTimeout(typeTitle, isDeleting ? 50 : 100);
    }

    typeTitle();
});
