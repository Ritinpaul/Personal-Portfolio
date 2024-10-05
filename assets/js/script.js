document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('.section-container > section');

  function hideAllSections() {
      sections.forEach(section => {
          section.setAttribute('hidden', 'true');
      });
  }

  navLinks.forEach(link => {
      link.addEventListener('click', function (event) {
          event.preventDefault();
          const targetSection = document.querySelector(`[data-page="${link.getAttribute('data-target')}"]`);

          hideAllSections();
          if (targetSection) {
              targetSection.removeAttribute('hidden');
          }
          navLinks.forEach(link => link.classList.remove('active'));
          this.classList.add('active');
      });
  });

  
  hideAllSections();
  document.querySelector('[data-page="about-section"]').removeAttribute('hidden');
});
