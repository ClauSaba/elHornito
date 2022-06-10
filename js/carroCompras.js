
//DECLARACION DE VARIABLES
let carrito = [];
const tablaCarrito = document.getElementById("tablaCarrito");
const cartas = document.getElementById("cartas");
const vaciaCarrito = document.getElementById("vaciaCarrito");
let carritoStorage = [];
let sumaCarrito = document.getElementById("sumaCarrito");
let totalCarritoPagos = document.getElementById("totalCarritoPagos");
let fechaCapturada ;
let diaSemana ;
let fecha = Date.now();
let formFecha = document.getElementById("formFecha");
let importePagar = 0;
let calculoIva = 0;
let sumaCarritoFinalizar = 0;


document.addEventListener("DOMContentLoaded", ()=>{
    if (localStorage.getItem("carrito")){ 
        carrito = JSON.parse(localStorage.getItem("carrito"));
        actualizarCarrito();
    }
})

//DECLARACION DE CLASE Y DOS METODOS PARA CONTABILIZAR STOCKS
class productos{
    constructor (codigo, gusto, precio, stock, foto){
    this.codigo = codigo;
    this.gusto = gusto;
    this.precio = precio;
    this.stock = stock;
    this.foto = foto;
    this.cantidadSolicitada = 1;
    }
    fabricar(cantidad){
        return this.stock = this.stock + cantidad;
    }
    venta(cantidad){
        return this.stock = this.stock - cantidad;
    }
}

//DECLARACION DE OBJETOS PRODUCTOS
const producto101 = new productos (101, "Margarita", 800 , 10, "../img/margarita.jpg");
const producto102 = new productos (102, "Peperoni", 950, 10, "../img/peperoni.jpg");
const producto103 = new productos (103, "Calabresa", 850 , 10, "../img/calabresa.jpg");
const producto104 = new productos (104, "Roquefort", 1100 , 10, "../img/roquefort.jpg");
const producto105 = new productos (105, "Champiniones", 1200 , 10, "../img/champiniones.jpg");
const producto106 = new productos (106, "CuatroQuesos", 1300 , 10, "../img/cuatroQuesos.jpg");
const producto107 = new productos (107, "Especial", 1700 , 10, "../img/especial.jpg");
const producto108 = new productos (108, "Veggie", 1150, 10, "../img/veggie.jpg");
const producto201 = new productos (201, "Harina", 400 , 100, "../img/harina.jpg");
const producto202 = new productos (202, "Tomate", 150 , 50, "../img/tomate.jpg");
const producto203 = new productos (203, "Muzzarella", 500 , 130,"../img/muzzarella.jpg") ;
const producto301 = new productos (301, "Servicio Eventos", 19500, 12, "../img/servicioEventos.jpg");

//DECLARACION ARRAY INVENTARIO
const inventario = [
producto101,
producto102,
producto103,
producto104,
producto105,
producto106,
producto107,
producto108,
producto201,
producto202,
producto203,
producto301
];

// Crea las cards del carrito
const card = (item)=>{
    return(
        `
        <div class=" card text-bg-dark mb-3 ">
            <img src="${item.foto}" class="${item.codigo} card-img-top" alt="${item.gusto}">
            <div class="${item.codigo} card-body ">
                <h5 class="${item.codigo} card-title ">${item.gusto}</h5>
                <p class="${item.codigo} card-text ">$ ${item.precio}</p>
                <button class= "${item.codigo} btn btn-warning ">Agregar al Carrito</button>
            </div>
        </div>
        `
    );
};

//FUNCION PARA CREAR CARDS EN PAGINA
const cargaProducto = (datos, nodo)=>{
    let acumulador = "";
    datos.forEach((elemento) => {
        acumulador += card(elemento);
    });
    nodo.innerHTML = acumulador;
};

cargaProducto(inventario,cartas);

//EVENTO QUE DISPARA FUNCION DE AGREGACARRO
(()=>{    
    cartas.addEventListener("click", agregaCarrito);
})();

function agregaCarrito(e){
    e.preventDefault();
    codigo = e.target.classList[0];
    const existente = carrito.some(articulo=> articulo.codigo == codigo);
    
    if(existente){
        const articulo = carrito.map(articulo =>{
                if (articulo.codigo == codigo){
                articulo.cantidadSolicitada++
                actualizarCarrito();
            }
        })
    }else{
    const seleccion = inventario.find((articulo)=> articulo.codigo == codigo);
    carrito.push(seleccion);
    actualizarCarrito();
    }
}

const eliminarCarrito = (codigo) =>{
    const item = carrito.find((articulo)=> articulo.codigo === codigo);
    const index = carrito.indexOf(item);
    carrito.splice(index,1);
    actualizarCarrito();
}

