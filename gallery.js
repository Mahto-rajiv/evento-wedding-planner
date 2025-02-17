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

  const videos = [
    "https://www.youtube.com/embed/video1",
    "https://www.youtube.com/embed/video2",
    "https://www.youtube.com/embed/video3",
    "https://www.youtube.com/embed/video4",
  ];

  // Load all images
  const galleryGrid = document.querySelector(".gallery-grid.full");
  images.forEach(function (imageSrc) {
    const img = document.createElement("img");
    img.src = imageSrc;
    img.alt = "Event Image";
    img.classList.add("gallery-img");
    galleryGrid.appendChild(img);
  });

  // Load all videos
  const videoGrid = document.querySelector(".video-grid");
  videos.forEach(function (videoUrl) {
    const videoWrapper = document.createElement("div");
    videoWrapper.className = "video-item";
    videoWrapper.innerHTML = `
            <iframe
                src="${videoUrl}"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            ></iframe>
        `;
    videoGrid.appendChild(videoWrapper);
  });

  // Tab switching
  const tabs = document.querySelectorAll(".gallery-tab");
  const sections = document.querySelectorAll(".gallery-section");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.dataset.tab;

      // Update active tab
      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");

      // Update active section
      sections.forEach((section) => {
        section.classList.remove("active");
        if (section.id === `${target}-section`) {
          section.classList.add("active");
        }
      });
    });
  });
});
