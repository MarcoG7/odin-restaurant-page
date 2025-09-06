export { hours_page_content };

function createHourSlot(days, hours) {
    const hours_item = document.createElement("li");
    hours_item.classList.add("hours-item");

    const hours_item_days = document.createElement("span");
    hours_item_days.textContent = days;
    hours_item_days.classList.add("hours-days");
    hours_item.appendChild(hours_item_days);

    const hours_item_hours = document.createElement("span");
    hours_item_hours.textContent = hours;
    hours_item.appendChild(hours_item_hours);

    return hours_item;
}

const hours_page_content = document.createElement("div");
hours_page_content.classList.add("hours-page-content");

const restaurant_tagline = document.createElement("h3");
restaurant_tagline.textContent = "Wood-Fired Flavors, Modern Comfort";
restaurant_tagline.classList.add("restaurant-tagline");

const hours_list = document.createElement("ul");
hours_list.classList.add("hours-list");

const hours_item_MTWT = createHourSlot(
    "Monday - Thrusday: ",
    "11:30 AM - 9:00 PM"
);
const hours_item_FS = createHourSlot(
    "Friday - Saturday: ",
    "11:30 AM - 10:30 PM"
);
const hours_item_S = createHourSlot(
    "Sunday: ",
    "10:00 AM - 8:00 PM (Brunch: 10 AM - 2 PM)"
);

hours_list.appendChild(hours_item_MTWT);
hours_list.appendChild(hours_item_FS);
hours_list.appendChild(hours_item_S);

hours_page_content.appendChild(restaurant_tagline);
hours_page_content.appendChild(hours_list);
