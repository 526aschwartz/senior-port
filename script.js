function showScreen(name) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('screen-' + name).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function startIntro() {
  const audio = document.getElementById('intro-audio');
  audio.play().catch(e => console.log('Audio play failed:', e)); // Handle autoplay restrictions
  setTimeout(() => {
    showScreen('profiles');
  }, 2000); // Match animation duration
}

function initProjectButtons() {
  document.querySelectorAll('.proj-card').forEach(card => {
    if (card.querySelector('.proj-action-button')) return;
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'proj-action-button';
    button.textContent = 'View Details';
    button.addEventListener('click', () => showProjectInfo(card));
    const body = card.querySelector('.proj-body');
    if (body) body.appendChild(button);
  });
}

function showProjectInfo(card) {
  const title = card.querySelector('.proj-title')?.textContent || 'Project';
  const link = card.dataset.link || '#';
  const description = card.dataset.description || 'Add a description for this website here. This can include the purpose, tech used, and what makes the project special.';
  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-description').textContent = description;
  const modalLink = document.getElementById('modal-link');
  modalLink.href = link;
  modalLink.textContent = link === '#' ? 'Link coming soon' : 'Visit Website';
  document.getElementById('project-modal').classList.add('open');
}

function closeProjectInfo() {
  document.getElementById('project-modal').classList.remove('open');
}

window.addEventListener('DOMContentLoaded', () => {
  initProjectButtons();
  startIntro();
});
