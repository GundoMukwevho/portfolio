// Run after DOM loads
document.addEventListener("DOMContentLoaded", () => {
  // Highlight current page
  const navLinks = document.querySelectorAll("nav ul li a");
  const currentPage = window.location.pathname.split("/").pop();
  navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });

  // Skills toggle
  const toggleButton = document.getElementById("toggle-skills");
  const views = document.querySelectorAll(".skills-view");
  if (toggleButton && views.length > 0) {
    toggleButton.addEventListener("click", () => {
      views.forEach(v => v.classList.toggle("active"));
    });
  }

  // Certificate modal
  const modal = document.getElementById("cert-modal");
  const modalImg = document.getElementById("modal-img");
  const captionText = document.getElementById("caption");
  const certImgs = document.querySelectorAll(".cert-img");
  const closeBtn = document.querySelector(".close");

  if (modal && modalImg && captionText && certImgs.length > 0) {
    certImgs.forEach(img => {
      img.addEventListener("click", () => {
        modal.style.display = "block";
        modalImg.src = img.src;
        captionText.textContent = img.alt || "";
      });
    });
    if (closeBtn) closeBtn.addEventListener("click", () => (modal.style.display = "none"));
    modal.addEventListener("click", e => { if (e.target === modal) modal.style.display = "none"; });
  }

  // Navbar shrink effect
  const header = document.querySelector("header") || document.querySelector("nav");
  if (header) {
    const handleScroll = () => header.classList.toggle("shrink", window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
  }

  // Animate elements on scroll
  const animatedElements = document.querySelectorAll(".slide-in-left, .slide-in-right, .slide-in-bottom");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.style.animationPlayState = "running";
    });
  }, { threshold: 0.2 });
  animatedElements.forEach(el => observer.observe(el));
});
