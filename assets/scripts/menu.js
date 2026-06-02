// menu script
const searchToggle = document.getElementById("searchToggle");
const searchBox = document.getElementById("searchBox");
const searchOverlay = document.getElementById("searchOverlay");
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const mobileMenuClose = document.getElementById("mobileMenuClose");

// Desktop search open/close
if (searchToggle && searchBox && searchOverlay) {
  function openSearchBox() {
    searchBox.classList.remove(
      "hidden",
      "opacity-0",
      "scale-95",
      "pointer-events-none",
    );
    searchBox.classList.add("opacity-100", "scale-100", "pointer-events-auto");

    searchOverlay.classList.remove(
      "hidden",
      "opacity-0",
      "pointer-events-none",
    );
    searchOverlay.classList.add("opacity-100", "pointer-events-auto");

    const input = searchBox.querySelector("input");
    if (input) input.focus();
  }

  function closeSearchBox() {
    searchBox.classList.remove(
      "opacity-100",
      "scale-100",
      "pointer-events-auto",
    );
    searchBox.classList.add("opacity-0", "scale-95", "pointer-events-none");

    searchOverlay.classList.remove("opacity-100", "pointer-events-auto");
    searchOverlay.classList.add("opacity-0", "pointer-events-none");
  }

  searchToggle.addEventListener("click", function (event) {
    event.stopPropagation();

    const isOpen = searchBox.classList.contains("opacity-100");

    if (isOpen) {
      closeSearchBox();
    } else {
      openSearchBox();
    }
  });

  // Keep open when clicking inside search box
  searchBox.addEventListener("click", function (event) {
    event.stopPropagation();
  });

  // Click overlay to close
  searchOverlay.addEventListener("click", function () {
    closeSearchBox();
  });

  // Close on ESC key
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeSearchBox();
    }
  });
}

// Mobile full-screen overlay menu open/close
if (mobileMenuBtn && mobileMenu) {
  function openMobileMenu() {
    mobileMenu.classList.remove(
      "opacity-0",
      "pointer-events-none",
      "-translate-y-full",
    );

    mobileMenu.classList.add(
      "opacity-100",
      "pointer-events-auto",
      "translate-y-0",
    );

    document.body.classList.add("overflow-hidden");
  }

  function closeMobileMenu() {
    mobileMenu.classList.remove(
      "opacity-100",
      "pointer-events-auto",
      "translate-y-0",
    );

    mobileMenu.classList.add(
      "opacity-0",
      "pointer-events-none",
      "-translate-y-full",
    );

    document.body.classList.remove("overflow-hidden");

    // Automatically reset ALL generic mobile dropdowns when mobile menu closes
    document.querySelectorAll(".mobile-dropdown").forEach(function (dropdown) {
      dropdown.style.maxHeight = "0px";
      dropdown.classList.remove("opacity-100");
      dropdown.classList.add("opacity-0");
    });

    document.querySelectorAll(".mobile-dropdown-icon").forEach(function (icon) {
      icon.classList.remove("rotate-180");
    });
  }

  mobileMenuBtn.addEventListener("click", openMobileMenu);

  if (mobileMenuClose) {
    mobileMenuClose.addEventListener("click", closeMobileMenu);
  }

  // Close mobile menu on ESC key
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeMobileMenu();
    }
  });
}

// Generic mobile dropdown script
document.querySelectorAll(".mobile-dropdown-toggle").forEach(function (toggle) {
  toggle.addEventListener("click", function () {
    const container = this.closest(".mobile-dropdown-container");
    if (!container) return;

    const dropdown = container.querySelector(".mobile-dropdown");
    const icon = container.querySelector(".mobile-dropdown-icon");

    if (!dropdown) return;

    const isOpen =
      dropdown.style.maxHeight && dropdown.style.maxHeight !== "0px";

    if (isOpen) {
      dropdown.style.maxHeight = "0px";
      dropdown.classList.remove("opacity-100");
      dropdown.classList.add("opacity-0");

      if (icon) {
        icon.classList.remove("rotate-180");
      }
    } else {
      dropdown.style.maxHeight = dropdown.scrollHeight + "px";
      dropdown.classList.remove("opacity-0");
      dropdown.classList.add("opacity-100");

      if (icon) {
        icon.classList.add("rotate-180");
      }
    }
  });
});
