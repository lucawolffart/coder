alert("Hola, escoja entre los siguientes productos")
let a = prompt(`•cocacola
•pepsi
•chocolate`)

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
else {
    alert("No disponemos de ese producto");
}

console.log(`codigos de descuento:
    •cocacola: 111
    •pepsi: 222
    •chocolate: 333`)

let b = prompt("Coloque su numero de descuento")

if (b === `111` || b === `222`) {
    const d = 200 - (200 * 10 / 100)
    alert("su gaseosa queda en $" + d)
} else if (b === `333`) {
   let c = 500 - (500 * 10 / 100)
   alert( "su chocolate queda en $" + c )
}