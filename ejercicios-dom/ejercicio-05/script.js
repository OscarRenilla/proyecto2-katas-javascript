//Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los albums. Que tenga la apariencia de una web completa dentro de lo posible.

const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

// Añadimos un título 
const h1 = document.createElement("h1");
h1.textContent = "Mis Álbumes de música";
document.body.appendChild(h1);

// Creamos la lista 
const ul = document.createElement("ul");
document.body.appendChild(ul);

// Función para imprimir la lista
function renderList() {
  ul.innerHTML = ""; /*Limpiamos lista antes de imprimir*/
  for (const album of albums) {
    const li = document.createElement("li");
    li.textContent = album;
    ul.appendChild(li);
  }
}
renderList();

// CReamos un input y un botón para poder añadir albums
const input = document.createElement("input");
input.placeholder = "Título del nuevo álbum";
const addBtn = document.createElement("button");
addBtn.textContent = "Añadir álbum";
document.body.appendChild(input);
document.body.appendChild(addBtn);

// Creamos un evento para añadir albums nuevos 
addBtn.addEventListener("click", () => {
  const newAlbum = input.value.trim();
  if (newAlbum !== "") {
    albums.push(newAlbum);
    renderList();
    input.value = "";
 }
});

// Añadimos botón para entrar en evento de eliminar
const btnEventEliminar = document.createElement("button");
btnEventEliminar.textContent = "Eliminar Albums";
document.body.appendChild(btnEventEliminar);
let modoBorrar = false; 
btnEventEliminar.addEventListener("click", () => {
  modoBorrar = !modoBorrar; /*Cambiar de modo*/
  renderListWithDelete();
});

// Imprimimos la lista 
function renderListWithDelete() {
  ul.innerHTML = "";
  for (let i = 0; i < albums.length; i++) {
    const album = albums[i];
    const li = document.createElement("li");
    li.textContent = album;

    // Si está en modo borrar, añadimos el botón
    if (modoBorrar) {
      const delBtn = document.createElement("button");
      delBtn.textContent = "Eliminar";
      delBtn.style.marginLeft = "10px";
      delBtn.addEventListener("click", () => {
        albums.splice(i, 1);
        renderListWithDelete();
      });
      li.appendChild(delBtn);
    }
    ul.appendChild(li);
  }
}