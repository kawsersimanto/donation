const header = document.querySelector(".main-header");

document.addEventListener("scroll", handleScroll);

function handleScroll() {
  if (scrollY > 20) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
}
