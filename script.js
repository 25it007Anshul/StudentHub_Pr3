document.addEventListener('DOMContentLoaded', () => {
  const year = document.querySelector('[data-year]');
  if (year) year.textContent = new Date().getFullYear();

  const registrationForm = document.querySelector('#registrationForm');
  const registrationMessage = document.querySelector('#registrationMessage');

  if (registrationForm && registrationMessage) {
    registrationForm.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!registrationForm.reportValidity()) return;
      registrationMessage.classList.add('show');
      registrationForm.reset();
    });
  }

  // Close the mobile Bootstrap navigation after choosing a section.
  document.querySelectorAll('#mainNavigation .nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      const nav = document.querySelector('#mainNavigation');
      if (nav && window.bootstrap && nav.classList.contains('show')) {
        window.bootstrap.Collapse.getOrCreateInstance(nav).hide();
      }
    });
  });
});
