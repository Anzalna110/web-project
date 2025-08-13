function openModal(button) {
    let modal = document.getElementById("modal");
    let modalImg = document.getElementById("modal-img");
    let img = button.parentElement.querySelector("img");
    modal.style.display = "block";
    modalImg.src = img.src;
}
function closeModal() {
    document.getElementById("modal").style.display = "none";
}
