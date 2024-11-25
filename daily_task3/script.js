const carousel = document.querySelector('.carousel-container');
        const slides = document.querySelectorAll('.carousel-slide');
        const prevBtn = document.querySelector('.prev');
        const nextBtn = document.querySelector('.next');
        let currentSlide = 0;

        function updateCarousel() {
            carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
        }

        prevBtn.addEventListener('click', () => {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            updateCarousel();
        });

        nextBtn.addEventListener('click', () => {
            currentSlide = (currentSlide + 1) % slides.length;
            updateCarousel();
        });

        // Auto-advance carousel
        setInterval(() => {
            currentSlide = (currentSlide + 1) % slides.length;
            updateCarousel();
        }, 5000);

        // // Animate statistics
        // function animateNumber(element, target, duration) {
        //     let start = 0;
        //     const increment = target / (duration / 16);
            
        //     function updateNumber() {
        //         start += increment;
        //         if (start < target) {
        //             element.textContent = Math.round(start).toLocaleString();
        //             requestAnimationFrame(updateNumber);
        //         } else {
        //             element.textContent = target.toLocaleString();
        //         }
        //     }
            
        //     updateNumber();
        // }

        // // Initialize statistics animation when in view
        // const observerOptions = {
        //     threshold: 0.5
        // };

        // const observer = new IntersectionObserver((entries) => {
        //     entries.forEach(entry => {
        //         if (entry.isIntersecting) {
        //             animateNumber(document.getElementById('projects-count'), 500, 2000);
        //             animateNumber(document.getElementById('clients-count'), 200, 2000);
        //             const successRate = document.getElementById('success-rate');
        //             animateNumber(successRate, 98, 2000);
        //             successRate.textContent += '%';
        //             observer.unobserve(entry.target);
        //         }
        //     });
        // }, observerOptions);

        // observer.observe(document.querySelector('.stats'));

        // Form validation
        const form = document.getElementById('contact-form');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            if (name && email && message) {
                alert('Thank you for your message! We will get back to you soon.');
                form.reset();
            } else {
                alert('Please fill in all required fields.');
            }
        });