function actualizarCarrito (){
    tablaCarrito.innerHTML= ``
    
    carrito.forEach((item) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
        <td> ${item.codigo}</td>
        <td>${item.gusto}</td>
        <td>$${item.precio}</td>
        <td> <span id = "cantidad">${item.cantidadSolicitada}</span></td>
        <button onclick = "eliminarCarrito(${item.codigo})" class="botonEliminar"><i class="fas fa-trash"</button>
        ` ;
        tablaCarrito.appendChild(tr);

        localStorage.setItem("carrito", JSON.stringify(carrito));
        sumaCarrito.innerHTML = carrito.reduce((acc, prod) => acc + prod.precio*prod.cantidadSolicitada ,0).toFixed(2);
        localStorage.setItem("sumaCarrito", JSON.stringify(sumaCarrito.innerHTML));
    }); 
}

 //BOTON PARA VACIAR CARRITO
(()=>{    
    vaciaCarrito.addEventListener("click", vaciar);   
})();

function vaciar(){
    carrito = [];
    carritoStorage = [];
    localStorage.clear();
    actualizarCarrito();
    sumaCarrito.innerHTML = `0`;
    for (const iterator of inventario) {
        iterator.cantidadSolicitada = 1;  
    }
}

//PIDE FECHA Y CALCULA, DESC ADICIONAL 5% DOMINGO, 10% MARTES
// Captura la fecha seleccionada por el usuario

function fechaPedido(){ 
    fecha = document.getElementById("fecha").value;
    localStorage.setItem("fechaElegida", fecha);
    fechaCapturada = localStorage.getItem("fechaElegida");
    fechaReservaCliente = new Date (fechaCapturada); 
    console.log(fechaReservaCliente);
    diaSemana = fechaReservaCliente.getDay();
    console.log(diaSemana);
    leyendaDescuentoDiaSemana();
    actualizarCarrito ();
}

// Muestra la fecha seleccionada por el usuario
function continuar() {
    actualizarCarrito ();
    actualizaSuma();
    descuentoTotal();
    iva();
    let muestraFecha = moment(fechaCapturada).format("dddd, DD-MM-YYYY"); 

    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
        });

        swalWithBootstrapButtons.fire({
        title: `${muestraFecha}, es correcto?`,
        text: "podes continuar con el pago para finalizar la compra",
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Pagar',
        reverseButtons: true
        }).then((result) => {
        if (result.isConfirmed) {
            fin ()
        }
    })
}

//mensaje de descuento
function leyendaDescuentoDiaSemana(){
    diaSemana === 6 && Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Descuento adicional dia Domingo del 5%!!',
        showConfirmButton: false,
        timer: 3500,
        timerProgressBar: true    
    });
    diaSemana === 1 && Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Descuento adicional dia Martes del 10%!!',
        showConfirmButton: false,
        timer: 3500,
        timerProgressBar: true
    });
}

// muestra Importe Bruto sin descuentos
function actualizaSuma() {
    totalCarritoPagos = document.getElementById("totalCarritoPagos");
    sumaCarritoFinalizar = parseInt(JSON.parse(localStorage.getItem("sumaCarrito"))); 
}
actualizaSuma();

//mensaje de descuento por dia de semana
let descuentoDiaSemana = document.getElementById("descuentoDiaSemana");
let descuentoDomingo = sumaCarritoFinalizar * 0.05;
let descuentoMartes = sumaCarritoFinalizar * 0.10;

//mensaje descuento compra mayor a 10.000
let calculoDescuento = 0;
let descuentoMayor = document.getElementById("descuentoMayor");
function esMayor(){
    if (sumaCarritoFinalizar>10000){
        calculoDescuento = sumaCarritoFinalizar * 0.10
    }
}
esMayor();

//mensaje de descuento por dia de semana
let totalAntesIVA = document.getElementById("totalAntesIVA");
let sumoDescuentos;

function descuentoTotal() {
    
    if (diaSemana === 6 && sumaCarritoFinalizar >10000){
        sumoDescuentos = descuentoDomingo + calculoDescuento;
    }else if (diaSemana === 1 && sumaCarritoFinalizar >10000){
        sumoDescuentos = descuentoMartes + calculoDescuento;
    }else if (diaSemana === 6 && sumaCarritoFinalizar <10000){
        sumoDescuentos = descuentoDomingo;
    }else if (diaSemana === 1 && sumaCarritoFinalizar <10000){
        sumoDescuentos = descuentoMartes;    
    }else if (sumaCarritoFinalizar > 10000){
        sumoDescuentos = calculoDescuento;
    }else{
        sumoDescuentos = 0;
    }
}

// //calculo Iva
function iva() {
    importePagar = document.getElementById("importePagar");
    calculoIva = (sumaCarritoFinalizar - sumoDescuentos)*.21; 
}

function fin (){ 
const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
})  

swalWithBootstrapButtons.fire({
    title: `Total a pagar $ ${parseFloat(sumaCarritoFinalizar-sumoDescuentos+calculoIva).toFixed(2)}`,
    text: `desc. promo +10mil: $ ${parseFloat(calculoDescuento).toFixed(2)}, + desc adicional Martes o Domingo,
    $${parseFloat(sumoDescuentos-calculoDescuento).toFixed(2)}, tené en cuenta que de IVA hay $${parseFloat( calculoIva).toFixed(2)}`,
    
    showCancelButton: true,
    confirmButtonText: 'Pagar',
    cancelButtonText: 'Cancelar',
    reverseButtons: true
}).then((result) => {
    if (result.isConfirmed) {
    swalWithBootstrapButtons.fire(
        'COMPRA REALIZADA',
        '* app realizada solo con fines educativos.',
        'success'
    )
    } else if (
    result.dismiss === Swal.DismissReason.cancel
    ) {
    swalWithBootstrapButtons.fire(
        'Compra Cancelada',
        '* app realizada solo con fines educativos.',
        'error'
    )
    }
})}