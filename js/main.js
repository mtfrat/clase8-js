// Clase para la manipulación de produtos

class producto {
    constructor(nombre,codigo,precio){
        this.nombre = nombre
        this.codigo = codigo
        this.precio = precio
    }

    nombreProducto(){
        return this.nombre
    }

    codigoProducto(){
        return this.codigo
    }

    precioProducto(){
        return this.precio
    }
}


// Ingreso productos
let televisor = new producto("televisor","0001",10000)
let computadora = new producto("computadora","0002",50000)
let aire = new producto("aire acondicionado","0003",70000)

let formulario = document.getElementById("parrafoProductos")

let parrafo = document.createElement("p")

parrafo.innerHTML = `Podes comprar un ${televisor.nombreProducto()} con código ${televisor.codigoProducto()} a $${televisor.precioProducto()} <br>Podes comprar una ${computadora.nombreProducto()} con código ${computadora.codigoProducto()} a $${computadora.precioProducto()} <br>Podes comprar un ${aire.nombreProducto()} con código ${aire.codigoProducto()} a $${aire.precioProducto()}`

formulario.appendChild(parrafo)




