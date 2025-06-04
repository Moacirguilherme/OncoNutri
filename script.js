document.addEventListener('DOMContentLoaded', function () {
  const slides = document.querySelectorAll('.slide');
  const prev = document.querySelector('.prev');
  const next = document.querySelector('.next');
  let index = 0;

  function mostrarSlide(i) {
    slides.forEach((slide, j) => {
      slide.classList.remove('ativo');
    });
    slides[i].classList.add('ativo');
  }

  prev.addEventListener('click', () => {
    index = (index === 0) ? slides.length - 1 : index - 1;
    mostrarSlide(index);
  });

  next.addEventListener('click', () => {
    index = (index === slides.length - 1) ? 0 : index + 1;
    mostrarSlide(index);
  });

  mostrarSlide(index);
});

document.addEventListener("DOMContentLoaded", () => {
  const inputTelefone = document.getElementById("telefone");

  inputTelefone.addEventListener("input", () => {
    inputTelefone.value = inputTelefone.value.replace(/[^0-9]/g, "");
  });
});


const section = document.querySelector('.proposito-section');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      observer.unobserve(entry.target); // roda só uma vez
    }
  });
}, {
  threshold: 0.2 // quando 20% da section estiver visível
});

observer.observe(section);


