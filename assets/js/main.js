document.addEventListener('DOMContentLoaded', () => {
    // Theme Toggle
    const themeToggle = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'dark';
    
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const theme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', theme);
            localStorage.setItem('theme', theme);
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
    const offcanvas = document.querySelector('.offcanvas');
    const closeMenu = document.querySelector('.close-menu');

    if (hamburger && offcanvas) {
        hamburger.addEventListener('click', () => {
            offcanvas.classList.add('active');
        });
    }

    if (closeMenu && offcanvas) {
        closeMenu.addEventListener('click', () => {
            offcanvas.classList.remove('active');
        });
    }

    // Occupancy Tracker Simulation
    const occupancyValue = document.getElementById('occupancy-value');
    const statusDot = document.querySelector('.status-dot');

    if (occupancyValue) {
        const updateOccupancy = () => {
            const random = Math.floor(Math.random() * 100);
            occupancyValue.textContent = `${random}% Capacity`;
            
            if (random > 80) {
                statusDot.style.background = '#f44336';
                statusDot.style.boxShadow = '0 0 10px #f44336';
            } else if (random > 50) {
                statusDot.style.background = '#ff9800';
                statusDot.style.boxShadow = '0 0 10px #ff9800';
            } else {
                statusDot.style.background = '#4caf50';
                statusDot.style.boxShadow = '0 0 10px #4caf50';
            }
        };

        updateOccupancy();
        setInterval(updateOccupancy, 10000); // Update every 10 seconds
    }

    // Active Link Highlighting
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPath = window.location.pathname;

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath.split('/').pop()) {
            link.classList.add('active');
        }
    });

    // Sticky Header
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '0.5rem 0';
            header.style.background = 'rgba(10, 10, 18, 0.95)';
        } else {
            header.style.padding = '1rem 0';
            header.style.background = 'var(--glass)';
        }
    });
});
