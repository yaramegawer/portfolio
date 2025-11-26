// Interactive dots: on hover they increase size and opacity only (no mouse-follow)
document.addEventListener("DOMContentLoaded", function () {
  const dots = document.querySelectorAll(".dot");

  dots.forEach((dot) => {
    dot.addEventListener("mouseenter", function () {
      // add a hovering class that the CSS will use to scale/brighten the dot
      this.classList.add("hovering");
      // ensure any inline transform is cleared so CSS transform takes effect
      this.style.transform = "";
    });

    dot.addEventListener("mouseleave", function () {
      this.classList.remove("hovering");
      // clear inline style on leave
      this.style.transform = "";
    });
  });
});
