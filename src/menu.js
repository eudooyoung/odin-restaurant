const menu = document.createElement("div");
menu.classList.add("menu", "container");

// potato soup section
const potatoSoup = document.createElement("div");
potatoSoup.classList.add("menu-card", "potato-soup");

const potatoSoupPicture = document.createElement("div");
potatoSoupPicture.classList.add("picture", "food");

const potatoSoupText = document.createElement("div");
potatoSoupText.classList.add("food-text");

const potatoSoupTitle = document.createElement("h2");
potatoSoupTitle.classList.add("food-title");
potatoSoupTitle.textContent = "Duck Fat Potato Soup";

const potatoSoupDescription = document.createElement("p");
potatoSoupDescription.classList.add("food-description");
potatoSoupDescription.textContent = `
A smooth potato soup made with slow-rendered duck fat, sautéed onions, and a hint of thyme. 
Finished with freshly grated nutmeg and crisp duck cracklings for a light, savory touch. 
Served with French-press coffee and toasted slices of whole-grain rye bread.
`;

potatoSoupText.appendChild(potatoSoupTitle);
potatoSoupText.appendChild(potatoSoupDescription);

potatoSoup.appendChild(potatoSoupPicture);
potatoSoup.appendChild(potatoSoupText);

// tomato soup section
const tomatoSoup = document.createElement("div");
tomatoSoup.classList.add("menu-card", "tomato-soup");

const tomatoSoupPicture = document.createElement("div");
tomatoSoupPicture.classList.add("picture", "food");

const tomatoSoupText = document.createElement("div");
tomatoSoupText.classList.add("food-text");

const tomatoSoupTitle = document.createElement("h2");
tomatoSoupTitle.classList.add("food-title");
tomatoSoupTitle.textContent = "Duck Ragu with Tomato and Warm Spices";

const tomatoSoupDescription = document.createElement("p");
tomatoSoupDescription.classList.add("food-description");
tomatoSoupDescription.textContent = `
A slow-cooked tomato ragu made with duck meat, rendered duck fat, and sautéed onions and garlic.
Lightly seasoned with cumin and a touch of cinnamon for subtle warmth.
 Served with French-press coffee and toasted slices of whole-grain rye bread.
 `;

tomatoSoupText.appendChild(tomatoSoupTitle);
tomatoSoupText.appendChild(tomatoSoupDescription);

tomatoSoup.appendChild(tomatoSoupPicture);
tomatoSoup.appendChild(tomatoSoupText);

// menu rounding up
menu.appendChild(potatoSoup);
menu.appendChild(tomatoSoup);

menu.style.display = "none";

export default menu;
