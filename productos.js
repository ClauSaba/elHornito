class productos{
    constructor (gusto, precio, stock){
    this.gusto = gusto;
    this.precio = precio;
    this.stock = stock;
    }
    fabricar(cantidad){
        return this.stock = this.stock + cantidad;
    }
    venta(cantidad){
        return this.stock = this.stock - cantidad;
    }
}

const producto01 = new productos ("Margarita", 800 , 10);
const producto02 = new productos ("Pepperoni", 900 , 10);
const producto03 = new productos ("Calabresa", 850 , 10);
const producto04 = new productos ("Roquefort", 1100 , 10);
const producto05 = new productos ("Champiniones", 1200 , 10);
const producto06 = new productos ("CuatroQuesos", 1300 , 10);
const producto07 = new productos ("Cabra", 1500 , 10);
const producto08 = new productos ("Marinara", 900 , 10);
const producto09 = new productos ("Bacon", 1100 , 10);
const producto10 = new productos ("JamonMorrones", 1300 , 10);
const producto11 = new productos ("Palmitos", 1400 , 10);
const producto12 = new productos ("EspecialCasa", 1700 , 10);
const producto13 = new productos ("Harina", 400 , 100);
const producto14 = new productos ("Tomate", 150 , 50);
const producto15 = new productos ("Muzzarella", 500 , 130);

//for( const listaProducto in producto05){
//    console.log(producto05[listaProducto]);//propiedades de una variable
//}

console.log(producto01.stock);
producto01.fabricar(8);
console.log(producto01.stock);
producto01.venta(1);
console.log(producto01.stock);


const inventario = [
producto01,
producto02,
producto03,
producto04,
producto05,
producto06,
producto07,
producto08,
producto09,
producto10,
producto11,
producto12,
producto13,
producto14,
producto15
]

console.log(inventario[5]);
producto06.venta(4);
console.log(inventario[5]);

for (const lista of inventario){
    console.log(`De ${lista.gusto} hay: ${lista.stock} unidades`);
}