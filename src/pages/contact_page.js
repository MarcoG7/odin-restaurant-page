export { contact_page_content };

const contact_page_content = document.createElement("div");

const restaurant_tagline = document.createElement("h3");
restaurant_tagline.textContent = "Wood-Fired Flavors, Modern Comfort";
restaurant_tagline.classList.add("restaurant-tagline");

const contact_info_container = document.createElement("div");
contact_info_container.classList.add("contact-container");

const contact_location = document.createElement("p");
contact_location.textContent = "📍 123 Hearth Street, Portland, OR 97201";
contact_location.classList.add("contact-text");

const contact_phone = document.createElement("p");
contact_phone.textContent = "📞 (555) 123-4567";
contact_phone.classList.add("contact-text");

const contact_email = document.createElement("p");
contact_email.textContent = "✉️ hello@emberandash.com";
contact_email.classList.add("contact-text");

contact_info_container.appendChild(contact_location);
contact_info_container.appendChild(contact_phone);
contact_info_container.appendChild(contact_email);

const contact_social_container = document.createElement("div");
contact_social_container.classList.add("contact-container");

const contact_social_title = document.createElement("h3");
contact_social_title.textContent = "Follow Us:";
contact_social_title.classList.add("contact-social-title");

const contact_social_text = document.createElement("p");
contact_social_text.textContent = "[Instagram] | [Facebook] | [Twitter]";
contact_social_text.classList.add("contact-social-text");

contact_social_container.appendChild(contact_social_title);
contact_social_container.appendChild(contact_social_text);

contact_page_content.appendChild(restaurant_tagline);
contact_page_content.appendChild(contact_info_container);
contact_page_content.appendChild(contact_social_container);
