export { home_page_content };

const home_page_content = document.createElement("div");
home_page_content.classList.add("home-page-content");

const restaurant_tagline = document.createElement("h3");
restaurant_tagline.textContent = "Wood-Fired Flavors, Modern Comfort";
restaurant_tagline.classList.add("restaurant-tagline");

const restaurant_description = document.createElement("p");
restaurant_description.textContent =
    "Welcome to Ember & Ash, where rustic cooking meets modern dining. From wood-fired flatbreads to our signature ribeye, we craft every dish with care and seasonal ingredients.";
restaurant_description.classList.add("restaurant-description");

const restaurant_slogan = document.createElement("h3");
restaurant_slogan.textContent = "Where warmth meets flavor";
restaurant_slogan.classList.add("restaurant-slogan");

// CTA Form
const cta_form = document.createElement("form");
cta_form.classList.add("cta-form");

const view_menu_button = document.createElement("button");
view_menu_button.textContent = "View Menu";
view_menu_button.classList.add("cta-button");

const rsvp_button = document.createElement("button");
rsvp_button.textContent = "Reserve a Table";
rsvp_button.classList.add("cta-button");

cta_form.appendChild(view_menu_button);
cta_form.appendChild(rsvp_button);

home_page_content.appendChild(restaurant_tagline);
home_page_content.appendChild(restaurant_description);
home_page_content.appendChild(restaurant_slogan);
home_page_content.appendChild(cta_form);
