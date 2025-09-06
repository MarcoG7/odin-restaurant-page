import { home_page_content, view_menu_button } from "./pages/home_page.js";
import { about_page_content } from "./pages/about_page.js";
import { menu_page_content } from "./pages/menu_page.js";
import { hours_page_content } from "./pages/hours_page.js";
import { contact_page_content } from "./pages/contact_page.js";

import "./styles/main.css";
import "./styles/header.css";
import "./styles/home_page.css";
import "./styles/about_page.css";
import "./styles/menu_page.css";

const home_button = document.getElementById("home-button");
const about_button = document.getElementById("about-button");
const menu_button = document.getElementById("menu-button");
const hours_button = document.getElementById("hours-button");
const contact_button = document.getElementById("contact-button");

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

menu_button.addEventListener("click", () => {
    container.innerHTML = "";
    container.appendChild(menu_page_content);
});

hours_button.addEventListener("click", () => {
    container.innerHTML = "";
    container.appendChild(hours_page_content);
});

contact_button.addEventListener("click", () => {
    container.innerHTML = "";
    container.appendChild(contact_page_content);
});

// View Menu button functionality
view_menu_button.addEventListener("click", () => {
    container.innerHTML = "";
    container.appendChild(menu_page_content);
});
