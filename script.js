document.addEventListener("DOMContentLoaded", () => {
  // Initialize Lucide icons
  lucide.createIcons();

  // Mobile menu toggle
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const header = document.querySelector("header");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
    menuToggle.classList.toggle("active");
    header.classList.toggle("menu-open");

    // Prevent body scroll when menu is open
    document.body.style.overflow = navLinks.classList.contains("show")
      ? "hidden"
      : "";
  });

  // Close mobile menu when a link is clicked
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("show");
      menuToggle.classList.remove("active");
      header.classList.remove("menu-open");
      document.body.style.overflow = "";
    });
  });

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!header.contains(e.target) && navLinks.classList.contains("show")) {
      navLinks.classList.remove("show");
      menuToggle.classList.remove("active");
      header.classList.remove("menu-open");
      document.body.style.overflow = "";
    }
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");

      if (targetId && targetId !== "#") {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    });
  });

  // Form submission
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thank you for your message! We will get back to you soon.");
      contactForm.reset();
    });
  }

  // Scroll-to-top button
  const scrollToTopBtn = document.querySelector(".scroll-to-top");

  window.addEventListener("scroll", () => {
    scrollToTopBtn.classList.toggle("show", window.pageYOffset > 100);
  });

  scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Intersection Observer for animations
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe elements with animation classes
  document
    .querySelectorAll(".fade-in, .slide-in-left, .slide-in-right")
    .forEach((el) => {
      observer.observe(el);
    });

  const images = [
    "images/GalleryImages/image1.jpg",
    "images/GalleryImages/image2.jpg",
    "images/GalleryImages/image3.jpg",
    "images/GalleryImages/image4.jpg",
    "images/GalleryImages/image5.jpg",
    "images/GalleryImages/image6.jpg",
    "images/GalleryImages/image7.jpg",
    "images/GalleryImages/image8.jpg",
    "images/GalleryImages/image9.jpg",
    "images/GalleryImages/image10.jpg",
    "images/GalleryImages/image11.jpg",
    "images/GalleryImages/image12.jpg",
    "images/GalleryImages/image13.jpg",
  ];

  const galleryGrid = document.querySelector(".gallery-grid");

  images.forEach(function (imageSrc) {
    const img = document.createElement("img");
    img.src = imageSrc;
    img.alt = "Event Image";
    img.classList.add("gallery-img");
    galleryGrid.appendChild(img);
  });
});
