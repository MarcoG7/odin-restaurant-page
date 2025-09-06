export { menu_page_content };

function category(categories) {
    const categories_container = document.createElement("div");
    categories_container.classList.add("menu-categories");

    for (category of categories) {
        const category_container = document.createElement("div");
        category_container.classList.add("menu-category");

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

        categories_container.appendChild(category_container);
    }

    return categories_container;
}

function categoryItem(name, price) {
    const item = document.createElement("div");
    item.classList.add("item");

    const item_name = document.createElement("p");
    item_name.textContent = name;
    item_name.classList.add("item-name");

    const item_price = document.createElement("p");
    item_price.textContent = price;
    item_price.classList.add("item-price");

    item.appendChild(item_name);
    item.appendChild(item_price);

    return item;
}

const menu_page_content = document.createElement("div");
menu_page_content.classList.add("menu-page-content");

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
