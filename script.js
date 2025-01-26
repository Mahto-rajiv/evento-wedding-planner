document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu toggle
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const header = document.querySelector("header");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
    menuToggle.classList.toggle("active");
    header.classList.toggle("menu-open");
  });

  // Close mobile menu when a link is clicked or when clicking outside the menu
  document.addEventListener("click", (e) => {
    if (!header.contains(e.target) || e.target.closest(".nav-links a")) {
      navLinks.classList.remove("show");
      menuToggle.classList.remove("active");
      header.classList.remove("menu-open");
    }
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Form submission
  const contactForm = document.getElementById("contact-form");
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // Placeholder for form submission
    alert("Thank you for your message! We will get back to you soon.");
    contactForm.reset();
  });

  // Newsletter subscription
  const newsletterForm = document.getElementById("newsletter-form");
  newsletterForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // Placeholder for newsletter subscription
    alert("Thank you for subscribing to our newsletter!");
    newsletterForm.reset();
  });

  // Lazy loading images
  const images = document.querySelectorAll('img[loading="lazy"]');
  const imageOptions = {
    threshold: 0,
    rootMargin: "0px 0px 50px 0px",
  };

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.src; // This triggers the image load
        img.onload = () => {
          img.classList.add("loaded");
        };
        img.removeAttribute("loading");
        imageObserver.unobserve(img);
      }
    });
  }, imageOptions);

  images.forEach((img) => imageObserver.observe(img));

  // Scroll-to-top button
  const scrollToTopBtn = document.querySelector(".scroll-to-top");

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
      scrollToTopBtn.classList.add("show");
    } else {
      scrollToTopBtn.classList.remove("show");
    }
  });

  scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
