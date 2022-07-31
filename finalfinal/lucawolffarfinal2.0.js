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

// modificacion del html
document.querySelector(".h31").innerHTML = (cocacola.nombre);
document.querySelector(".p1").innerHTML = ("$" + cocacola.costo);
//convertir a json, enviar a locastorage y luego traerlo de nuevo
  let json1 = JSON.stringify(cocacola)
  let image1 = document.querySelector (".img1")
  image1.onclick = () => {document.querySelector(".btn1").innerHTML = (localStorage.getItem("cocacola"))
  localStorage.setItem("cocacola", json1)
}
  
document.querySelector(".h32").innerHTML = (pepsi.nombre);
document.querySelector(".p2").innerHTML = ("$" + pepsi.costo);
//convertir a json, enviar a locastorage y luego traerlo de nuevo
let json2 = JSON.stringify(pepsi)
let image2 = document.querySelector (".img2")
  image2.onclick = () => {document.querySelector(".btn1").innerHTML = (localStorage.getItem("pepsi"))
  localStorage.setItem("pepsi", json2)}

document.querySelector(".h33").innerHTML = (chocolate.nombre);
document.querySelector(".p3").innerHTML = ("$" + chocolate.costo);
//convertir a json, enviar a locastorage y luego traerlo de nuevo
let json3 = JSON.stringify(chocolate)
let image3 = document.querySelector (".img3")
  image3.onclick = () => {document.querySelector(".btn1").innerHTML = (localStorage.getItem("chocolate"))
  localStorage.setItem("chocolate", json3)}

document.querySelector(".h34").innerHTML = (helado.nombre)
document.querySelector(".p4").innerHTML = ("$" + helado.costo)
//convertir a json, enviar a locastorage y luego traerlo de nuevo
let json4 = JSON.stringify(helado)
let image4 = document.querySelector (".img4")
  image4.onclick = () => {document.querySelector(".btn1").innerHTML = (localStorage.getItem("helado"))
  localStorage.setItem("helado", json4)}

//incorporar librerias: swetalert
const finalizarcompra = document.querySelector(".botonfinal")
finalizarcompra.onclick = () => {swal("Excelente, los productos llegaran den las proximas 2 horas :D");}
