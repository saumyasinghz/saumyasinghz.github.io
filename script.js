(function () {
  'use strict';

  // Current year in footer
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', nav.classList.contains('open'));
    });
    var links = nav.querySelectorAll('.nav-links a');
    links.forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
      });
    });
  }

  // Rotating hero tagline
  var heroRotateEl = document.getElementById('hero-rotate');
  var roles = [
    'Data Scientist',
    'ML Engineer',
    'M.S. Computer Science @ NYU',
    'Generative Models & Synthetic Data',
    'Python · PyTorch · TensorFlow'
  ];
  if (heroRotateEl) {
    var roleIndex = 0;
    var charIndex = 0;
    var isDeleting = false;
    var typeSpeed = 80;
    var deleteSpeed = 50;
    var pauseAfterType = 2000;
    var pauseAfterDelete = 600;

    function typeNext() {
      var current = roles[roleIndex];
      if (isDeleting) {
        heroRotateEl.textContent = current.slice(0, charIndex - 1);
        charIndex--;
        setTimeout(typeNext, deleteSpeed);
      } else {
        heroRotateEl.textContent = current.slice(0, charIndex + 1);
        charIndex++;
        if (charIndex <= current.length) {
          setTimeout(typeNext, typeSpeed);
        } else {
          isDeleting = true;
          setTimeout(typeNext, pauseAfterType);
        }
      }
      if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(typeNext, pauseAfterDelete);
      }
    }
    setTimeout(typeNext, 500);
  }

  // Skills radar chart (graph)
  var radarChart = null;
  function initRadarChart() {
    var ctx = document.getElementById('skillsRadarChart');
    if (!ctx || radarChart) return;
    var style = getComputedStyle(document.documentElement);
    var accent = style.getPropertyValue('--accent').trim() || '#c97b84';
    var accent2 = style.getPropertyValue('--accent-2').trim() || '#d4a5a5';
    radarChart = new Chart(ctx, {
      type: 'radar',
      data: {
        labels: ['Python', 'Deep Learning', 'Data Eng.', 'Generative AI', 'MLOps', 'Explainability'],
        datasets: [{
          label: 'Proficiency',
          data: [95, 90, 88, 90, 85, 88],
          fill: true,
          backgroundColor: 'rgba(201, 123, 132, 0.25)',
          borderColor: accent,
          borderWidth: 2,
          pointBackgroundColor: accent,
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: accent2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          legend: { display: false }
        },
        scales: {
          r: {
            min: 0,
            max: 100,
            ticks: { display: false },
            grid: { color: 'rgba(107, 101, 96, 0.2)' },
            pointLabels: {
              font: { size: 12, family: "'DM Sans', sans-serif" },
              color: '#6b6560'
            }
          }
        }
      }
    });
  }

  // Scroll reveal + skill bar animation + radar chart init
  var sections = document.querySelectorAll('.section.reveal');
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      if (entry.target.id === 'skills') {
        var fills = entry.target.querySelectorAll('.skill-fill');
        fills.forEach(function (fill) {
          var pct = fill.getAttribute('data-pct') || '0';
          fill.style.width = pct + '%';
        });
        initRadarChart();
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
  sections.forEach(function (s) { observer.observe(s); });
})();
