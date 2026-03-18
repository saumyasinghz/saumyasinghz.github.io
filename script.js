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

  // Rotating hero tagline (typewriter with constant char speed)
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
    var STEP_SPEED = 80;        // ms per character (same for type/delete)
    var PAUSE_AFTER_TYPE = 1000;  // pause after full word
    var PAUSE_AFTER_DELETE = 500; // pause after clearing

    function typeNext() {
      var current = roles[roleIndex];

      if (!isDeleting) {
        // typing forward
        heroRotateEl.textContent = current.slice(0, charIndex + 1);
        charIndex++;

        if (charIndex < current.length) {
          setTimeout(typeNext, STEP_SPEED);
        } else {
          isDeleting = true;
          setTimeout(typeNext, PAUSE_AFTER_TYPE);
        }
      } else {
        // deleting
        heroRotateEl.textContent = current.slice(0, charIndex - 1);
        charIndex--;

        if (charIndex > 0) {
          setTimeout(typeNext, STEP_SPEED);
        } else {
          isDeleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
          setTimeout(typeNext, PAUSE_AFTER_DELETE);
        }
      }
    }

    setTimeout(typeNext, 500);
  }

  // Scroll reveal
  var sections = document.querySelectorAll('.section.reveal');
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
  sections.forEach(function (s) { observer.observe(s); });
})();
