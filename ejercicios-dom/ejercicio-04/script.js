//1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el evento click que ejecute un console log con la información del evento del click 
const button = document.getElementById("btnToClick");
button.addEventListener ("click", (event) => {
    console.log("Pulsaste el bontón");
    console.log(event);
});

// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
const inputFocus = document.querySelector(".focus");
inputFocus.addEventListener("focus", (event) => {
    console.log("Valor del input: ", event.target.value);
});

// 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
const inputValor = document.querySelector(".value");
inputValor.addEventListener("input", (event) => {
    console.log("Escribiendo:", event.target.value);
});