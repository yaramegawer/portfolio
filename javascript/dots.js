// Interactive dots with simple hover effect
document.addEventListener("DOMContentLoaded", function () {
  const dots = document.querySelectorAll(".dot");

  dots.forEach((dot) => {
    dot.addEventListener("mouseenter", function () {
      this.classList.add("hovering");
    });

    dot.addEventListener("mouseleave", function () {
      this.classList.remove("hovering");
    });
  });
});
