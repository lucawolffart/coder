alert("Hola, escoja entre los siguientes productos")

class productos {
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


//------------------Tareas anteriores----------------

/*const productos = ["cocacola", " pepsi", " chocolate"]

productos.push (" helado")

/*let a = prompt(`•cocacola
•pepsi
•chocolate`)*/

//---------------------------------------------------

let a = prompt((cocacola.nombre) + ", " + (chocolate.nombre) + ", " + (pepsi.nombre) + ", " + (helado.nombre))


if ( a == " ") {
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


//-------------------aqui los aportes de mi gato-------------------

//"saaaaaaaa"