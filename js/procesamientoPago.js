/* objetivos comerciales aplicados al carrito de compras
10% en todas las compras a superiores a 10000. Se suman descuentos adicionales del 5 y 10%,
si es domingo o martes respectivamente
*/



// Captura la fecha seleccionada por el usuario
function fechaPedido(){ 
let fecha = document.getElementById("fecha").value;
localStorage.setItem("fechaElegida", fecha);
}
let fechaCapturada = localStorage.getItem("fechaElegida");

// Muestra la fecha seleccionada por el usuario
let muestraFecha = moment(fechaCapturada).format("dddd, DD-MM-YYYY");
let formFecha = document.getElementById("formFecha");
formFecha.append(muestraFecha)

// Calcula el getDay para los futuros calculos
fechaReservaCliente = new Date (fechaCapturada); 
let diaSemana = fechaReservaCliente.getDay();

//mensaje de descuento
function leyendaDescuentoDiaSemana(diaSemana){
    diaSemana === 6 && Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Descuento adicional dia Domingo del 5%!!',
        showConfirmButton: false,
        timer: 3500
    });
    diaSemana === 1 && Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Descuento adicional dia Martes del 10%!!',
        showConfirmButton: false,
        timer: 3500
    });
}
leyendaDescuentoDiaSemana(diaSemana)

// muestra Importe Bruto sin descuentos
let totalCarrito = document.getElementById("totalCarrito");
let totalCarro = 21000; // traer valor de carritoCompra.js
totalCarrito.append(totalCarro)

//mensaje de descuento por dia de semana
let descuentoDiaSemana = document.getElementById("descuentoDiaSemana");
let descuentoDomingo = totalCarro * 0.05;
let descuentoMartes = totalCarro * 0.10;
diaSemana === 6 && descuentoDiaSemana.append(`menos Descuento por dia Domingo: $ ${descuentoDomingo}`);
diaSemana === 1 && descuentoDiaSemana.append(`menos Descuento por dia Martes: $ ${descuentoMartes}`);


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
    
    if (diaSemana === 6 && totalCarro >10000){
        sumoDescuentos = descuentoDomingo + calculoDescuento;
    }else if (diaSemana === 1 && totalCarro >10000){
        sumoDescuentos = descuentoMartes + calculoDescuento;
    }else if (diaSemana === 6 && totalCarro <10000){
        sumoDescuentos = descuentoDomingo;
    }else if (diaSemana === 1 && totalCarro <10000){
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

