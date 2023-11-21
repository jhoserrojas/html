let inputBusqueda = document.getElementById("inputBusqueda");
let btngraficar = document.getElementById("btngraficar");
let boxEstrellas = document.getElementById("boxEstrellas");

btngraficar.addEventListener("click", function(){
    let boxEstrella = document.createElement("i");
    boxEstrellas.appendChild(boxEstrella);
    boxEstrella.setAttribute("class", "fa-solid fa-star");

});
