const menuBtn = document.querySelector(".header_content > button.hide_pc");
const nav = document.querySelector("header nav");
const closeBtn = document.querySelector("nav button");

menuBtn.addEventListener("click", () => {
  nav.style.display = "flex";
  nav.classList.remove("hide_m");
  menuBtn.style.display = "none";
});

closeBtn.addEventListener("click", () => {
  nav.style.display = "none";
  nav.classList.add("hide_m");
  menuBtn.style.display = "inline";
});
