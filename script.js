<script>
  const slides = document.querySelectorAll('.slide');
  const prev = document.querySelector('.prev');
  const next = document.querySelector('.next');
  let index = 0;

  function mostrarSlide(i) {
    slides.forEach((slide, j) => {
      slide.classList.remove('ativo');
      if (j === i) slide.classList.add('ativo');
    });
  }

  prev.addEventListener('click', () => {
    index = (index === 0) ? slides.length - 1 : index - 1;
    mostrarSlide(index);
  });

  next.addEventListener('click', () => {
    index = (index === slides.length - 1) ? 0 : index + 1;
    mostrarSlide(index);
  });

  // Iniciar com o primeiro slide
  mostrarSlide(index);
</script>
