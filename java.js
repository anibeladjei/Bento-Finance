document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons
    lucide.createIcons();
    
    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const closeMenuBtn = document.getElementById('closeMenuBtn');
    const mobileNav = document.getElementById('mobileNav');
    
    if (mobileMenuBtn && closeMenuBtn && mobileNav) {
      mobileMenuBtn.addEventListener('click', () => {
        mobileNav.classList.add('active');
      });
      
      closeMenuBtn.addEventListener('click', () => {
        mobileNav.classList.remove('active');
      });
      
      // Close mobile menu when clicking on a link
      const mobileNavLinks = document.querySelectorAll('.mobile-nav-links a');
      mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
          mobileNav.classList.remove('active');
        });
      });
    }
    
    // Animate elements when they come into view
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.bento-item, .section-header, .feature-check, .testimonial-card, .stat-card');
      
      elements.forEach(element => {
        // Add animate-on-scroll class if not already there
        if (!element.classList.contains('animate-on-scroll')) {
          element.classList.add('animate-on-scroll');
        }
        
        // Check if element is in viewport
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('animate-fade-in');
        }
      });
    };
    
    // Run once on load
    animateOnScroll();
    
    // Run on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Financial Chart
    const financialChartEl = document.getElementById('financialChart');
    
    if (financialChartEl) {
      const chartData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [{
          label: 'Monthly Performance',
          data: [1200, 1900, 1500, 2400, 2700, 3000, 2800],
          borderColor: 'rgba(54, 191, 250, 0.8)',
          backgroundColor: 'rgba(54, 191, 250, 0.2)',
          borderWidth: 3,
          tension: 0.4,
          fill: true,
          pointBackgroundColor: '#1E2538',
          pointBorderColor: 'rgba(54, 191, 250, 0.8)',
          pointBorderWidth: 2,
          pointRadius: 5,
          pointHoverRadius: 8
        }]
      };
      
      const chartConfig = {
        type: 'line',
        data: chartData,
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false
            },
            tooltip: {
              backgroundColor: 'rgba(26, 30, 39, 0.8)',
              titleColor: 'rgba(255, 255, 255, 0.9)',
              bodyColor: 'rgba(255, 255, 255, 0.7)',
              borderColor: 'rgba(255, 255, 255, 0.1)',
              borderWidth: 1,
              padding: 12,
              displayColors: false,
              callbacks: {
                title: function(tooltipItems) {
                  return tooltipItems[0].label;
                },
                label: function(context) {
                  return `$${context.raw}`;
                }
              }
            }
          },
          scales: {
            x: {
              grid: {
                color: 'rgba(255, 255, 255, 0.1)',
                drawBorder: false,
                drawTicks: false
              },
              ticks: {
                color: 'rgba(255, 255, 255, 0.6)'
              }
            },
            y: {
              grid: {
                color: 'rgba(255, 255, 255, 0.1)',
                drawBorder: false,
                drawTicks: false
              },
              ticks: {
                color: 'rgba(255, 255, 255, 0.6)',
                callback: function(value) {
                  return '$' + value;
                }
              }
            }
          }
        }
      };
      
      new Chart(financialChartEl, chartConfig);
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          const headerHeight = document.querySelector('.header').offsetHeight;
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  });
  