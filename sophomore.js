// Sophomore Year Gallery Interactions

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

  // Featured projects rotation
  let currentFeatured = 0;
  const featuredCards = document.querySelectorAll('.featured-card');
  const totalFeatured = featuredCards.length;

  function rotateFeatured() {
    // Remove active class from current card
    featuredCards[currentFeatured].classList.remove('active');

    // Move to next card
    currentFeatured = (currentFeatured + 1) % totalFeatured;

    // Add active class to new card
    featuredCards[currentFeatured].classList.add('active');
  }

  // Start rotation every 4 seconds
  if (featuredCards.length > 0) {
    setInterval(rotateFeatured, 4000);
  }

  // Add click handlers to featured cards
  featuredCards.forEach(card => {
    card.addEventListener('click', function() {
      const link = this.querySelector('.featured-link');
      if (link && link.href !== '#') {
        window.open(link.href, '_blank');
      }
    });
  });
});
