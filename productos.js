class productos{
    constructor (codigo, gusto, precio, stock, foto){
    this.codigo = codigo;
    this.gusto = gusto;
    this.precio = precio;
    this.stock = stock;
    this.foto = foto;
    }
    fabricar(cantidad){
        return this.stock = this.stock + cantidad;
    }
    venta(cantidad){
        return this.stock = this.stock - cantidad;
    }
}

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
producto203
]

// let pedidoGusto = inventario.find((e) => e.codigo ===solicitaGusto);
// console.log(pedidoGusto.precio);

// pedidoGusto.venta(solicitaCantidad); //descuenta del stock lo que se vendio
// console.log(pedidoGusto);
// pedidoGusto.fabricar(solicitaCantidad); // envia orden de fabricacion para reponer stock vendido
// console.log(pedidoGusto);

// for(const producto of inventario){
//     let listaProducto = document.createElement("p");
//     listaProducto.innerHTML = `${producto.gusto} ${producto.precio} `;
//     pedido.appendChild(listaProducto);
// }

// let carrito = [""]; //ir sumando elementos a medida que el usuario pone una cantidad dif a 0
// let totalCarrito = (sumatoriaItems);
// let totalPagar = (sumatoriaCarritoMasIva);

// let nombre = prompt("nombre");
// let muestraNombre = document.createElement("strong");
// muestraNombre.innerHTML = `${nombre} , `;
// prueba.append(muestraNombre);



const card = (item)=>{
    return(
        `
        <div class="card d-flex flex-column justify-content-between " style="width: 18rem;">
            <img src="${item.foto}" class="card-img-top" alt="${item.gusto}">
            <div class="card-body ">
                <h5 class="card-title pt-5">${item.gusto}</h5>
                <p class="card-text pt-5">$ ${item.precio}.</p>
                <button class="btn btn-warning pt-5"><a href="#" onclick=agregaCarrito() >Agregar al Carrito</a></button>
            </div>
        </div>
        `

    );
};

const cards = document.getElementById("cartas");
const cargaProducto = (datos, nodo)=>{
    let acumulador = "";
    datos.forEach((elemento) => {
        acumulador += card(elemento);
    })
    nodo.innerHTML = acumulador;
    console.log(acumulador);
};

cargaProducto(inventario,cards);


const agregaCarrito = ()=>{
    
}
localStorage.setItem()