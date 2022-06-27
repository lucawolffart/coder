//console.log("hola :D")

/*alert (`hola, en carta tenemos los siguientes productos:
•pizza
•tarta
•hamburguesa
`)

let comida = prompt("Ahora escoja alguno de los anteriores platos")


switch (comida) {
    case "tarta":
        alert ("la tarta cuesta $200")
        break;
    case "pizza":
        alert("la pizza cuesta $500")
        break;
    case "hamburguesa":
        alert("la hamburguesa cuesta $800")
    default:
        alert("No tenemos ese producto")
        break;
}

let x = 0;

while (x <= 10) {
    console.log(`equis: ${x}`);
    x++;
}*/

 /*let i = prompt ("Escriba una palabra, luego escriba ''basta'' o ''stop'' para finalizar")
 let b = " "

 while (i != "basta" && i != "stop" ) {
    b += i + " "
    i = prompt("otra palabra")
 }

 alert (b)*/


 /*for(let i = 0; i<5 ; i++){
    alert(`i es igual a ${i}`)
 }*/

let numero = parseInt(prompt("coloque un numero"))

 for( let i = 1; i <= 10; i++ ){
    let resultado = numero * i
    alert(`${numero} + ${i} = ${resultado}`)
 }
