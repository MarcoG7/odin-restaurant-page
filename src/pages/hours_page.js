export { hours_page_content };

const hours_page_content = document.createElement("div");

const restaurant_tagline = document.createElement("h3");
restaurant_tagline.textContent = "Wood-Fired Flavors, Modern Comfort";
restaurant_tagline.classList.add("restaurant-tagline");

const hours_list = document.createElement("ul");
hours_list.classList.add("hours-list");

const hours_item_MTWT = document.createElement("li");
hours_item_MTWT.textContent = "Monday - Thursday: 11:30 AM - 9:00 PM";
hours_item_MTWT.classList.add("hours-item");

const hours_item_FS = document.createElement("li");
hours_item_FS.textContent = "Friday - Saturday: 11:30 AM - 10:30 PM";
hours_item_FS.classList.add("hours-item");

const hours_item_S = document.createElement("li");
hours_item_S.textContent = "Sunday: 10:00 AM - 8:00 PM (Brunch: 10 AM - 2 PM)";
hours_item_S.classList.add("hours-item");

hours_list.appendChild(hours_item_MTWT);
hours_list.appendChild(hours_item_FS);
hours_list.appendChild(hours_item_S);

hours_page_content.appendChild(restaurant_name);
hours_page_content.appendChild(restaurant_tagline);
hours_page_content.appendChild(hours_list);
