import { home_page_content } from "./pages/home_page.js";
import { about_page_content } from "./pages/about_page.js";

const home_button = document.getElementById("home-button");
const about_button = document.getElementById("about-button");

const container = document.getElementById("container");

container.appendChild(home_page_content);

home_button.addEventListener("click", () => {
    container.innerHTML = "";
    container.appendChild(home_page_content);
});
about_button.addEventListener("click", () => {
    container.innerHTML = "";
    container.appendChild(about_page_content);
});
