
//DECLARACION DE VARIABLES
let carrito = [];
const tablaCarrito = document.getElementById("tablaCarrito");
const cartas = document.getElementById("cartas");
const vaciaCarrito = document.getElementById("vaciaCarrito");
let carritoStorage = []
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
        carrito = JSON.parse(localStorage.getItem("carrito"))
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
const producto101 = new productos (101, "Margarita", 800 , 10, "https://img.freepik.com/foto-gratis/pizza-margarita-artesanal-napolitana-vista-superior_109656-322.jpg?w=1380");
const producto102 = new productos (102, "Peperoni", 950, 10, "https://media-cdn.tripadvisor.com/media/photo-s/1c/4f/ee/99/peperoni-especial.jpg");
const producto103 = new productos (103, "Calabresa", 850 , 10, "https://glebekitchen.com/wp-content/uploads/2018/09/neapolitanpepperoni.jpg");
const producto104 = new productos (104, "Roquefort", 1100 , 10, "https://www.recetaspizzas.com/base/stock/Recipe/30-image/30-image_web.jpg");
const producto105 = new productos (105, "Champiniones", 1200 , 10, "https://scontent.fepa9-1.fna.fbcdn.net/v/t1.6435-9/201821439_2557290294417611_9041455878685349021_n.jpg?stp=cp0_dst-jpg_e15_p320x320_q65&_nc_cat=109&ccb=1-6&_nc_sid=9e2e56&efg=eyJpIjoibyJ9&_nc_eui2=AeFipA7cJ7hepjenCrZvp5Huutzf2iAFvdS63N_aIAW91Nfi6Q-9qyeFV4YPUFwZgXHaofpkWetyuJHDHQDVlV9V&_nc_ohc=2YIvJbq8pnkAX8zpsF9&_nc_ht=scontent.fepa9-1.fna&oh=00_AT9YMl29WuGPcND9tFwPPvWRcTRpgxkw7r4gzpG8wTvyWQ&oe=62A137B2");
const producto106 = new productos (106, "CuatroQuesos", 1300 , 10, "https://img.freepik.com/foto-gratis/pizza-napolitana-cuatro-quesos-superficie-decorada_219193-5558.jpg?w=1380");
const producto107 = new productos (107, "Especial", 1700 , 10, "https://elgourmet.s3.amazonaws.com/recetas/cover/pizza_RVQZyW9MGB1e04tjEsHcgTlv5PXFpr.png");
const producto108 = new productos (108, "Veggie", 1150, 10, "https://scontent.fepa9-1.fna.fbcdn.net/v/t39.30808-6/276310885_1301256686947806_3877128969312656698_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a26aad&_nc_eui2=AeEy3KLYVWUC38e847KINGJy6M3X7-8QbLrozdfv7xBsunqjpXjtIOg3rEY0UzzN6VeL_w0V_BbUMPdmf80pV5T5&_nc_ohc=DjtnxupCEZUAX-wY3NR&_nc_ht=scontent.fepa9-1.fna&oh=00_AT8ZqOd5zR8O_pU0FlQFeGJ1OgR4HMl8t6grQ6na0aRZSA&oe=62A5C9A3");
const producto201 = new productos (201, "Harina", 400 , 100, "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/332/489/products/pizza-napoletana-x-kg1-ce598f9d3d6af27d9b16001268709486-640-0.jpg");
const producto202 = new productos (202, "Tomate", 150 , 50, "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/332/489/products/sanmarzano-25-kg1-1b9e9df1452e17b88d16298422225908-640-0.jpg");
const producto203 = new productos (203, "Muzzarella", 500 , 130,"https://static.carrefour.es/hd_510x_/img_pim_food/196268_00_1.jpg") ;
const producto301 = new productos (301, "Servicio Eventos", 19500, 12, "https://previews.123rf.com/images/auremar/auremar1110/auremar111002268/11717728-personal-del-sector-de-la-alimentaci%C3%B3n-y-la-restauraci%C3%B3n.jpg");

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
]



// Crea las cards del carrito
const card = (item)=>{
    return(
        `
        <div class=" card text-bg-dark mb-3 " style="width: 18rem;">
            <img src="${item.foto}" class="${item.codigo} card-img-top" alt="${item.gusto}">
            <div class="${item.codigo} card-body ">
                <h5 class="${item.codigo} card-title ">${item.gusto}</h5>
                <p class="${item.codigo} card-text ">$ ${item.precio}.</p>
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
    })
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
    console.log(codigo);
    const existente = carrito.some(articulo=> articulo.codigo == codigo)
    
    if(existente){
        const articulo = carrito.map(articulo =>{
                if (articulo.codigo == codigo){
                articulo.cantidadSolicitada++
                actualizarCarrito();
            }
        })
    }else{
    const seleccion = inventario.find((articulo)=> articulo.codigo == codigo)
    carrito.push(seleccion);
    actualizarCarrito();
    }
}

const eliminarCarrito = (codigo) =>{
    const item = carrito.find((articulo)=> articulo.codigo === codigo)
    const index = carrito.indexOf(item)
    carrito.splice(index,1)
    actualizarCarrito()
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
        ` 
        tablaCarrito.appendChild(tr)

        localStorage.setItem("carrito", JSON.stringify(carrito));
        sumaCarrito.innerHTML = carrito.reduce((acc, prod) => acc + prod.precio*prod.cantidadSolicitada ,0)
        localStorage.setItem("sumaCarrito", JSON.stringify(sumaCarrito.innerHTML))

    })
    
}

 //BOTON PARA VACIAR CARRITO
 (()=>{    
    vaciaCarrito.addEventListener("click", vaciar);
    
})();
function vaciar(){
    carrito = []
    carritoStorage = []
    localStorage.clear()
    actualizarCarrito();
    sumaCarrito.innerHTML = `0`
    for (const iterator of inventario) {
        iterator.cantidadSolicitada = 1  
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
    leyendaDescuentoDiaSemana()
    actualizarCarrito ()
}








// Muestra la fecha seleccionada por el usuario
function continuar() {
    actualizarCarrito ()
    actualizaSuma()
    descuentoTotal()
    iva()
    let muestraFecha = moment(fechaCapturada).format("dddd, DD-MM-YYYY"); 

    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
        })

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



// Calcula el getDay para los futuros calculos


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
    function continuar() {}
    
}

// muestra Importe Bruto sin descuentos
function actualizaSuma() {
    totalCarritoPagos = document.getElementById("totalCarritoPagos");
sumaCarritoFinalizar = parseInt(JSON.parse(localStorage.getItem("sumaCarrito"))) 
}
actualizaSuma()

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
let sumoDescuentos

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
    /* Read more about handling dismissals below */
    result.dismiss === Swal.DismissReason.cancel
    ) {
    swalWithBootstrapButtons.fire(
        'Compra Cancelada',
        '* app realizada solo con fines educativos.',
        'error'
    )
    }
})}