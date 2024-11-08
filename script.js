// Rolagem suave para âncoras de navegação
document.querySelectorAll('.navbar a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      document.getElementById(targetId).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Animação de entrada para elementos
const fadeElements = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.classList.add('show');
      }
  });
}, { threshold: 0.1 });

fadeElements.forEach(el => observer.observe(el));

// Validação de formulário de contato
document.querySelector('.contact-form').addEventListener('submit', function (e) {
    let valid = true;
    const inputs = this.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.style.border = '2px solid red';
            valid = false;
        } else {
            input.style.border = '1px solid #ddd';
        }
    });
    if (!valid) {
        e.preventDefault();
        alert('Por favor, preencha todos os campos obrigatórios.');
    }
});
