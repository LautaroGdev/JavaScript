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




/*   */

// Array para el carrito de compras
const carrito = []

// Ordenar productos de menor a mayor
const ordenarMenorMayor = () => {
    productos.sort((a, b) => a.precio - b.precio)
    mostrarListaOrdenada()
};

// Ordenar productos de mayor a menor
const ordenarMayorMenor = () => {
    productos.sort((a, b) => b.precio - a.precio)
    mostrarListaOrdenada()
};

const mostrarListaOrdenada = () => {
    const listaDeProductos = productos.map(producto => {
        return "- "+producto.nombre+" $"+producto.precio
    })
    alert("Lista de precios:"+"\n\n"+listaDeProductos.join("\n"))
    comprarProductos(listaDeProductos)
};

const comprarProductos = (listaDeProductos) => {
    let productoNombre = ""
    let productoCantidad = 0
    let otroProducto = false

    do {
        productoNombre = prompt("¿Qué combo desea comprar?"+"\n\n"+listaDeProductos.join("\n"))
        productoCantidad = parseInt(prompt('¿Cuántos queres comprar?'))

        const producto = productos.find(producto => producto.nombre.toLowerCase() === productoNombre.toLowerCase())

        if (producto) {
            agregarAlCarrito(producto, producto.id, productoCantidad)
        } else {
            alert("El producto no es valido")
        }

        otroProducto = confirm("Quiere agregar otro combo?")
    } while (otroProducto);

    confirmarCompra()
};

const agregarAlCarrito = (producto, productoId, productoCantidad) => {
    const productoRepetido = carrito.find(producto => producto.id === productoId)
    if (!productoRepetido) {
        producto.cantidad += productoCantidad
        carrito.push(producto)
    } else {
        productoRepetido.cantidad += productoCantidad
    }
};

const eliminarProductoCarrito = (nombreProductoAEliminar) => {
    carrito.forEach((producto, index) => {
        if (producto.nombre.toLowerCase() === nombreProductoAEliminar.toLowerCase()) {
            if (producto.cantidad > 1) {
                producto.cantidad--
            } else {
                carrito.splice(index, 1)
            }
        }
    })
    confirmarCompra()
};

const confirmarCompra = () => {
    const listaProductos = carrito.map(producto => {
        return "- "+producto.nombre+" | Cantidad: "+producto.cantidad
    })

    const isCheckout = confirm("Checkout: "
        +"\n\n"+listaProductos.join("\n")
        +"\n\nPara continuar presione 'Aceptar' sino 'Cancelar' para eliminar un combo del carrito"
    )

    if (isCheckout) {
        finalizarCompra(listaProductos)
    } else {
        const nombreProductoAEliminar = prompt("Ingrese el nombre del combo a eliminar:")
        eliminarProductoCarrito(nombreProductoAEliminar)
    }
};

const finalizarCompra = (listaProductos) => {
    const cantidadTotal = carrito.reduce((acc, item) => acc + item.cantidad, 0)
    const precioTotal = carrito.reduce((acc, item) => acc + (item.cantidad * item.precio), 0)
    alert("Detalle de su compra: "
        +"\n\n"+listaProductos.join("\n")
        +"\n\nTotal de productos: "+cantidadTotal
        +"\n\nEl total de la compra es: "+precioTotal
        +"\n\nGracias por realizar su compra!"
    )
};

const comprar = () => {
    const productosBaratos = confirm("Bienvenido al Candy! ¿Queres ordenar los combos del mas barato al mas caro?")

    if (productosBaratos) {
        ordenarMenorMayor()
    } else {
        ordenarMayorMenor()
    }
};


comprar()