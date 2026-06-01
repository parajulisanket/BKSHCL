document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("documentSearchInput");
  const filterBtn = document.getElementById("documentFilterBtn");
  const documentCards = document.querySelectorAll(".document-card");
  const noResult = document.getElementById("noDocumentResult");

  if (!searchInput || !filterBtn || !documentCards.length || !noResult) {
    return;
  }

  function searchDocuments() {
    const searchValue = searchInput.value.toLowerCase().trim();
    let visibleCount = 0;

    documentCards.forEach(function (card) {
      const cardText = card.textContent.toLowerCase();
      const pdfLink = card.querySelector("a")?.getAttribute("href") || "";
      const searchableText = cardText + " " + pdfLink.toLowerCase();

      if (searchableText.includes(searchValue)) {
        card.classList.remove("hidden");
        visibleCount++;
      } else {
        card.classList.add("hidden");
      }
    });

    if (visibleCount === 0) {
      noResult.classList.remove("hidden");
    } else {
      noResult.classList.add("hidden");
    }
  }

  searchInput.addEventListener("input", searchDocuments);

  filterBtn.addEventListener("click", function () {
    searchDocuments();
  });
});
