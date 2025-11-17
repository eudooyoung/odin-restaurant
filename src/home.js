
const home = document.createElement("div");
const picture = document.createElement("div");
const text = document.createElement("div");
const h1 = document.createElement("h1");
const descriptionOne = document.createElement("p");
const descriptionTwo = document.createElement("p");

home.classList.add("home", "container");
picture.classList.add("picture", "banner");
text.classList.add("text");

h1.textContent = "Welcome to Thor Restaurant!";
descriptionOne.textContent = ` Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            quisquam sunt incidunt dicta, aperiam minus illum voluptatum aliquam
            est consequatur, provident, iste eaque corporis. Aliquam deleniti
            illum itaque delectus culpa! Culpa deleniti pariatur veniam
            reprehenderit labore harum rerum est sapiente explicabo? Rerum
            tempore aliquid at assumenda illo iusto ipsa numquam repellendus
            minima exercitationem itaque, nisi provident natus nihil ea sit
            distinctio perferendis. Ipsa debitis perspiciatis magnam omnis
            maiores, explicabo sapiente, laboriosam obcaecati nam hic, facilis
            eos repellat voluptatum voluptatibus inventore.`;
descriptionTwo.textContent = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, aut,
            provident pariatur ratione architecto rem labore obcaecati dolore
            mollitia perspiciatis at maiores tenetur dolores dolorum. Similique
            ipsa saepe libero, adipisci nulla accusamus quam, commodi at
            perspiciatis laudantium mollitia. Eveniet cumque ut voluptates ipsa
            obcaecati sit expedita quaerat officia eaque necessitatibus modi,
            esse maiores sapiente officiis eius beatae amet in quia natus vitae
            aliquid excepturi, facilis fugit! Ullam fugiat, non optio
            perspiciatis saepe, ipsa ab magni unde dolorem, nobis ex esse.`;

home.appendChild(picture);
home.appendChild(text);
text.appendChild(h1);
text.appendChild(descriptionOne);
text.appendChild(descriptionTwo);

export default home;