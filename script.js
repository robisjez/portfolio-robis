// Smooth scrolling effect for navigation links
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.nav-link');

  for (let link of navLinks) {
    link.addEventListener('click', smoothScroll);
  }

  function smoothScroll(event) {
    event.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: 'smooth'
    });
  }
});

// Image Modal functionality
function openModal(imgElement) {
  const modal = document.getElementById('imageModal');
  const modalImage = document.getElementById('modalImage');
  modalImage.src = imgElement.src;
  modal.style.display = 'block';
}

function closeModal() {
  const modal = document.getElementById('imageModal');
  modal.style.display = 'none';
}
