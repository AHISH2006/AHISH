// Form submission handler
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Hide the form after submission
    const form = event.target;
    form.style.display = "none";

    // Create and display a styled confirmation message
    const confirmationMessage = document.createElement("div");
    confirmationMessage.textContent = "Thank you! We will contact you soon.";
    confirmationMessage.style.cssText = `
        margin-top: 20px;
        padding: 15px;
        background-color: #d4edda;
        color: #155724;
        border: 1px solid #c3e6cb;
        border-radius: 5px;
        font-family: Arial, sans-serif;
        text-align: center;
    `;
    form.parentElement.appendChild(confirmationMessage);
});

// Hide loading screen when page is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    const slideshowImages = document.querySelectorAll('.slideshow-image');
    let currentImageIndex = 0;
    function changeImage() {
        // Remove active class from all images
        slideshowImages.forEach(image => {
            image.classList.remove('active');
        });
        
        // Add active class to next image
        currentImageIndex = (currentImageIndex + 1) % slideshowImages.length;
        slideshowImages[currentImageIndex].classList.add('active');
    }
    
    // Set initial active image
    slideshowImages[0].classList.add('active');
    
    // Change image every 3 seconds
    setInterval(changeImage, 3000);
});
    
    // Hide loading screen
    const loadingScreen = document.querySelector('.loading');
    if (loadingScreen) {
        setTimeout(() => {
            loadingScreen.classList.add('hide');
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 500);
        }, 800);
    }
    
    // Animate therapy images
    const imageContainers = document.querySelectorAll('.image-container');
    
    // Set initial state for images
    imageContainers.forEach((container, index) => {
        container.style.opacity = '0';
        container.style.transform = 'translateY(30px)';
        container.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        container.style.transitionDelay = `${index * 0.2}s`;
    });
    
    // Create intersection observer for animation on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    
    // Observe each image container
    imageContainers.forEach(container => {
        observer.observe(container);
    });
    
    // Scroll to top button functionality
    const scrollTopButton = document.querySelector('.scroll-top');
    if (scrollTopButton) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                scrollTopButton.classList.add('show');
            } else {
                scrollTopButton.classList.remove('show');
            }
        });
        
        scrollTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav ul');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('show');
            menuToggle.classList.toggle('active');
        });
    }
    
    // Highlight active section on scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if(pageYOffset >= (sectionTop - sectionHeight/3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if(link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });
 // Close DOMContentLoaded event listener
