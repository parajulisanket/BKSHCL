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
