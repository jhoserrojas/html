let mainContent = document.getElementById("mainContent");

let boxProducto = document.createElement("div");
mainContent.appendChild(boxProducto);
boxProducto.setAttribute("class", "box-producto");

let marcaProducto = document.createElement("marcaProducto");
mainContent.appendChild(marcaProducto);
let nodoMarcaProducto = document.createTextNode("Toyota");
marcaProducto.appendChild(nodoMarcaProducto);

let imgProducto = document.createElement("img");
mainContent.appendChild(imgProducto);
imgProducto.setAttribute("src","img/ToyotaFj.jpg")