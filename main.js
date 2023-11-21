const Productos = function(nombre, stock, precio) {
    this.name = nombre;
    this.stock = stock;
    this.precio = precio;
}

let producto1 = new Productos("remera", 200, 20000);
let producto2 = new Productos("zapatos", 20, 30000);
let producto3 = new Productos("camisa", 300, 25000);
let producto4 = new Productos("campera", 200, 50000);
let producto5 = new Productos("medias", 200, 2500);
let producto6 = new Productos("cinturon", 200, 14000);
let producto7 = new Productos("chomba", 200, 17000);
let producto8 = new Productos("lentes", 200, 40000);

let lista = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8];

function filtrar() {
    let nombreProducto = prompt("Escribir producto").toUpperCase().trim();
    let resultado = lista.filter((producto) => producto.name.toUpperCase().includes(nombreProducto));
    if (resultado.length > 0) {
        console.table(resultado)
    } else {
        alert("No se encuentra el producto: " + nombreProducto);
    }
}



