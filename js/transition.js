let contenedorPrinc = document.getElementById("contenedorPrinc");
let contenedor = document.getElementById("contenedor");


contenedorPrinc.addEventListener("click", function(){
    if(contenedor.classList.contains("contenedor-1")){
        contenedor.classList.add("contenedor-2");
        contenedor.classList.remove("contenedor-1");
        contenedorPrinc.classList.add("main-box-on");
        contenedorPrinc.classList.remove("main-box-off");
    }
    else{
        contenedor.classList.remove("contenedor-2");
        contenedor.classList.add("contenedor-1");
        contenedorPrinc.classList.remove("main-box-on");
        contenedorPrinc.classList.add("main-box-off");
    }
}) 