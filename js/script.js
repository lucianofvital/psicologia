document.addEventListener("DOMContentLoaded", function () {
  // Initialize AOS
  AOS.init({
    duration: 1000,
    once: true,
    offset: 100,
  });

  // Smooth scroll for the arrow button
  document.getElementById("scrollDown").addEventListener("click", function (e) {
    e.preventDefault();
    const aboutSection = document.getElementById("about");
    aboutSection.scrollIntoView({ behavior: "smooth" });
  });
});
