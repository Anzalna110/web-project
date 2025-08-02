const scrollBtn = document.getElementById("scrollTopBtn");
window.onscroll = function () {
  scrollBtn.style.display = window.scrollY > 200 ? "block" : "none";
};
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
function scrollToContact() {
  document.querySelector("footer").scrollIntoView({ behavior: "smooth" });
}
function openModal(serviceName) {
  document.getElementById("modal").style.display = "flex";
  document.getElementById("modalTitle").textContent = serviceName;
}
function closeModal() {
  document.getElementById("modal").style.display = "none";
}
