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
});
