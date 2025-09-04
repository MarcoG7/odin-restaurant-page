export { menu_page_content };

function category(categories) {
    const category_container = document.createElement("div");
    category_container.classList.add("menu-category");

    for (category of categories) {
        const category_title = document.createElement("h2");
        category_title.textContent = category.title;
        category_title.classList.add("category-title");

        const category_list = document.createElement("div");
        category_list.classList.add("category-list");

        for (let item of category.items) {
            const category_item = categoryItem(item.name, item.price);
            category_list.appendChild(category_item);
        }

        category_container.appendChild(category_title);
        category_container.appendChild(category_list);
    }

    return category_container;
}

function categoryItem(item_name, price) {
    const category_item = document.createElement("div");

    const category_name = document.createElement("p");
    category_name.textContent = item_name;
    category_name.classList.add("category-name");

    const category_price = document.createElement("p");
    category_price.textContent = price;
    category_price.classList.add("category-price");

    category_item.appendChild(category_name);
    category_item.appendChild(category_price);

    return category_item;
}

const menu_page_content = document.createElement("div");

const restaurant_tagline = document.createElement("h3");
restaurant_tagline.textContent = "Wood-Fired Flavors, Modern Comfort";
restaurant_tagline.classList.add("restaurant-tagline");

const categories = [
    {
        title: "Starters",
        items: [
            {
                name: "Wood-Fired Flatbread",
                price: "$8",
            },
            {
                name: "Roasted Beet Salad",
                price: "$9",
            },
            {
                name: "Crispy Calamari",
                price: "$11",
            },
        ],
    },
    {
        title: "Mains",
        items: [
            {
                name: "Ember Burger",
                price: "$15",
            },
            {
                name: "Wild Mushroom Risotto",
                price: "$17",
            },
            {
                name: "Wood-Fired Salmon",
                price: "$21",
            },
            {
                name: "Chargrilled Ribeye",
                price: "$28",
            },
        ],
    },
    {
        title: "Desserts",
        items: [
            {
                name: "Chocolate Cake",
                price: "$7",
            },
            {
                name: "Seasonal Fruit Tart",
                price: "$6",
            },
            {
                name: "Crème Brûlée",
                price: "$8",
            },
        ],
    },
    {
        title: "Drinks",
        items: [
            {
                name: "House Wine",
                price: "$7",
            },
            {
                name: "Craft Beer",
                price: "$6",
            },
            {
                name: "Espresso / Cappuccino",
                price: "$4",
            },
        ],
    },
];

const categories_section = category(categories);

menu_page_content.appendChild(restaurant_tagline);
menu_page_content.appendChild(categories_section);
