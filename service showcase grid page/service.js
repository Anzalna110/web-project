// Scroll Animation
const cards = document.querySelectorAll('.card');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.2
});

cards.forEach(card => observer.observe(card));

// Modal Functionality
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modalTitle');
const closeBtn = document.querySelector('.close-btn');

document.querySelectorAll('.learn-btn').forEach(button => {
  button.addEventListener('click', () => {
    const service = button.dataset.service;
    modalTitle.textContent = service;
    modal.style.display = 'flex';
  });
});

closeBtn.onclick = () => {
  modal.style.display = 'none';
};

window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
};
