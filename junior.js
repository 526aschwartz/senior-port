// Junior Year Gallery Interactions

document.addEventListener('DOMContentLoaded', function() {
  // Add click handlers to gallery items
  document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', function() {
      const link = this.querySelector('.gallery-link');
      if (link && link.href !== '#') {
        window.open(link.href, '_blank');
      }
    });
  });

  // Carousel rotation for the hero
  const slides = Array.from(document.querySelectorAll('.carousel-slide'));
  const prevBtn = document.querySelector('.carousel-control.prev');
  const nextBtn = document.querySelector('.carousel-control.next');
  let current = 0;

  function showSlide(index) {
    slides.forEach(s => s.classList.remove('active','prev','next'));
    const total = slides.length;
    const i = ((index % total) + total) % total;
    const prevIndex = (i - 1 + total) % total;
    const nextIndex = (i + 1) % total;
    slides[prevIndex] && slides[prevIndex].classList.add('prev');
    slides[i] && slides[i].classList.add('active');
    slides[nextIndex] && slides[nextIndex].classList.add('next');
  }

  function nextSlide() { current = (current + 1) % slides.length; showSlide(current); }
  function prevSlide() { current = (current - 1 + slides.length) % slides.length; showSlide(current); }

  if (nextBtn) nextBtn.addEventListener('click', () => { nextSlide(); resetTimer(); });
  if (prevBtn) prevBtn.addEventListener('click', () => { prevSlide(); resetTimer(); });

  let timer = null;
  function startTimer() { if (slides.length) timer = setInterval(nextSlide, 4500); }
  function resetTimer() { clearInterval(timer); startTimer(); }

  if (slides.length) {
    showSlide(0);
    startTimer();
  }

  // Click handlers for CTA in carousel
  document.querySelectorAll('.carousel-cta').forEach(cta => {
    cta.addEventListener('click', function(e){ e.preventDefault(); window.open(this.href || '#', '_blank'); });
  });

  // Pause on hover, keyboard, and basic touch swipe
  const carouselEl = document.querySelector('.hero-carousel');
  if (carouselEl) {
    carouselEl.addEventListener('mouseenter', () => { clearInterval(timer); });
    carouselEl.addEventListener('mouseleave', () => { resetTimer(); });

    let touchStartX = 0;
    carouselEl.addEventListener('touchstart', (e) => { touchStartX = e.touches[0].clientX; }, {passive:true});
    carouselEl.addEventListener('touchend', (e) => {
      const dx = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(dx) > 40) {
        if (dx < 0) nextSlide(); else prevSlide();
        resetTimer();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (!slides.length) return;
    if (e.key === 'ArrowRight') { nextSlide(); resetTimer(); }
    if (e.key === 'ArrowLeft') { prevSlide(); resetTimer(); }
  });
});
