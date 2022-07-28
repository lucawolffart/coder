class productos {
    constructor (nombre, costo, codigo) {
        this.nombre = nombre;
        this.costo= costo;
        this.codigo= codigo;
    }
} 

const cocacola = new productos("cocacola",
 200,
 111,
);

const pepsi = new productos(
    "pepsi",
    200,
    222,
)

const chocolate = new productos (
    "chocolate",
    500,
    333,
)

const helado = new productos(
    "helado",
    600,
    444,
)




document.querySelector(".h31").innerHTML = (cocacola.nombre);
document.querySelector(".p1").innerHTML = ("$" + cocacola.costo);
  let image1 = document.querySelector (".img1")
  image1.onclick = () => {document.querySelector(".btn1").innerHTML = (cocacola.nombre && cocacola.costo)}

document.querySelector(".h32").innerHTML = (pepsi.nombre);
document.querySelector(".p2").innerHTML = ("$" + pepsi.costo);
let image2 = document.querySelector (".img2")
  image2.onclick = () => {document.querySelector(".btn1").innerHTML = (pepsi.nombre && pepsi.costo)}

document.querySelector(".h33").innerHTML = (chocolate.nombre);
document.querySelector(".p3").innerHTML = ("$" + chocolate.costo);
let image3 = document.querySelector (".img3")
  image3.onclick = () => {document.querySelector(".btn1").innerHTML = (chocolate.nombre && chocolate.costo)}

document.querySelector(".h34").innerHTML = (helado.nombre)
document.querySelector(".p4").innerHTML = ("$" + helado.costo)
let image4 = document.querySelector (".img4")
  image4.onclick = () => {document.querySelector(".btn1").innerHTML = (helado.nombre && helado.costo)}

let carrito = document.querySelector(".btn1")

//if (carrito .costo) {
    
//}
