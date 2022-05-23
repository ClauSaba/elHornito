//DECLARACION DE VARIABLES
const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
const tablaCarrito = document.getElementById("tablaCarrito");
const cartas = document.getElementById("cartas");
const vaciaCarrito = document.getElementById("vaciaCarrito");


//DECLARACION DE CLASE Y DOS METODOS PARA CONTABILIZAR STOCKS
class productos{
    constructor (codigo, gusto, precio, stock, foto){
    this.codigo = codigo;
    this.gusto = gusto;
    this.precio = precio;
    this.stock = stock;
    this.foto = foto;
    this.cantidad = 0;
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
const producto102 = new productos (102, "Peperoni", 950, 10, "https://media-cdn.tripadvisor.com/media/photo-s/1c/4f/ee/99/peperoni-especial.jpg")
const producto103 = new productos (103, "Calabresa", 850 , 10, "https://glebekitchen.com/wp-content/uploads/2018/09/neapolitanpepperoni.jpg");
const producto104 = new productos (104, "Roquefort", 1100 , 10, "https://www.recetaspizzas.com/base/stock/Recipe/30-image/30-image_web.jpg");
const producto105 = new productos (105, "Champiniones", 1200 , 10, "https://scontent.fepa9-1.fna.fbcdn.net/v/t1.6435-9/201821439_2557290294417611_9041455878685349021_n.jpg?stp=cp0_dst-jpg_e15_p320x320_q65&_nc_cat=109&ccb=1-6&_nc_sid=9e2e56&efg=eyJpIjoibyJ9&_nc_eui2=AeFipA7cJ7hepjenCrZvp5Huutzf2iAFvdS63N_aIAW91Nfi6Q-9qyeFV4YPUFwZgXHaofpkWetyuJHDHQDVlV9V&_nc_ohc=2YIvJbq8pnkAX8zpsF9&_nc_ht=scontent.fepa9-1.fna&oh=00_AT9YMl29WuGPcND9tFwPPvWRcTRpgxkw7r4gzpG8wTvyWQ&oe=62A137B2");
const producto106 = new productos (106, "CuatroQuesos", 1300 , 10, "https://img.freepik.com/foto-gratis/pizza-napolitana-cuatro-quesos-superficie-decorada_219193-5558.jpg?w=1380");
const producto107 = new productos (107, "Especial", 1700 , 10, "https://elgourmet.s3.amazonaws.com/recetas/cover/pizza_RVQZyW9MGB1e04tjEsHcgTlv5PXFpr.png");
const producto201 = new productos (201, "Harina", 400 , 100, "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/332/489/products/pizza-napoletana-x-kg1-ce598f9d3d6af27d9b16001268709486-640-0.jpg");
const producto202 = new productos (202, "Tomate", 150 , 50, "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/332/489/products/sanmarzano-25-kg1-1b9e9df1452e17b88d16298422225908-640-0.jpg");
const producto203 = new productos (203, "Muzzarella", 500 , 130,"https://static.carrefour.es/hd_510x_/img_pim_food/196268_00_1.jpg") ;
const producto301 = new productos (301, "Curso Intensivo", 9500, 12, "https://scontent.fepa9-2.fna.fbcdn.net/v/t1.6435-9/109132360_107911224342226_4595806117097511062_n.jpg?stp=c0.189.1200.627a_dst-jpg_s843x403&_nc_cat=104&ccb=1-6&_nc_sid=e3f864&_nc_eui2=AeFSQxSFFDOSERlWRGODiaYAlbeYA9jaECmVt5gD2NoQKTxxyY4SvSI_H24_fkTIQnpne4RKgUiN_k55fmNwSVQd&_nc_ohc=fxh3kwyrdd4AX-Yklzv&_nc_ht=scontent.fepa9-2.fna&oh=00_AT8SOsagwNZLKQOazOnZoYtxy6YQUqGDBPQ9Vr-oTc5fBg&oe=62A6D3FD");
const producto302 = new productos (302, "Servicio Eventos", 19500, 12, "https://previews.123rf.com/images/auremar/auremar1110/auremar111002268/11717728-personal-del-sector-de-la-alimentaci%C3%B3n-y-la-restauraci%C3%B3n.jpg");

//DECLARACION ARRAY INVENTARIO
const inventario = [
producto101,
producto102,
producto103,
producto104,
producto105,
producto106,
producto107,
producto201,
producto202,
producto203,
producto301,
producto302
]

// Obtiene nombre de usuario e impreme en pantalla
function obtenerUsuario(){
    if(sessionStorage.getItem("nombre")){
        let muestraNombre = document.createElement("span");
        muestraNombre = sessionStorage.getItem("nombre");
        tituloPaginaCarrito.append(muestraNombre);
    }else{
        const pideNombre = prompt("nombre")
        nombreUsuario = sessionStorage.setItem("nombre", pideNombre +", ");
        let muestraNombre = document.createElement("span");
        muestraNombre = sessionStorage.getItem("nombre");
        tituloPaginaCarrito.append(muestraNombre);
    }
}
obtenerUsuario();

// Crea las cards del carrito
const card = (item)=>{
    return(
        `
        <div class="card text-bg-dark mb-3 " style="width: 18rem;">
            <img src="${item.foto}" class="card-img-top" alt="${item.gusto}">
            <div class="card-body ">
                <h5 class="card-title ">${item.gusto}</h5>
                <p class="card-text ">$ ${item.precio}.</p>
                <button class="${item.codigo} btn btn-warning  ">Agregar al Carrito</button>
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
    cartas.addEventListener("click", agregaCarro);
})();

function agregaCarro(e){
    e.preventDefault();
    const seleccion = e.target.classList[0];
    // ver de agregar cantidad con imput  let cantidad = 1; prod.lenght + 1
    switch(seleccion){
        case("101"):
            localStorage.setItem("producto101", JSON.stringify(producto101))
            carrito.push({
                codigo: producto101.codigo + "asdfg",
                producto: producto101.gusto,
                precio: parseInt(producto101.precio),
                cantidad: parseInt(producto101.cantidad) + 1,      
            })
            break;
        case("102"):
            localStorage.setItem("producto102", JSON.stringify(producto102))
            carrito.push({
                codigo: producto102.codigo,
                producto: producto102.gusto,
                precio: parseInt(producto102.precio),
                cantidad: 1, 
            })    
            break;
        case("103"):
            localStorage.setItem("producto103", JSON.stringify(producto103))
            carrito.push({
                codigo: producto103.codigo,
                producto: producto103.gusto,
                precio: parseInt(producto103.precio),
                cantidad: 1, 
            })    
            break;
        case("104"):
            localStorage.setItem("producto104", JSON.stringify(producto104))
            carrito.push({
                codigo: producto104.codigo,
                producto: producto104.gusto,
                precio: parseInt(producto104.precio),
                cantidad: 1, 
            })    
            break;
        case("105"):
            localStorage.setItem("producto105", JSON.stringify(producto105))
            carrito.push({
                codigo: producto105.codigo,
                producto: producto105.gusto,
                precio: parseInt(producto105.precio),
                cantidad: 1, 
            })    
            break;
        case("106"):
            localStorage.setItem("producto106", JSON.stringify(producto106))
            carrito.push({
                codigo: producto106.codigo,
                producto: producto106.gusto,
                precio: parseInt(producto106.precio),
                cantidad: 1, 
            })    
            break;
        case("107"):
            localStorage.setItem("producto107", JSON.stringify(producto107))
            carrito.push({
                codigo: producto107.codigo,
                producto: producto107.gusto,
                precio: parseInt(producto107.precio),
                cantidad: 1, 
            })    
            break;
        case("201"):
            localStorage.setItem("producto201", JSON.stringify(producto201))
            carrito.push({
                codigo: producto201.codigo,
                producto: producto201.gusto,
                precio: parseInt(producto201.precio),
                cantidad: 1, 
            })    
            break;
        case("202"):
            localStorage.setItem("producto202", JSON.stringify(producto202))
            carrito.push({
                codigo: producto202.codigo,
                producto: producto202.gusto,
                precio: parseInt(producto202.precio),
                cantidad: 1, 
            })    
            break;
        case("203"):
            localStorage.setItem("producto203", JSON.stringify(producto203))
            carrito.push({
                codigo: producto203.codigo,
                producto: producto203.gusto,
                precio: parseInt(producto203.precio),
                cantidad: 1, 
            })    
            break;
        case("301"):
            localStorage.setItem("producto301", JSON.stringify(producto301))
            carrito.push({
                codigo: producto301.codigo,
                producto: producto301.gusto,
                precio: parseInt(producto301.precio),
                cantidad: 1, 
            })    
            break;
        case("302"):
            localStorage.setItem("producto302", JSON.stringify(producto302))
            carrito.push({
                codigo: producto302.codigo,
                producto: producto302.gusto,
                precio: parseInt(producto302.precio),
                cantidad: 1, 
            })    
            break;
        }
    console.log(carrito);
}

//BOTON PARA VACIAR CARRITO
(()=>{    
    vaciaCarrito.addEventListener("click", vaciar);
    
})();
function vaciar(){
    localStorage.clear()
}

//AGREGA FILAS A LA TABLA CON PRODUCTOS ELEGIDOS
const fila = (item) =>{ 
    return(
        `
        <tr>
            <td>${item.codigo}</td>
            <td>${item.gusto}</td>
            <td>${item.precio}</td>
            <td>${item.cantidad}</td>
        </tr>
        `
    );
};

//FUNCION PARA CREAR FILAS EN CARRITO
const cargaFila = (nodo)=>{
    let acumulador = "";
    for(let item of carrito){
        
        acumulador += fila;
    
    }
    // nodo.innerHTML = acumulador;
    console.log(carrito);
}

cargaFila(carrito, tablaCarrito);

/*  EN PROGRESO
function filaTabla(e, nodo){
    e.preventDefault();
    const item =  e.target.classList[0];
    const resultado = inventario.find((el) => el.codigo == "101" )
    let acumulador = "";
    acumulador += fila;
    nodo.innerHTML = acumulador;
    console.log(typeof(item) );
console.log(item);
console.log(resultado) 
}




// let carrito = [""]; //ir sumando elementos a medida que el usuario pone una cantidad dif a 0
// let totalCarrito = (sumatoriaItems);
// let totalPagar = (sumatoriaCarritoMasIva);

// pedidoGusto.venta(solicitaCantidad); //descuenta del stock lo que se vendio
// console.log(pedidoGusto);
// pedidoGusto.fabricar(solicitaCantidad); // envia orden de fabricacion para reponer stock vendido
// console.log(pedidoGusto);

EN PROGRESO */