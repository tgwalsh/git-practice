//Navburger
document.addEventListener("DOMContentLoaded", () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  // Add a click event on each of them
  $navbarBurgers.forEach((el) => {
    el.addEventListener("click", () => {
      // Get the target from the "data-target" attribute
      const target = el.dataset.target;
      const $target = document.getElementById(target);

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle("is-active");
      $target.classList.toggle("is-active");
    });
  });
});

//Loop for portfolio rows and tiles to add classes

let boxes = document.getElementsByClassName("box");
let ancestor = document.getElementsByClassName("is-ancestor");
function updatePortfolioClass() {
  for (let i = 0; i < ancestor.length; i++) {
    ancestor[i].classList.add(i % 2 === 0 ? "rowEven" : "rowOdd");
  }
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].classList.add(i % 2 === 0 ? "even" : "odd");
  }
}
window.onload = updatePortfolioClass;
