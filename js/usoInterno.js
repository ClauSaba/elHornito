let inventario


fetch("../productos.json")
    .then(response => response.json())
    .then(data => {
        data.forEach((articulos)=>{
            const li = document.createElement("tr");
            li.innerHTML = `
            <td> ${articulos.codigo}</td>
            <td> ${articulos.articulo}</td>
            <td> ${articulos.precio}</td>
            <td> ${articulos.stock}</td>
            `;
            contenedor.append(li)
        })});
    
    
    
    
