// menu script
const searchToggle = document.getElementById("searchToggle");
const searchBox = document.getElementById("searchBox");
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileMenu = document.getElementById("mobileMenu");

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

// Mobile hamburger smooth open/close
if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener("click", function () {
    const isOpen = mobileMenu.style.maxHeight !== "0px";

    if (isOpen) {
      mobileMenu.style.maxHeight = "0px";
      mobileMenu.classList.remove("opacity-100");
      mobileMenu.classList.add("opacity-0");

      mobileMenuBtn.innerHTML = `<i class="fa-solid fa-bars"></i>`;
    } else {
      mobileMenu.style.maxHeight = mobileMenu.scrollHeight + "px";
      mobileMenu.classList.remove("opacity-0");
      mobileMenu.classList.add("opacity-100");

      mobileMenuBtn.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
    }
  });
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
