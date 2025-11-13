const toggleBtn = document.getElementById('theme-toggle');

toggleBtn.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark');

  document.querySelectorAll('.hero, .shadow-img, .title, .desc, .btn, .nav, .nav-shadow, .container, .container-leonard, .about-content, .leonard-content, .styles-content, .styles-desc, .contact, .contact-hero, .card, .contact-form, .field, .btn-contact').forEach(el => {
    el.classList.toggle('dark');
  });

  if (isDark) {
    localStorage.setItem('theme', 'dark');
    toggleBtn.textContent = 'Light Mode';
  } else {
    localStorage.setItem('theme', 'light');
    toggleBtn.textContent = 'Dark Mode';
  }
});
