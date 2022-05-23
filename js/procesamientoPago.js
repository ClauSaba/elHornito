/* objetivos comerciales aplicados al carrito de compras
10% en todas las compras a superiores a 10000. Se suman descuentos adicionales del 5 y 10%,
si es domingo o martes respectivamente
*/

let fechaReservaCliente = flatpickr('#flatpickr');

//console.log( (fechaReservaCliente));


fechaReservaCliente = new Date ("2022-04-19  23:23:23"); // este dato lo tiene que tomar cuando el usuario clickee un calendario
let diaSemana = fechaReservaCliente.getDay();

console.log(diaSemana);

//mensaje de descuento
let leyendaDescuentoDiaSemana = document.getElementById("leyendaDescuentoDiaSemana");
let leyendaDomingo = "Elegiste un Domingo, obtuviste un descuento de 5%!!";
let leyendaMartes = "Elegiste un Martes, obtuviste un descuento de 10%!!";
diaSemana === 0 && leyendaDescuentoDiaSemana.append(leyendaDomingo);
diaSemana === 2 && leyendaDescuentoDiaSemana.append(leyendaMartes);

// muestra Importe Bruto sin descuentos
let totalCarrito = document.getElementById("totalCarrito");
let totalCarro = 16000; // traer valor de carritoCompra.js
totalCarrito.append(totalCarro)

//mensaje de descuento por dia de semana
let descuentoDiaSemana = document.getElementById("descuentoDiaSemana");
let descuentoDomingo = totalCarro * 0.05;
let descuentoMartes = totalCarro * 0.10;
diaSemana === 0 && descuentoDiaSemana.append(`menos Descuento por dia Domingo: $ ${descuentoDomingo}`);
diaSemana === 2 && descuentoDiaSemana.append(`menos Descuento por dia Martes: $ ${descuentoMartes}`);


//mensaje descuento compra mayor a 10.000
let calculoDescuento = 0;
let descuentoMayor = document.getElementById("descuentoMayor");
function esMayor(){
    if (totalCarro>10000){
        calculoDescuento = totalCarro * 0.10
    }
}
esMayor();
descuentoMayor.append(`menos desc. Compra superior a 10mil: $ ${calculoDescuento}`);


//mensaje de descuento por dia de semana
let totalAntesIVA = document.getElementById("totalAntesIVA");
let sumoDescuentos = 0

function descuentoTotal() {
    
    if (diaSemana === 0 && totalCarro >10000){
        sumoDescuentos = descuentoDomingo + calculoDescuento;
    }else if (diaSemana === 2 && totalCarro >10000){
        sumoDescuentos = descuentoMartes + calculoDescuento;
    }else if (diaSemana === 0 && totalCarro <10000){
        sumoDescuentos = descuentoMartes;
    }else if (diaSemana === 2 && totalCarro <10000){
        sumoDescuentos = descuentoMartes;    
    }else{
        sumoDescuentos = 0;
    }
}
descuentoTotal()
totalAntesIVA.append(`El importe final menos los descuentos es: $ ${totalCarro - sumoDescuentos}`)

// //mensaje de Importe a pagar
let importePagar = document.getElementById("importePagar");
let calculoIva = (totalCarro - sumoDescuentos)*.21;
importePagar.append(`El IVA es de $ ${calculoIva}, por lo que el total a pagar es $ ${totalCarro-sumoDescuentos+calculoIva}`)

