/**
 * Carrossel de Depoimentos
 * -------------------------
 * Este script implementa a navegação entre slides de depoimentos usando botões "anterior" e "próximo".
 * A classe 'ativo' é usada para exibir o slide atual.
 * Quando o DOM estiver completamente carregado, o primeiro slide é mostrado por padrão.
 */

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


const sections = document.querySelectorAll('.proposito-section, .depoimentos');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.2
});

sections.forEach(section => {
  observer.observe(section);
});


// Animação dos cards de serviço ao entrar na tela

  const cardsServico = document.querySelectorAll('.card-servico');

  const observerCards = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        cardsServico.forEach((card, i) => {
          setTimeout(() => {
            card.classList.add('active');
          }, i * 200);
        });
        observerCards.disconnect();
      }
    });
  }, {
    threshold: 0.2
  });

  cardsServico.forEach(card => observerCards.observe(card));


  
  document.addEventListener("DOMContentLoaded", () => {
    const elementosParaAnimar = document.querySelectorAll(".box, .quote-box");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-left");
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.2,
    });

    elementosParaAnimar.forEach(el => observer.observe(el));
  });

