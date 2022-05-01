class productos{
    constructor (codigo, gusto, precio, stock){
    this.codigo = codigo;
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

const producto101 = new productos (101, "Margarita", 800 , 10);
const producto102 = new productos (102, "Pepperoni", 900 , 10);
const producto103 = new productos (103, "Calabresa", 850 , 10);
const producto104 = new productos (104, "Roquefort", 1100 , 10);
const producto105 = new productos (105, "Champiniones", 1200 , 10);
const producto106 = new productos (106, "CuatroQuesos", 1300 , 10);
const producto107 = new productos (107, "Cabra", 1500 , 10);
const producto108 = new productos (108, "Marinara", 900 , 10);
const producto109 = new productos (109, "Bacon", 1100 , 10);
const producto110 = new productos (110, "JamonMorrones", 1300 , 10);
const producto111 = new productos (111, "Palmitos", 1400 , 10);
const producto112 = new productos (112, "EspecialCasa", 1700 , 10);
const producto201 = new productos (201, "Harina", 400 , 100);
const producto202 = new productos (202, "Tomate", 150 , 50);
const producto203 = new productos (203, "Muzzarella", 500 , 130);

const inventario = [
producto101,
producto102,
producto103,
producto104,
producto105,
producto106,
producto107,
producto108,
producto109,
producto110,
producto111,
producto112,
producto201,
producto202,
producto203
]

let solicitaGusto = parseInt(prompt(`Por favor elige un gusto de la siguiente lista: \n"101", "Margarita" \n"102", "Pepperoni" \n"103", "Calabresa"\n"104", "Roquefort"\n"105", "Champiniones"\n"106", "CuatroQuesos"\n"107", "Cabra"\n"108", "Marinara"\n"109", "Bacon"\n"110", "JamonMorrones"\n"111", "Palmitos"\n"112", "EspecialCasa"\n"201", "Harina x kg"\n"202", "Tomate lata"\n"203", "Muzzarella x kilo"`));
let solicitaCantidad = parseInt(prompt("candidad? :"));

console.log("el cliente pide de: "+ solicitaGusto +" la cantidad " + solicitaCantidad + " unidades.");

let pedidoGusto = inventario.find((e) => e.codigo ===solicitaGusto);
console.log(pedidoGusto);

pedidoGusto.venta(solicitaCantidad); //descuenta del stock lo que se vendio
console.log(pedidoGusto);
pedidoGusto.fabricar(solicitaCantidad); // envia orden de fabricacion para reponer stock vendido
console.log(pedidoGusto);