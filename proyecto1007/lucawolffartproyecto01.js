alert("Hola, escoja entre los siguientes productos")

const productos = ["cocacola", " pepsi", " chocolate"]

productos.push (" helado")

/*let a = prompt(`•cocacola
•pepsi
•chocolate`)*/

let a = prompt(productos)


if ( a == " ") {
    alert("Ingrese un producto");
} 
else if (a == "cocacola") {
    alert("El producto cuesta $200");
    alert("¡Que lo disfrutes!")
    alert(`oh ¿aun no te enteraste?
    hay un codigo de descuento. Se encuentra escondido en la consola`)
} 
else if ( a == "pepsi") {
    alert("El producto cuesta $200");
    alert("¡Que lo disfrutes!")
    alert(`oh ¿aun no te enteraste?
    hay un codigo de descuento. Se encuentra escondido en la consola`)
} 
else if (a == "chocolate") {
    alert("el producto cuesta $500");
    alert("¡Que lo disfrutes!")
    alert(`oh ¿aun no te enteraste?
    hay un codigo de descuento. Se encuentra escondido en la consola`)

} 
else if (a == "helado") {
    alert ("el producto cuesta $600")
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
}