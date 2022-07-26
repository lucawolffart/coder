//de array a json y luego guardado en local storage

const productos = {
    "cocacola":[ { 
       "nombre": "cocacola",
       "precio": 200,
       "codigo": "111"  
     }],
    "pepsi":[ {
         "nombre": "pepsi",
         "precio": 200,
         "codigo": "222"
     }],
    "chocolate":[ {
         "nombre": "chocolate",
         "precio": 500,
         "codigo": "333"
     }],
    "helado":[ {
         "nombre": "helado",
         "precio": 600,
         "codigo": "444"
     }]
 }

const guardarenlocal = (clave, valor) => {localStorage.setItem(clave, valor)};
for(const producto of productos){
    guardarenlocal(producto.id, JSON.stringify(producto))
}

//modificacion del html via DOM

/*document.querySelector("#card-text1").innerHTML = ("valor: $"+ );

document.querySelector("#card-text2").innerHTML = ("valor: $"  );

document.querySelector("#card-text3").innerHTML = ("valor: $"  );

document.querySelector("#card-text4").innerHTML = ("valor: $" );*/


//console.log(JSON.parse(localStorage.getItem(`${productos}`)))

// intento de asociar un json de forma externa. (no salio)
/*async function datosjson() {
    const response = await fetch("http://127.0.0.1:5500/json4.json");
    const json = await response.json ();

    console.log(json);
}

datosjson()*/




/*class productos {
    constructor(nombre, precio, id) {
        this.nombre = nombre;  
        this.precio = precio;
        this.id = id;

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



//let mouse = document.querySelector("#btn2")
//mouse.onclick = () => {changeStyle}

/*let color = document.querySelector("#boton1")
color.onclick = () => {document.querySelector("#btn2").style.backgroundColor = `red`;}*/



//------------------Tareas anteriores----------------

/*alert("Hola, escoja entre los siguientes productos")
const productos = ["cocacola", " pepsi", " chocolate"]

productos.push (" helado")

let a = prompt(productos)*/

/*let a = prompt(`•cocacola
•pepsi
•chocolate`)
*/
//let a = prompt((cocacola.nombre) + ", " + (chocolate.nombre) + ", " + (pepsi.nombre) + ", " + (helado.nombre))


/*if ( a == " ") {
    alert("Ingrese un producto");
} 
else if (a == "cocacola") { 
    alert("el producto cuesta $" + (cocacola.precio));
    alert("¡Que lo disfrutes!")
    alert(`oh ¿aun no te enteraste?
    hay un codigo de descuento. Se encuentra escondido en la consola`)
} 
else if ( a == "pepsi") {
    alert("El producto cuesta $" + (pepsi.precio));
    alert("¡Que lo disfrutes!")
    alert(`oh ¿aun no te enteraste?
    hay un codigo de descuento. Se encuentra escondido en la consola`)
} 
else if (a == "chocolate") {
    alert("el producto cuesta $" + (chocolate.precio));
    alert("¡Que lo disfrutes!")
    alert(`oh ¿aun no te enteraste?
    hay un codigo de descuento. Se encuentra escondido en la consola`)

} 
else if (a == "helado") {
    alert ("el producto cuesta $" + (helado.precio))
    alert ("que lo disfrutes!")
    alert (`oh, aun no te enteraste?
    hay un codigo de descuento. Se encuentra escondido en la consola`)
}
else {
    alert("No disponemos de ese producto");
}

console.log(`codigos de descuento:
    •cocacola: 111
    •pepsi: 222
    •chocolate: 333
    •helado: 444`)

let b = prompt("Coloque su numero de descuento")

if (b === `111` || b === `222`) {
    const d = 200 - (200 * 10 / 100)
    alert("su gaseosa queda en $" + d)
} else if (b === `333`) {
   const c = 500 - (500 * 10 / 100)
   alert( "su chocolate queda en $" + c )
} else if(b === `444`) {
    const e = 600 - (600 * 10 / 100)
  alert( "su helado queda en $" + e )
} else if (b /= `111`, `222`, `333`, `444`) 
    alert("usted no ha ingresado ningun codigo")
*/

//---------------------------------------------------


//-------------------aqui los aportes de mi gato-------------------

//"saaaaaaaa"