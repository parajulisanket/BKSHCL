document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-item");
  const faqQuestions = document.querySelectorAll(".faq-question");
  const navLinks = document.querySelectorAll(".faq-nav");
  const faqSections = document.querySelectorAll(".faq-section");

  // Accordion: one open at a time inside each section
  faqQuestions.forEach(function (question) {
    question.addEventListener("click", function () {
      const currentItem = question.closest(".faq-item");
      const currentSection = question.closest(".faq-section");
      const sectionItems = currentSection.querySelectorAll(".faq-item");

      sectionItems.forEach(function (item) {
        if (item !== currentItem) {
          item.classList.remove("active");
        }
      });

      currentItem.classList.toggle("active");
    });
  });

  // Sidebar active link on click
  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      navLinks.forEach(function (nav) {
        nav.classList.remove("active");
      });

      link.classList.add("active");
    });
  });

  // Sidebar active link on scroll
  window.addEventListener("scroll", function () {
    let currentSectionId = "";

    faqSections.forEach(function (section) {
      const sectionTop = section.offsetTop - 150;

      if (window.scrollY >= sectionTop) {
        currentSectionId = section.getAttribute("id");
      }
    });

    navLinks.forEach(function (link) {
      link.classList.remove("active");

      if (link.getAttribute("href") === "#" + currentSectionId) {
        link.classList.add("active");
      }
    });
  });
});
