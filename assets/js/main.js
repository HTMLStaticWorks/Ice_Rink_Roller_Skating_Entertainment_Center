document.addEventListener('DOMContentLoaded', () => {
    // Theme Toggle
    const themeToggle = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'dark';
    
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    const updateThemeIcon = (theme) => {
        const icon = themeToggle.querySelector('i');
        if (icon) {
            icon.className = theme === 'dark' ? 'bi bi-moon-stars' : 'bi bi-sun';
        }
    };

    if (themeToggle) {
        updateThemeIcon(currentTheme);
        themeToggle.addEventListener('click', () => {
            const theme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', theme);
            localStorage.setItem('theme', theme);
            updateThemeIcon(theme);
        });
    }

    // RTL Toggle
    const rtlToggle = document.getElementById('rtl-toggle');
    const currentDir = localStorage.getItem('dir') || 'ltr';
    
    document.documentElement.setAttribute('dir', currentDir);
    
    if (rtlToggle) {
        rtlToggle.addEventListener('click', () => {
            const dir = document.documentElement.getAttribute('dir') === 'ltr' ? 'rtl' : 'ltr';
            document.documentElement.setAttribute('dir', dir);
            localStorage.setItem('dir', dir);
        });
    }

    // Mobile Menu
    const hamburger = document.querySelector('.hamburger');
    const offcanvas = document.querySelector('.mobile-offcanvas');
    const closeMenu = document.querySelector('.close-menu');
    const overlay = document.querySelector('.mobile-offcanvas-overlay');

    const toggleMenu = (show) => {
        if (show) {
            offcanvas.classList.add('active');
            overlay?.classList.add('active');
            document.body.style.overflow = 'hidden';
        } else {
            offcanvas.classList.remove('active');
            overlay?.classList.remove('active');
            document.body.style.overflow = '';
        }
    };

    if (hamburger) {
        hamburger.addEventListener('click', () => toggleMenu(true));
    }

    if (closeMenu) {
        closeMenu.addEventListener('click', () => toggleMenu(false));
    }

    if (overlay) {
        overlay.addEventListener('click', () => toggleMenu(false));
    }

    // Sticky Header
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // Back-to-top button
    const backToTop = document.querySelector('.back-to-top');
    if (backToTop) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        });

        backToTop.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const isOpen = item.classList.contains('open');
            faqItems.forEach(i => i.classList.remove('open'));
            if (!isOpen) item.classList.add('open');
        });
    });

    // Form Validation
    const forms = document.querySelectorAll('.needs-validation');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            if (!form.checkValidity()) {
                e.preventDefault();
                e.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    });

    // Scroll Animations (using Intersection Observer)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });

    // Active Link Highlighting
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });

    // Real-time Occupancy Tracker Simulation
    const occupancyValue = document.getElementById('occupancy-value');
    if (occupancyValue) {
        const updateOccupancy = () => {
            const count = Math.floor(Math.random() * (150 - 40 + 1)) + 40;
            const capacity = 200;
            const percentage = Math.round((count / capacity) * 100);
            occupancyValue.textContent = `${percentage}% Capacity (${count}/${capacity} Skaters)`;
            
            const dot = document.querySelector('.status-dot');
            if (dot) {
                if (percentage > 85) {
                    dot.style.background = '#ff4b2b'; // Busy
                } else if (percentage > 60) {
                    dot.style.background = '#f9d423'; // Moderate
                } else {
                    dot.style.background = '#0284c7'; // Quiet
                }
            }
        };
        
        updateOccupancy();
        setInterval(updateOccupancy, 5000);
    }

    // Password Visibility Toggle
    const passwordToggles = document.querySelectorAll('.password-toggle');
    passwordToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const input = this.parentElement.querySelector('input');
            const icon = this.querySelector('i');
            
            if (input.type === 'password') {
                input.type = 'text';
                icon.classList.replace('bi-eye', 'bi-eye-slash');
            } else {
                input.type = 'password';
                icon.classList.replace('bi-eye-slash', 'bi-eye');
            }
        });
    });
});
