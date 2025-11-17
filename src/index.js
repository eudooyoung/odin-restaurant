import "./styles.css";
import home from "./home.js";
import menu from "./menu.js";
import about from "./about.js";

const content = document.querySelector("#content");
content.appendChild(home);
content.appendChild(menu);
content.appendChild(about);

const homeButton = document.querySelector("button.home");
const menuButton = document.querySelector("button.menu");
const aboutButton = document.querySelector("button.about");

homeButton.addEventListener("click", () => {
  home.style.display = "grid";
  menu.style.display = "none";
  about.style.display = "none";
});

menuButton.addEventListener("click", () => {
  home.style.display = "none";
  menu.style.display = "grid";
  about.style.display = "none";
});

aboutButton.addEventListener("click", () => {
  home.style.display = "none";
  menu.style.display = "none";
  about.style.display = "grid";
});
