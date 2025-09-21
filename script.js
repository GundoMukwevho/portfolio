// Highlight current page in nav
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("nav ul li a");
  const currentPage = window.location.pathname.split("/").pop();

  navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
});

// Certificate modal logic
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("cert-modal");
  const modalImg = document.getElementById("modal-img");
  const captionText = document.getElementById("caption");
  const certImgs = document.querySelectorAll(".cert-img");
  const closeBtn = document.getElementsByClassName("close")[0];

  if (modal && modalImg && captionText && certImgs.length > 0) {
    certImgs.forEach(img => {
      img.addEventListener("click", () => {
        modal.style.display = "block";
        modalImg.src = img.src;
        captionText.textContent = img.alt || "";
      });
    });

    if (closeBtn) {
      closeBtn.addEventListener("click", () => (modal.style.display = "none"));
    }
    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.style.display = "none";
    });
  }
});


closeBtn.onclick = function() {
  modal.style.display = "none";
};

// Close modal when clicking outside the image
modal.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};



// Navbar shrink effect
document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header") || document.querySelector("nav");

  if (header) {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        header.classList.add("shrink");
      } else {
        header.classList.remove("shrink");
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once on load
  }
});


document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(".slide-in-left, .slide-in-right, .slide-in-bottom");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = "running";
      }
    });
  }, { threshold: 0.2 });

  animatedElements.forEach(el => {
    el.style.animationPlayState = "paused"; // pause until in view
    observer.observe(el);
  });
});

