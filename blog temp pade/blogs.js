const scrollTopBtn = document.getElementById('scrollTopBtn');
window.onscroll = () => {
  scrollTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
};

scrollTopBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const likeBtn = document.getElementById('likeBtn');
const likeCount = document.getElementById('likeCount');
let count = 0;
likeBtn.addEventListener('click', () => {
  count++;
  likeCount.textContent = count;
});
