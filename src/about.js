const about = document.createElement("div");
about.classList.add("about", "container");

const aboutText = document.createElement("div");
aboutText.classList.add("about", "text");

const aboutTitle = document.createElement("h2");
aboutTitle.textContent = "About Us";

const aboutDescription = document.createElement("p");
aboutDescription.textContent = `
A small kitchen inspired by slow cooking, warm spices, and the comfort of simple ingredients.
We make duck-based dishes with a rustic, homemade touch, from creamy potato soup cooked in rendered duck fat to tomato ragu simmered with garlic, cumin, and cinnamon.

Our food is built on a few principles:

- take time with the basics,
- keep flavors warm and honest.
`;

aboutText.appendChild(aboutTitle);
aboutText.appendChild(aboutDescription);

const groceryPicture = document.createElement("div");
groceryPicture.classList.add("picture", "grocery");

about.appendChild(aboutText);
about.appendChild(groceryPicture);

about.style.display = "none";

export default about;
