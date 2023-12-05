let inputBusqueda = document.getElementById("inputBusqueda");
let btnGraficar = document.getElementById("btnGraficar");
let boxEstrellas = document.getElementById("boxEstrellas");

let boxEstrella1 = document.createElement("i");
let boxEstrella2 = document.createElement("i");
let boxEstrella3 = document.createElement("i");
let boxEstrella4 = document.createElement("i");
let boxEstrella5 = document.createElement("i");

window.addEventListener("load", function(){
    boxEstrellas.appendChild(boxEstrella1);
    boxEstrellas.appendChild(boxEstrella2);
    boxEstrellas.appendChild(boxEstrella3);
    boxEstrellas.appendChild(boxEstrella4);
    boxEstrellas.appendChild(boxEstrella5);

})

btnGraficar.addEventListener("click", function(){
    let calificacion = inputBusqueda.value;
    if (calificacion >= 0 && calificacion <= 0.2){
        boxEstrella1.setAttribute("class", "fa-solid fa-star");
        boxEstrella2.setAttribute("class", "fa-solid fa-star");
        boxEstrella3.setAttribute("class", "fa-solid fa-star");
        boxEstrella4.setAttribute("class", "fa-solid fa-star");
        boxEstrella5.setAttribute("class", "fa-solid fa-star");
    }

    else if (calificacion >= 1 && calificacion <= 1.5){
        boxEstrella1.setAttribute("class", "fa-solid fa-star");
        
    }
    else if (calificacion >= 2 && calificacion <= 2.5){
        boxEstrella1.setAttribute("class", "fa-solid fa-star");
        boxEstrella2.setAttribute("class", "fa-solid fa-star");
    }
    else if (calificacion >= 3 && calificacion <= 3.5){
        boxEstrella1.setAttribute("class", "fa-solid fa-star");
        boxEstrella2.setAttribute("class", "fa-solid fa-star");
        boxEstrella3.setAttribute("class", "fa-solid fa-star");
    }
    else if (calificacion >= 4 && calificacion <= 4.5){
        boxEstrella1.setAttribute("class", "fa-solid fa-star");
        boxEstrella2.setAttribute("class", "fa-solid fa-star");
        boxEstrella3.setAttribute("class", "fa-solid fa-star");
        boxEstrella4.setAttribute("class", "fa-solid fa-star");
    }
    else {
        boxEstrella1.setAttribute("class", "fa-solid fa-star");
        boxEstrella2.setAttribute("class", "fa-solid fa-star");
        boxEstrella3.setAttribute("class", "fa-solid fa-star");
        boxEstrella4.setAttribute("class", "fa-solid fa-star");
        boxEstrella5.setAttribute("class", "fa-solid fa-star"); 
    }
    // let boxEstrella = document.createElement("i");
    // //es hijo de boxEstrella
    // boxEstrellas.appendChild(boxEstrella);
    // boxEstrella.setAttribute("class", "fa-solid fa-star");
});
