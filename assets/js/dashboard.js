document.addEventListener('DOMContentLoaded', () => {
    // Sidebar Toggle
    const sidebarToggle = document.getElementById('sidebar-toggle');
    const sidebar = document.querySelector('.dashboard-sidebar');
    
    if (sidebarToggle && sidebar) {
        sidebarToggle.addEventListener('click', () => {
            sidebar.classList.toggle('collapsed');
        });
    }

    // Dummy Analytics Chart (using CSS for simplicity or just basic data)
    const stats = document.querySelectorAll('.stat-value');
    stats.forEach(stat => {
        const finalValue = parseInt(stat.getAttribute('data-value'));
        let startValue = 0;
        const duration = 2000;
        const step = finalValue / (duration / 16);
        
        const counter = setInterval(() => {
            startValue += step;
            if (startValue >= finalValue) {
                stat.textContent = finalValue.toLocaleString();
                clearInterval(counter);
            } else {
                stat.textContent = Math.floor(startValue).toLocaleString();
            }
        }, 16);
    });
});
