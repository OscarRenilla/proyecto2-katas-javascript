//2.1 Inserta dinamicamente en un html un div vacio con javascript.
const div1 = document.createElement("div");
document.body.appendChild(div1)

//2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
const divP = document.createElement("div");
const p1 = document.createElement("p");
p1.textContent = "Estoy en el div";
divP.appendChild(p1);
document.body.appendChild(divP);

//2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
const div6p = document.createElement("div");
for (let i = 1; i <= 6; i++) {
    const p = document.createElement("p");
    p.textContent = `Párrafo: ${i}`;
    div6p.appendChild(p);
}
document.body.appendChild(div6p);

//2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
const pDinamic = document.createElement("p");
pDinamic.textContent = "Soy dinámico!";
document.body.appendChild(pDinamic);

//2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
const h2 = document.querySelector(".fn-insert-here");
h2.textContent = "Wubba Lubba dub dub";

//2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const lista = document.createElement("ul");
for (const app of apps) {
    const li = document.createElement("li");
    li.textContent = app;
    lista.appendChild(li);
}
document.body.appendChild(lista);

//2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
const borrar = document.querySelectorAll(".fn-remove-me");
borrar.forEach(element => element.remove());

//2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild.
const allDiv = document.querySelectorAll("Div");
const pEnMedio = document.createElement("p");
pEnMedio.textContent = "Voy en medio!";
document.body.insertBefore(pEnMedio, allDiv[1]);

//2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here
const dentroDiv = document.querySelectorAll(".fn-insert-here");
dentroDiv.forEach(div => {
    const p = document.createElement("p");
    p.textContent = "Voy dentro!";
    div.appendChild(p);
});
