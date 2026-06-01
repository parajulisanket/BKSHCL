// Get the "Back to Top" button
const backToTopButton = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 700) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});
backToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Tab functionality for news cards
const tabButtons = document.querySelectorAll(".tab-btn");
const newsCards = document.querySelectorAll(".news-card");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedTab = button.getAttribute("data-tab");

    tabButtons.forEach((btn) => {
      btn.classList.remove(
        "text-white",
        "bg-[#047dd4]",
        "shadow-sm",
        "font-bold",
      );
      btn.classList.add("text-gray-600", "font-semibold");
    });

    button.classList.remove("text-gray-600", "font-semibold");
    button.classList.add(
      "text-white",
      "bg-[#047dd4]",
      "shadow-sm",
      "font-bold",
    );

    newsCards.forEach((card) => {
      const cardCategory = card.getAttribute("data-category");

      if (selectedTab === "all" || selectedTab === cardCategory) {
        card.classList.remove("hidden");
      } else {
        card.classList.add("hidden");
      }
    });
  });
});

// pop up modal in message box
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("messageModal");
  const modalBox = document.getElementById("messageModalBox");
  const closeBtn = document.getElementById("closeMessageModal");

  const modalImage = document.getElementById("modalMessageImage");
  const modalName = document.getElementById("modalMessageName");
  const modalPosition = document.getElementById("modalMessagePosition");
  const modalText = document.getElementById("modalMessageText");

  const buttons = document.querySelectorAll(".open-message-modal");

  if (
    !modal ||
    !modalBox ||
    !closeBtn ||
    !modalImage ||
    !modalName ||
    !modalPosition ||
    !modalText ||
    !buttons.length
  ) {
    return;
  }

  function openModal(button) {
    const name = button.getAttribute("data-name") || "";
    const position = button.getAttribute("data-position") || "";
    const image = button.getAttribute("data-image") || "";
    const message = button.getAttribute("data-message") || "";

    modalImage.src = image;
    modalImage.alt = name;
    modalName.textContent = name;
    modalPosition.textContent = position;
    modalText.textContent = message;

    modal.classList.remove("hidden");
    modal.classList.add("flex");
    document.body.classList.add("overflow-hidden");

    // Reset right-side scroll content to top
    const scrollContent = modal.querySelector(".overflow-y-auto");
    if (scrollContent) {
      scrollContent.scrollTop = 0;
    }
  }

  function closeModal() {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
    document.body.classList.remove("overflow-hidden");

    // Clear image after closing
    modalImage.src = "";
    modalImage.alt = "";
  }

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      openModal(button);
    });
  });

  closeBtn.addEventListener("click", closeModal);

  // Close when clicking outside modal box
  modal.addEventListener("click", function (event) {
    if (!modalBox.contains(event.target)) {
      closeModal();
    }
  });

  // Prevent inside click from closing modal
  modalBox.addEventListener("click", function (event) {
    event.stopPropagation();
  });

  // Close with ESC key
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && !modal.classList.contains("hidden")) {
      closeModal();
    }
  });
});
