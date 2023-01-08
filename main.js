// operaciones basicas

/* let numeroA = 3
let numeroB = 4
const NUMEROC = 5

let resultadoSuma = numeroA + numeroB
let resultadoResta = numeroB + numeroA
let resultadoProducto = numeroB * NUMEROC
let resultadoDivision = numeroB / numeroA
console.log(resultadoProducto) */

//coercion de tipos: cuando se realiza una operacion con distintos tipos de datos se concatenan
/* let textoA = "CODER"
let textoB = "HOUSE"
const BLANCO = " "

let resultadoC = textoA + 1
console.log(resultadoC) */

//ejemplos prompt, alert
/* let nombreIngresado = prompt("Ingrese su nombre")

alert("Bienvenido "+nombreIngresado+" al sitio web de Lautaro Gorosito") */

//ejemplo2

/* let primerNumero = Number(prompt("Ingrese un numero: "))
let segundoNumero = Number(prompt("Ingrese otro numero: "))

let resultado = primerNumero + segundoNumero

alert("El resultado es: "+resultado) */
/* 
let nombreIngresado = prompt("ingresar nombre:")
let apellidoIngresado = prompt("ingresar apellido:")

if ((nombreIngresado !=" ") && (apellidoIngresado !=" ")) {
    alert ("Nombre: " +nombreIngresado+ " Apellido: " +apellidoIngresado)
} else {
    alert ("Por favor completa los datos solicitados. Muchas gracias!")
} */

/* let pedirNumero = prompt("Ingrese un número entre 10 y 50: ")

if (( pedirNumero < 50 ) && ( pedirNumero > 10 )) {
    alert ("Felicitaciones") 
} else {
    alert ("Intentelo de nuevo")
} */

/* for (let i = 20 ; i >= 0; i--) {
    alert (i)
} */
/* let numeroA = parseInt(prompt("Ingrese un número: "))
let operacion = prompt("Ingrese un operador matemático: ")
let numeroB = parseInt(prompt("Ingrese otro número: "))


 
function calcularOperacion (primerNumero, segundoNumero, operacion) {
    switch (operacion) {
        case "+":
             return primerNumero + segundoNumero ;
        case "-":
            return primerNumero - segundoNumero ;
        case "*":
            return primerNumero * segundoNumero ;
        case "/":
            return primerNumero / segundoNumero ;
        default:
            return 0 ;}
};




let resultado = calcularOperacion (numeroA, numeroB, operacion)

alert("el resultado de la operacion es: " +resultado) */


/* ENTREGA UNO */

const realizarCompra = () => {

    let pelicula = "";
    let combo = 0;
    let precio = 0;
    let cantidadEntradas = 0;
    let cantidadTotal = 0;
    let seguirComprando = false;
    let totalCompra = 0;



    do {
        pelicula = confirm("¿Queres ver el estreno de Avatar 2?");
        cantidadEntradas = parseInt(prompt("Escribe el número de entradas que deseas comprar. Puedes sacar hasta 5 entradas."));
        
        
        const cantidadEntradasValidada = validarCantidadEntradas(cantidadEntradas)
        console.log(cantidadEntradasValidada)
        
        switch (cantidadEntradas) {
            case "1":
                precio = 800;
                break;
            case "2":
                precio = 1600;
                break;
            case "3":
                precio = 2400;
                break;
            case "4": 
                precio = 3200;
                break;
            case "5":
                precio = 4000;
                break;
            default: 
                alert("Escribe el numero de entradas que deseas comprar. Puedes sacar hasta 5 por compra.");
                break;
        }


        
        combo = prompt("Seleccioná qué combo preferis: familiar (4 bebidas / 2 baldes de pochoclos: $4000), duo (2 bebidas / 1 balde de pochoclos: $2200), individual (1 bebida / 1 balde jr de pochoclos: $1300");
        
        const comboValidado = validarCombo (combo)
        console.log(comboValidado)

        switch (combo) {
            case "familiar":
                precio = 4000;
                break;
            case "duo":
                precio = 2200;
                break;
            case "individual":
                precio = 1300
                break;
            default:
                alert("Intentalo de nuevo escribiendo el nombre del combo que preferis.");
                combo = 0;
                precio = 0;
        }
        

        seguirComprando = confirm("¿Quieres confirmar la compra?")
    } while (seguirComprando)
}



const validarCantidadEntradas = (cantidadEntradas) => {
        while (Number.isNaN(cantidadEntradas) || (cantidadEntradas === 0) || (cantidadEntradas > 5)) {
        alert("Recorda que podes sacar de 1 a 5 entradas inclusive por compra.")
            
        cantidadEntradas = parseInt(prompt("Escribe el número de entradas que deseas comprar. Puedes sacar hasta 5 entradas."))
    } 
        return cantidadEntradas;    
    };


const validarCombo = (combo) => {
        while ((combo != 'familiar') || (combo != 'duo') || (combo != 'individual')) {
            alert("Ingresa el nombre del combo que queres comprar como lo muestra en el mensaje por favor")
            combo = prompt("Seleccioná qué combo preferis: familiar (4 bebidas / 2 baldes de pochoclos: $4000), regular (2 bebidas / 1 balde de pochoclos: $2200), individual (1 bebida / 1 balde jr de pochoclos: $1300.")           
    } 
        return combo;      
    };

realizarCompra();