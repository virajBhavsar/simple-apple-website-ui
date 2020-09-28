const ham = document.querySelector(".ham");
const hamdiv = document.querySelectorAll(".ham div");
const links = document.querySelector(".links");
const para = document.querySelectorAll(".para");
const linksLi = document.querySelectorAll("li");

for (let i = 0; i <= 5; i++) {
  linksLi[i].style.transition = `all 1.5s ease ${i / 6}s`;
}
ham.addEventListener("click", (toggle) => {
  hamdiv[0].classList.toggle("down");
  hamdiv[1].classList.toggle("up");
  links.classList.toggle("display-links");
  for (let i = 0; i <= 5; i++) {
    linksLi[i].classList.toggle("appear1");
  }
});

const x = [544, 1238, 2100, 2800];

document.addEventListener("scroll", (e) => {
  for (let i = 0; i < 4; i++) {
    if (window.pageYOffset >= x[i]) {
      para[i].classList.add("appear");
    } else {
      para[i].classList.remove("appear");
    }
  }
});
