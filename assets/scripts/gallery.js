// gallery litebox and tab js
document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".gallery-filter");
  const galleryItems = document.querySelectorAll(".gallery-item");

  const lightbox = document.getElementById("galleryLightbox");
  const lightboxImage = document.getElementById("lightboxImage");
  const closeLightbox = document.getElementById("closeLightbox");
  const prevImage = document.getElementById("prevImage");
  const nextImage = document.getElementById("nextImage");

  if (
    !filterButtons.length ||
    !galleryItems.length ||
    !lightbox ||
    !lightboxImage ||
    !closeLightbox ||
    !prevImage ||
    !nextImage
  ) {
    return;
  }

  let visibleItems = Array.from(galleryItems);
  let currentIndex = 0;

  // Tabs
  filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const filterValue = button.getAttribute("data-filter");

      filterButtons.forEach(function (btn) {
        btn.classList.remove("bg-[#047dd4]", "text-white", "border-[#047dd4]");
        btn.classList.add("text-gray-800", "border-gray-400");
      });

      button.classList.add("bg-[#047dd4]", "text-white", "border-[#047dd4]");
      button.classList.remove("text-gray-800", "border-gray-400");

      galleryItems.forEach(function (item) {
        const itemCategory = item.getAttribute("data-category");

        if (filterValue === "all" || itemCategory === filterValue) {
          item.style.display = "";
        } else {
          item.style.display = "none";
        }
      });

      visibleItems = Array.from(galleryItems).filter(function (item) {
        return item.style.display !== "none";
      });
    });
  });

  // Open lightbox
  galleryItems.forEach(function (item) {
    item.addEventListener("click", function () {
      visibleItems = Array.from(galleryItems).filter(function (galleryItem) {
        return galleryItem.style.display !== "none";
      });

      currentIndex = visibleItems.indexOf(item);
      openLightbox(currentIndex);
    });
  });

  function openLightbox(index) {
    if (!visibleItems[index]) return;

    const imageSrc = visibleItems[index].getAttribute("data-img");

    lightboxImage.src = imageSrc;
    lightbox.classList.remove("hidden");
    lightbox.classList.add("flex");
    document.body.style.overflow = "hidden";
  }

  function closeGalleryLightbox() {
    lightbox.classList.add("hidden");
    lightbox.classList.remove("flex");
    lightboxImage.src = "";
    document.body.style.overflow = "";
  }

  function showNextImage() {
    if (!visibleItems.length) return;

    currentIndex = currentIndex + 1;

    if (currentIndex >= visibleItems.length) {
      currentIndex = 0;
    }

    openLightbox(currentIndex);
  }

  function showPrevImage() {
    if (!visibleItems.length) return;

    currentIndex = currentIndex - 1;

    if (currentIndex < 0) {
      currentIndex = visibleItems.length - 1;
    }

    openLightbox(currentIndex);
  }

  closeLightbox.addEventListener("click", closeGalleryLightbox);
  nextImage.addEventListener("click", showNextImage);
  prevImage.addEventListener("click", showPrevImage);

  lightbox.addEventListener("click", function (event) {
    if (event.target === lightbox) {
      closeGalleryLightbox();
    }
  });

  document.addEventListener("keydown", function (event) {
    if (lightbox.classList.contains("hidden")) return;

    if (event.key === "Escape") {
      closeGalleryLightbox();
    }

    if (event.key === "ArrowRight") {
      showNextImage();
    }

    if (event.key === "ArrowLeft") {
      showPrevImage();
    }
  });
});
