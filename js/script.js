// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

document
  .getElementById("hamburger-menu")
  .addEventListener("click", function (event) {
    event.preventDefault();
    // agar saat klik humbureger-menu tak terlempar ke atas
  });
