  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    // DOM Elements
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebarToggle');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const themeSwitcher = document.getElementById('themeSwitcher');
    const userProfile = document.getElementById('userProfile');
    const userDropdown = document.getElementById('userDropdown');

    // Toggle Sidebar
    function toggleSidebar() {
      sidebar.classList.toggle('collapsed');
      
      // Change icon based on state
      const icon = sidebarToggle.querySelector('i');
      if (sidebar.classList.contains('collapsed')) {
        icon.classList.remove('fa-chevron-left');
        icon.classList.add('fa-chevron-right');
      } else {
        icon.classList.remove('fa-chevron-right');
        icon.classList.add('fa-chevron-left');
      }
    }

    // Mobile Menu Toggle
    function toggleMobileMenu() {
      sidebar.classList.toggle('open');
    }

    // Toggle Theme
    function toggleTheme() {
      if (document.documentElement.getAttribute('data-theme') === 'dark') {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
        themeSwitcher.innerHTML = '<i class="fas fa-moon"></i><span>Dark Mode</span>';
      } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        themeSwitcher.innerHTML = '<i class="fas fa-sun"></i><span>Light Mode</span>';
      }
    }

    // Toggle User Dropdown
    function toggleUserDropdown() {
      userDropdown.classList.toggle('show');
    }

    // Close dropdown when clicking outside
    document.addEventListener('click', function(event) {
      if (!userProfile.contains(event.target) {
        userDropdown.classList.remove('show');
      }
    });

    // Initialize theme from localStorage
    function initTheme() {
      if (localStorage.getItem('theme') === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeSwitcher.innerHTML = '<i class="fas fa-sun"></i><span>Light Mode</span>';
      }
    }

    // Initialize Charts
    function initCharts() {
      // Line Chart
      const lineCtx = document.getElementById('lineChart').getContext('2d');
      const lineChart = new Chart(lineCtx, {
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
          datasets: [{
            label: 'Sales',
            data: [3200, 4100, 2800, 5200, 3900, 6100, 4800],
            borderColor: '#4f46e5',
            backgroundColor: 'rgba(79, 70, 229, 0.05)',
            borderWidth: 2,
            tension: 0.3,
            fill: true,
            pointBackgroundColor: '#fff',
            pointBorderColor: '#4f46e5',
            pointBorderWidth: 2,
            pointRadius: 4,
            pointHoverRadius: 6
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: {
              backgroundColor: '#1e1e2e',
              titleFont: { size: 14 },
              bodyFont: { size: 12 },
              padding: 12,
              cornerRadius: 8,
              displayColors: false
            }
          },
          scales: {
            x: {
              grid: { display: false },
              ticks: { color: 'var(--text-light)' }
            },
            y: {
              grid: { color: 'var(--border-color)' },
              ticks: { color: 'var(--text-light)' }
            }
          }
        }
      });

      // Pie Chart
      const pieCtx = document.getElementById('pieChart').getContext('2d');
      const pieChart = new Chart(pieCtx, {
        type: 'doughnut',
        data: {
          labels: ['Direct', 'Referral', 'Social', 'Organic'],
          datasets: [{
            data: [35, 25, 20, 20],
            backgroundColor: [
              '#4f46e5',
              '#10b981',
              '#f59e0b',
              '#3b82f6'
            ],
            borderWidth: 0,
            hoverOffset: 10
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          cutout: '70%',
          plugins: {
            legend: {
              position: 'right',
              labels: {
                padding: 20,
                usePointStyle: true,
                pointStyle: 'circle',
                color: 'var(--text-color)'
              }
            },
            tooltip: {
              backgroundColor: '#1e1e2e',
              titleFont: { size: 14 },
              bodyFont: { size: 12 },
              padding: 12,
              cornerRadius: 8
            }
          }
        }
      });
    }

    // Event Listeners
    sidebarToggle.addEventListener('click', toggleSidebar);
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    themeSwitcher.addEventListener('click', toggleTheme);
    userProfile.addEventListener('click', toggleUserDropdown);

    // Initialize
    document.addEventListener('DOMContentLoaded', function() {
      initTheme();
      initCharts();
    });