export { about_page_content };

const about_page_content = document.createElement("div");
about_page_content.classList.add("about-page-content");

const restaurant_tagline = document.createElement("h3");
restaurant_tagline.textContent = "Wood-Fired Flavors, Modern Comfort";
restaurant_tagline.classList.add("restaurant-tagline");

const about_description = document.createElement("p");
about_description.textContent =
    "At Ember & Ash, we believe in simple, honest food made extraordinary through the art of fire. Our chefs bring together fresh, local ingredients and time-honored cooking methods to create dishes that are both comforting and bold.";
about_description.classList.add("about-description");

const about_words = document.createElement("p");
about_words.textContent = "🌿 Fresh • 🔥 Wood-Fired • 🍷 Crafted with Care";
about_words.classList.add("about-words");

about_page_content.appendChild(restaurant_tagline);
about_page_content.appendChild(about_description);
about_page_content.appendChild(about_words);
