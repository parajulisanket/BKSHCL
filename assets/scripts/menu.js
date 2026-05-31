// menu script
const searchToggle = document.getElementById("searchToggle");
const searchBox = document.getElementById("searchBox");
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const mobileMenuClose = document.getElementById("mobileMenuClose");

const mobileAboutToggle = document.getElementById("mobileAboutToggle");
const mobileAboutDropdown = document.getElementById("mobileAboutDropdown");
const mobileAboutIcon = document.getElementById("mobileAboutIcon");

// Desktop search open/close
if (searchToggle && searchBox) {
  searchToggle.addEventListener("click", function () {
    const isOpen = searchBox.classList.contains("opacity-100");

    if (isOpen) {
      searchBox.classList.remove(
        "opacity-100",
        "scale-100",
        "pointer-events-auto",
      );
      searchBox.classList.add("opacity-0", "scale-95", "pointer-events-none");
    } else {
      searchBox.classList.remove(
        "hidden",
        "opacity-0",
        "scale-95",
        "pointer-events-none",
      );
      searchBox.classList.add(
        "opacity-100",
        "scale-100",
        "pointer-events-auto",
      );

      const input = searchBox.querySelector("input");
      if (input) input.focus();
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

    if (mobileAboutDropdown && mobileAboutIcon) {
      mobileAboutDropdown.style.maxHeight = "0px";
      mobileAboutDropdown.classList.remove("opacity-100");
      mobileAboutDropdown.classList.add("opacity-0");
      mobileAboutIcon.classList.remove("rotate-180");
    }
  }

  mobileMenuBtn.addEventListener("click", openMobileMenu);

  if (mobileMenuClose) {
    mobileMenuClose.addEventListener("click", closeMobileMenu);
  }
}

// Mobile about dropdown smooth open/close
if (mobileAboutToggle && mobileAboutDropdown && mobileAboutIcon) {
  mobileAboutToggle.addEventListener("click", function () {
    const isOpen = mobileAboutDropdown.style.maxHeight !== "0px";

    if (isOpen) {
      mobileAboutDropdown.style.maxHeight = "0px";
      mobileAboutDropdown.classList.remove("opacity-100");
      mobileAboutDropdown.classList.add("opacity-0");
      mobileAboutIcon.classList.remove("rotate-180");
    } else {
      mobileAboutDropdown.style.maxHeight =
        mobileAboutDropdown.scrollHeight + "px";

      mobileAboutDropdown.classList.remove("opacity-0");
      mobileAboutDropdown.classList.add("opacity-100");
      mobileAboutIcon.classList.add("rotate-180");

      setTimeout(function () {
        if (mobileMenu.style.maxHeight !== "0px") {
          mobileMenu.style.maxHeight = mobileMenu.scrollHeight + "px";
        }
      }, 300);
    }
  });
}
