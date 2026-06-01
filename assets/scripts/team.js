document.addEventListener("DOMContentLoaded", function () {
  const teamTabs = document.querySelectorAll(".team-tab");
  const teamContents = document.querySelectorAll(".team-content");

  teamTabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      const selectedTab = tab.getAttribute("data-tab");

      teamTabs.forEach(function (btn) {
        btn.classList.remove(
          "active-team-tab",
          "bg-[var(--color-primary)]",
          "text-white",
        );

        btn.classList.add("text-[var(--color-title)]");
      });

      tab.classList.add(
        "active-team-tab",
        "bg-[var(--color-primary)]",
        "text-white",
      );

      tab.classList.remove("text-[var(--color-title)]");

      teamContents.forEach(function (content) {
        if (content.getAttribute("data-content") === selectedTab) {
          content.classList.remove("hidden");
          content.classList.add("grid");
        } else {
          content.classList.add("hidden");
          content.classList.remove("grid");
        }
      });
    });
  });
});
