//1.1 Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.
const countries = ["Japón", "Nicaragua", "Suiza", "Australia", "Venezuela"];

const ul = document.createElement("ul");
for (const paises of countries) {
  const li = document.createElement("li");
  li.textContent = paises;
  ul.appendChild(li);
}
document.body.appendChild(ul);

//1.2 Elimina el elemento que tenga la clase .fn-remove-me.
const borrar = document.querySelector(".fn-remove-me");
borrar.remove();

//1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".
const cars = ["Mazda 6", "Ford fiesta", "Audi A4", "Toyota corola"];

const printHere = document.querySelector('[data-function="printHere"]');
const carsUl = document.createElement("ul");
for (const car of cars) {
  const li = document.createElement("li");
  li.textContent = car;
  carsUl.appendChild(li);
}
printHere.appendChild(carsUl);

//1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento h4 para el titulo y otro elemento img para la imagen.
const countriess = [
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
];
for (const country of countriess) {
  const div = document.createElement("div");
  const h4 = document.createElement("h4");
  h4.textContent = country.title;
  const img = document.createElement("img");
  img.src = country.imgUrl;
  img.alt = country.title;
  div.appendChild(h4);
  div.appendChild(img);
  document.body.appendChild(div);
}

//1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la serie de divs.
const btn = document.createElement("button");
btn.textContent = "Elimina último div";
document.body.appendChild(btn);
btn.addEventListener("click", () => {
  const todosDiv = document.querySelectorAll("div");
  if (todosDiv.length > 0) {
    todosDiv[todosDiv.length - 1].remove();
  }
});

//1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los divs que elimine ese mismo elemento del html.
for (const country of countriess) {
  const div = document.createElement("div");
  const h4 = document.createElement("h4");
  h4.textContent = country.title;
  const img = document.createElement("img");
  img.src = country.imgUrl;
  img.alt = country.title;
  const btn = document.createElement("button");
  btn.textContent = "Eliminar este div";
  btn.addEventListener("click", () => {
    div.remove();
  });
  div.appendChild(h4);
  div.appendChild(img);
  div.appendChild(btn);
  document.body.appendChild(div);
}
