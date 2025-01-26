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
    if (navLinks.classList.contains("show")) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
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
    if (!header.contains(e.target)) {
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

      // Skip if href is "#" or empty
      if (!targetId || targetId === "#") {
        return;
      }

      e.preventDefault();
      const targetElement = document.querySelector(targetId);

      // Check if target element exists
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
        });
      }
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
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      // Placeholder for newsletter subscription
      alert("Thank you for subscribing to our newsletter!");
      newsletterForm.reset();
    });
  }

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

  // Add intersection observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // Stop observing once animated
      }
    });
  }, observerOptions);

  // Observe all elements with animate-on-scroll class
  document.querySelectorAll(".animate-on-scroll").forEach((element) => {
    observer.observe(element);
  });

  // Add smooth hover effect for service items
  const serviceItems = document.querySelectorAll(".service-item");
  serviceItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      item.style.transform = "translateY(-10px)";
    });
    item.addEventListener("mouseleave", () => {
      item.style.transform = "translateY(0)";
    });
  });

  // Add smooth hover effect for gallery images
  const galleryImages = document.querySelectorAll(".gallery-grid img");
  galleryImages.forEach((img) => {
    img.addEventListener("mouseenter", () => {
      img.style.transform = "scale(1.05)";
    });
    img.addEventListener("mouseleave", () => {
      img.style.transform = "scale(1)";
    });
  });

  // Add hover animation to menu items
  const menuItems = document.querySelectorAll(".nav-links a");
  menuItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      item.style.animation = "linkHover 0.5s ease";
    });
    item.addEventListener("animationend", () => {
      item.style.animation = "";
    });
  });
});
